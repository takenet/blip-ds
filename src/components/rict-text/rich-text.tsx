import { Element, Component, h, Host, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { getParentsUntil } from '../../utils/position-element';
import { languages } from './rich-text-interface';
import { termTranslate } from './languages';

export type positionBar = 'top' | 'bottom';

@Component({
  tag: 'bds-rich-text',
  styleUrl: 'rich-text.scss',
  shadow: false,
})
export class RichText {
  private buttonsListElement?: HTMLElement = null;
  private buttonsEditElements?: HTMLCollectionOf<HTMLBdsTooltipElement> = null;
  private editor?: HTMLElement = null;
  private dropDownLink?: HTMLBdsDropdownElement = null;
  private inputSetLink?: HTMLBdsInputElement;

  @Element() el: HTMLElement;
  @State() buttomBoldActive?: boolean = false;
  @State() buttomItalicActive?: boolean = false;
  @State() buttomStrikeActive?: boolean = false;
  @State() buttomUnderlineActive?: boolean = false;
  @State() buttomCodeActive?: boolean = false;
  @State() buttomLinkActive?: boolean = false;
  @State() buttomLinkValidDisabled?: boolean = true;
  @State() buttomAlignLeftActive?: boolean = false;
  @State() buttomAlignCenterActive?: boolean = false;
  @State() buttomAlignRightActive?: boolean = false;
  @State() buttomUnorderedListActive?: boolean = false;
  @State() buttomOrderedListActive?: boolean = false;
  @State() buttomQuoteActive?: boolean = false;
  @State() buttomH1Active?: boolean = false;
  @State() buttomH2Active?: boolean = false;
  @State() buttomH3Active?: boolean = false;
  @State() buttomH4Active?: boolean = false;
  @State() buttomH5Active?: boolean = false;
  @State() buttomH6Active?: boolean = false;
  @State() buttomAccordionActive?: boolean = false;
  @State() headerHeight?: string = '32px';
  @State() hasSelectionRange?: boolean = false;
  @State() selectedLinesList?: { element: HTMLElement }[] = null;
  @State() treeElementsEditor?: HTMLElement[] = null;
  @State() styleSectorActive?: string = null;
  @State() styleOnHover?: string = 'teste';
  @State() whenSelectionLink?: Range = null;
  @State() linkButtonInput?: string = null;
  @State() insideComponent?: boolean = false;
  /**
   * Set the language for fixed texts.
   */
  @Prop() language?: languages = 'pt_BR';
  /**
   * weightButton to define if component has Bold Control.
   */
  @Prop() weightButton?: boolean = true;
  /**
   * italicButton to define if component has Italic Control.
   */
  @Prop() italicButton?: boolean = true;
  /**
   * strikeThroughbutton to define if component has Strike Control.
   */
  @Prop() strikeThroughButton?: boolean = true;
  /**
   * underlineButton to define if component has Underline Control.
   */
  @Prop() underlineButton?: boolean = true;
  /**
   * linkButton to define if component has Link Control.
   */
  @Prop() linkButton?: boolean = true;
  /**
   * codeButton to define if component has Code Control.
   */
  @Prop() codeButton?: boolean = true;
  /**
   * alignmentButtons to define if component has TextAlign Control.
   */
  @Prop() alignmentButtons?: boolean = true;
  /**
   * listButtons to define if component has List Control.
   */
  @Prop() listButtons?: boolean = true;
  /**
   * quoteButton to define if component has Quote Control.
   */
  @Prop() quoteButton?: boolean = true;
  /**
   * headingButtons to define if component has Heading Control.
   */
  @Prop() headingButtons?: boolean = true;
  /**
   * unstyledButton to define if component has Unstyled Control.
   */
  @Prop() unstyledButton?: boolean = true;
  /**
   * height is the prop to define height of component.
   */
  @Prop() height?: string = null;
  /**
   * maxHeight is the prop to define max height of component.
   */
  @Prop() maxHeight?: string = null;
  /**
   * positionBar is the prop to define max height of component.
   */
  @Prop() positionBar?: positionBar = 'top';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event({ bubbles: true, composed: true }) bdsRichTextChange!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsRichTextInput!: EventEmitter<KeyboardEvent>;

  /**
   * Event input onblur.
   */
  @Event() bdsBlur: EventEmitter;

  /**
   * Event input focus.
   */
  @Event() bdsFocus: EventEmitter;

  componentDidLoad() {
    if (this.editor.innerHTML.trim() === '') {
      this.editor.innerHTML = '<p class="line"><br></p>';
    }
    if (
      this.weightButton ||
      this.italicButton ||
      this.strikeThroughButton ||
      this.underlineButton ||
      this.linkButton ||
      this.codeButton ||
      this.alignmentButtons ||
      this.listButtons ||
      this.quoteButton ||
      this.headingButtons ||
      this.unstyledButton
    ) {
      this.buttonsEditElements = this.buttonsListElement.getElementsByTagName(
        'bds-tooltip',
      ) as HTMLCollectionOf<HTMLBdsTooltipElement>;
      this.accordionHeader(false);
      this.editor.parentElement.style.height = `calc(100% - 56px)`;
    } else {
      this.editor.parentElement.style.height = `100%`;
    }
  }

  @Watch('weightButton')
  @Watch('italicButton')
  @Watch('strikeThroughButton')
  @Watch('underlineButton')
  @Watch('linkButton')
  @Watch('codeButton')
  @Watch('alignmentButtons')
  @Watch('listButtons')
  @Watch('quoteButton')
  @Watch('headingButtons')
  @Watch('unstyledButton')
  protected buttomsHeaderChanged(): void {
    setTimeout(() => this.accordionHeader(this.buttomAccordionActive), 500);
  }

  @Watch('buttomAccordionActive')
  protected buttomAccordionActiveChanged(): void {
    this.accordionHeader(this.buttomAccordionActive);
  }

  private updateToolbarState() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement =
      commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : (commonAncestor as HTMLElement);
    this.treeElementsEditor = getParentsUntil(parentElement, '.editor-uai-design-system');
  }

  // Coloca o cursor no final do editor
  private accordionHeader(value: boolean) {
    const allbuttonsEditElementsWidth = this.buttonsEditElements.length * 40;
    const buttonsListWidth = this.buttonsListElement.offsetWidth;
    const buttonAccordion = this.el.querySelector('#buttonAccordion') as HTMLBdsButtonElement;
    if (buttonsListWidth < allbuttonsEditElementsWidth) {
      buttonAccordion.classList.add('active');
    } else {
      buttonAccordion.classList.remove('active');
    }
    const diferrence = (buttonsListWidth * this.buttonsEditElements.length) / allbuttonsEditElementsWidth;
    const numberOfColumns = Math.ceil(allbuttonsEditElementsWidth / buttonsListWidth);
    const allbuttonsEditElements = Array.from(this.buttonsEditElements);
    allbuttonsEditElements.slice(0, Math.floor(diferrence)).forEach((element) => {
      element.classList.add('active');
    });
    if (value) {
      allbuttonsEditElements.forEach((element) => {
        element.classList.add('active');
        this.editor.parentElement.style.height = `calc(100% - ${numberOfColumns * 32 + 24}px)`;
      });
    } else {
      allbuttonsEditElements.slice(Math.floor(diferrence)).forEach((element) => {
        element.classList.remove('active');
        this.editor.parentElement.style.height = `calc(100% - 56px)`;
      });
    }
  }

  @Watch('treeElementsEditor')
  protected treeElementsEditorChanged(value): void {
    const tagList = value.map((element) => element?.tagName.toLowerCase());
    const tagVerifyName = (tag) => tagList.includes(tag);
    const getLine = value.find((el) => el?.classList.contains('line'));
    this.buttomBoldActive = tagVerifyName('b');
    this.buttomItalicActive = tagVerifyName('i');
    this.buttomStrikeActive = tagVerifyName('strike');
    this.buttomUnderlineActive = tagVerifyName('u');
    this.buttomLinkActive = tagVerifyName('a');
    this.buttomCodeActive = tagVerifyName('code');
    this.buttomAlignLeftActive = getLine?.style.textAlign === 'left';
    this.buttomAlignCenterActive = getLine?.style.textAlign === 'center';
    this.buttomAlignRightActive = getLine?.style.textAlign === 'right';
    this.buttomUnorderedListActive = tagList[0] === 'ul';
    this.buttomOrderedListActive = tagList[0] === 'ol';
    this.buttomQuoteActive = tagVerifyName('blockquote');
    this.buttomH1Active = tagVerifyName('h1');
    this.buttomH2Active = tagVerifyName('h2');
    this.buttomH3Active = tagVerifyName('h3');
    this.buttomH4Active = tagVerifyName('h4');
    this.buttomH5Active = tagVerifyName('h5');
    this.buttomH6Active = tagVerifyName('h6');
  }

  private refButtonsListElement = (el: HTMLElement): void => {
    this.buttonsListElement = el;
  };
  private refeditorElement = (el: HTMLElement): void => {
    this.editor = el;
  };
  private refDropDownLinkElement = (el: HTMLBdsDropdownElement): void => {
    this.dropDownLink = el;
  };

  private refInputSetLink = (el: HTMLBdsInputElement): void => {
    this.inputSetLink = el;
  };

  private clearToolbar = () => {
    this.buttomBoldActive = false;
    this.buttomItalicActive = false;
    this.buttomStrikeActive = false;
    this.buttomUnderlineActive = false;
    this.buttomLinkActive = false;
    this.buttomCodeActive = false;
    this.buttomAlignLeftActive = false;
    this.buttomAlignCenterActive = false;
    this.buttomAlignRightActive = false;
    this.buttomUnorderedListActive = false;
    this.buttomOrderedListActive = false;
    this.buttomQuoteActive = false;
    this.buttomH1Active = false;
    this.buttomH2Active = false;
    this.buttomH3Active = false;
    this.buttomH4Active = false;
    this.buttomH5Active = false;
    this.buttomH6Active = false;
  };

  private setheaderHeight = () => {
    this.buttomAccordionActive = !this.buttomAccordionActive;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    // Limpa a seleção para evitar comportamento inesperado
    selection.removeAllRanges();
    selection.addRange(range);
  };

  private onBlur = () => {
    this.el.classList.remove('active');
    if (this.insideComponent === false) {
      this.clearToolbar();
    }
    this.bdsBlur.emit();
  };

  private onFocus = () => {
    this.el.classList.add('active');
    this.bdsFocus.emit();
  };

  // Função para ajustar parágrafos durante a edição
  private onInput(ev: Event) {
    ev.preventDefault();
    this.bdsRichTextInput.emit(ev as KeyboardEvent);

    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const currentNode = range.startContainer;

    // Se o nó atual é uma `div`, converta-o em um `p`
    if (currentNode.nodeType === Node.ELEMENT_NODE && (currentNode as HTMLElement).tagName === 'DIV') {
      const divElement = currentNode as HTMLElement;

      const pElement = document.createElement('p');
      pElement.classList.add('line');
      pElement.innerHTML = divElement.innerHTML;

      divElement.parentNode.replaceChild(pElement, divElement);
    }

    // Garante que novas linhas (Enter) criem <p> ao invés de <div>
    this.editor.querySelectorAll('div').forEach((div) => {
      const p = document.createElement('p');
      p.classList.add('line');
      p.innerHTML = div.innerHTML;
      div.replaceWith(p);
    });
  }

  private onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      const startNode = range.startContainer;

      // Encontra o elemento de bloco que contém o cursor
      let blockElement = startNode.nodeType === Node.TEXT_NODE ? startNode.parentElement : (startNode as HTMLElement);

      while (blockElement && !blockElement.classList.contains('line') && blockElement !== this.editor) {
        blockElement = blockElement.parentElement;
      }

      // Se o elemento atual for um <blockquote> e estiver vazio, removê-lo
      if (
        blockElement &&
        blockElement.tagName === 'BLOCKQUOTE' &&
        blockElement.classList.contains('line') &&
        blockElement.innerText.length <= 1
      ) {
        event.preventDefault(); // Impede a exclusão padrão
        blockElement.remove(); // Remove apenas o blockquote vazio
      }
    }
    if (this.editor.textContent.length === 0 && event.key === 'Backspace') {
      event.preventDefault();
      this.editor.innerHTML = `<p class="line"><br></p>`;
      this.setCursorToEnd();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
      event.preventDefault(); // Impede o Ctrl+Z
      event.stopPropagation(); // Evita que afete outros elementos
    }
  };

  // Controle a navegação do componente
  private onFocusEditorBar(ev: FocusEvent) {
    const editorBar = ev.target as HTMLElement;
    const NextButton = editorBar.nextElementSibling.querySelector('bds-button');
    const ElementToFocus = NextButton.shadowRoot.querySelector('.focus') as HTMLElement;
    ElementToFocus.focus();
    this.buttomAccordionActive = true;
  }

  // Coloca o cursor no final do editor
  private setCursorToEnd() {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this.editor);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  private tagName(tag: string, tagList: HTMLElement[]): boolean {
    const value = tagList.map((element) => element?.tagName.toLowerCase());
    return value.includes(tag);
  }

  private wrapSelection(ev: CustomEvent, tag: string, link?: string) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    if (!this.editor.contains(selection.anchorNode)) return;

    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement =
      commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : (commonAncestor as HTMLElement);

    const tagList = getParentsUntil(parentElement, '.line');
    const isTagApplied = this.tagName(tag, tagList);

    // Se a seleção estiver vazia, cria um espaço invisível para edição
    let content: DocumentFragment;
    let collapsedCursor = false;

    // Se a tag já está aplicada e o usuário quer remover
    if (isTagApplied) {
      const appliedTag = tagList.find((el) => el.tagName.toLowerCase() === tag);
      if (appliedTag) {
        const parent = appliedTag.parentElement;
        const isFullSelection = range.toString().trim() === appliedTag.textContent.trim();
        const isAtEndOfTag = range.endOffset === appliedTag.textContent.length;

        if (isFullSelection && parent) {
          // Remove a tag se toda a seleção corresponde ao conteúdo da tag
          while (appliedTag.firstChild) {
            parent.insertBefore(appliedTag.firstChild, appliedTag);
          }
          parent.removeChild(appliedTag);
          selection.removeAllRanges();
          selection.addRange(range);
          this.updateToolbarState();
        } else if (isAtEndOfTag) {
          // Se o cursor está no final da tag, move para fora dela
          content = document.createDocumentFragment();
          const placeholder = document.createTextNode('\u200B'); // Zero-width space
          content.appendChild(placeholder);
          collapsedCursor = true;
          const newRange = document.createRange();
          newRange.setStartAfter(appliedTag); // Define o início depois do elemento
          newRange.setEndAfter(appliedTag);
          newRange.insertNode(content);
          selection.removeAllRanges();
          selection.addRange(newRange);
          this.updateToolbarState();
        } else {
          // Se o cursor está no final da tag, move para fora dela
          selection.removeAllRanges();
          selection.addRange(range);
          this.updateToolbarState();
        }
      }
      return;
    }

    if (range.collapsed) {
      content = document.createDocumentFragment();
      const placeholder = document.createTextNode('\u200B'); // Zero-width space
      content.appendChild(placeholder);
      collapsedCursor = true;
    } else {
      content = range.extractContents();
    }

    // Remove tags desnecessárias dentro da seleção
    content.querySelectorAll('*').forEach((element) => {
      while (element.firstChild) {
        element.parentNode.insertBefore(element.firstChild, element);
      }
      element.remove();
    });

    // Cria a nova tag e aplica o conteúdo extraído
    const wrapper = document.createElement(tag);
    if (tag === 'a' && link) {
      wrapper.setAttribute('href', link);
    }
    wrapper.appendChild(content);
    range.insertNode(wrapper);

    // Remove tags vazias no editor
    this.editor.querySelectorAll('*').forEach((el) => {
      if (!el.textContent.trim() && el.children.length === 0) {
        el.remove();
      }
    });

    // Se o cursor estava no meio da edição, mantém a seleção original
    const newRange = document.createRange();
    if (collapsedCursor) {
      newRange.setStart(wrapper, 0);
      newRange.setEnd(wrapper, 1);
    } else {
      newRange.setStartBefore(wrapper.firstChild || wrapper);
      newRange.setEndAfter(wrapper.lastChild || wrapper);
    }
    selection.removeAllRanges();

    selection.addRange(newRange);

    this.updateToolbarState();

    // Emite o evento para atualizar o estado
    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
  }

  private wrapSelectionLine(tag: string, enableLinesReturn: boolean = false) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    if (!this.editor.contains(selection.anchorNode)) return;

    const range = selection.getRangeAt(0);
    const startNode = range.startContainer as HTMLElement;
    const endNode = range.endContainer as HTMLElement;

    // Obtém todas as linhas afetadas pela seleção
    const selectedLines = new Set<HTMLElement>();

    let currentNode = startNode.parentElement;
    while (currentNode && currentNode !== endNode.parentElement) {
      let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : (currentNode as HTMLElement);
      if (element && element.classList.contains('line')) {
        selectedLines.add(element);
      }
      currentNode = (currentNode.nextSibling as HTMLElement) || (currentNode.parentElement?.nextSibling as HTMLElement);
    }

    // Adiciona a última linha caso tenha sido ignorada
    let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : (endNode as HTMLElement);
    while (endElement && !endElement.classList.contains('line') && endElement !== this.editor) {
      endElement = endElement.parentElement;
    }
    if (endElement && endElement.classList.contains('line')) {
      selectedLines.add(endElement);
    }

    // Verifica se todas as linhas já possuem a tag escolhida
    const allAreSameTag = [...selectedLines].every((line) =>
      tag === 'li' ? false : line.tagName.toLowerCase() === tag,
    );

    const returnSelected: HTMLElement[] = [...selectedLines].map((el) => {
      const newElement = document.createElement(allAreSameTag ? 'p' : tag);
      newElement.classList.add('line');
      newElement.innerHTML = el.innerHTML;
      el.replaceWith(newElement);
      return newElement;
    });

    if (enableLinesReturn) {
      this.selectedLinesList = returnSelected.map((element) => ({ element }));
    }

    // Limpa a seleção para evitar comportamento inesperado
    const newRange = document.createRange();
    let lastNode = returnSelected[0].lastChild;

    // Se não houver filhos, cria um nó de texto para evitar erro
    if (!lastNode) {
      lastNode = document.createTextNode('');
      returnSelected[0].appendChild(lastNode);
    }

    // Se o último nó for outro elemento, busca um nó de texto dentro dele
    while (lastNode && lastNode.nodeType !== Node.TEXT_NODE) {
      lastNode = lastNode.lastChild || lastNode;
    }

    // Define o range no final do último nó de texto
    newRange.setStart(lastNode, lastNode.textContent?.length || 0);
    newRange.setEnd(lastNode, lastNode.textContent?.length || 0);
    selection.removeAllRanges();
    selection.addRange(newRange);

    this.updateToolbarState();

    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
  }

  // Função para aplicar alinhamento ao texto selecionado
  private alignText(ev: CustomEvent, alignment: 'left' | 'center' | 'right' | 'justify') {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    let blockElement = range.startContainer as HTMLElement;

    // Percorre os elementos até encontrar um bloco válido que tenha a classe "line"
    while (blockElement && blockElement !== this.editor) {
      if (blockElement.nodeType === Node.ELEMENT_NODE && blockElement.classList.contains('line')) {
        break;
      }
      blockElement = blockElement.parentElement;
    }

    // Se encontrou um elemento de bloco com a classe "line"
    if (blockElement && blockElement !== this.editor) {
      // Verifica se o alinhamento já está aplicado
      const currentAlignment = (blockElement as HTMLElement).style.textAlign;
      if (currentAlignment === alignment) {
        // Se já estiver alinhado, remove o alinhamento
        (blockElement as HTMLElement).style.textAlign = '';
      } else {
        // Caso contrário, aplica o alinhamento
        (blockElement as HTMLElement).style.textAlign = alignment;
      }
    }

    // Limpa a seleção para evitar comportamento inesperado
    selection.removeAllRanges();
    selection.addRange(range);

    this.updateToolbarState();

    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
  }

  // Função para criar/remover lista (ordenada ou não ordenada)
  private createHeading(ev: CustomEvent, type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote') {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    if (!this.editor.contains(selection.anchorNode)) return;
    this.wrapSelectionLine(type, true);
    const firstItemList = this.selectedLinesList[0]?.element;
    const firstParent = firstItemList.parentElement.previousElementSibling;
    const lastParent = firstItemList.parentElement.nextElementSibling;
    const parent = firstItemList.parentElement;
    if (parent.tagName.toLowerCase() === 'ul') {
      this.selectedLinesList.forEach((item) => {
        if (firstParent) {
          firstParent.insertAdjacentElement('afterend', item.element);
        } else if (lastParent) {
          lastParent.insertAdjacentElement('beforebegin', item.element);
        } else {
          this.editor.insertAdjacentElement('afterbegin', item.element);
        }
      });
      if (Array.from(parent.getElementsByTagName('li')).length == 0) {
        parent.remove();
      }
    }
  }

  // Função para criar/remover lista (ordenada ou não ordenada)
  private createList(ev: CustomEvent, type: 'ol' | 'ul') {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    if (!this.editor.contains(selection.anchorNode)) return;
    this.wrapSelectionLine('li', true);
    const firstItemList = this.selectedLinesList[0].element;
    const lastItemList = this.selectedLinesList[this.selectedLinesList.length - 1]?.element;
    const wrapper = document.createElement(type);
    const parent = firstItemList.parentElement;

    if (!this.verifyList(firstItemList, lastItemList)) {
      parent.insertBefore(wrapper, firstItemList);
      this.selectedLinesList.forEach((item) => {
        wrapper.appendChild(item.element);
      });
    } else {
      const parentListElements = parent.getElementsByTagName('li');
      const parentList = Array.from(parentListElements).map((element) => ({ element }));

      if (parentList.length == this.selectedLinesList.length) {
        if (type !== parent.tagName.toLowerCase()) {
          wrapper.innerHTML = parent.innerHTML;
          parent.parentNode.replaceChild(wrapper, parent);
        } else {
          this.selectedLinesList.forEach((item) => {
            const tagList = parent.parentElement.tagName.toLowerCase() === 'li' ? 'li' : 'p';
            const newElement = document.createElement(tagList);
            newElement.classList.add('line');
            newElement.innerHTML = item.element.innerHTML;
            if (parent.parentElement.tagName.toLowerCase() === 'li') {
              parent.parentElement.insertAdjacentElement('afterend', newElement);
            } else {
              parent.previousElementSibling.insertAdjacentElement('afterend', newElement);
            }
            parent.removeChild(item.element);
          });
          parent.remove();
        }
      } else {
        // parent.insertBefore(wrapper, firstItemList);
        firstItemList.previousElementSibling.insertAdjacentElement('beforeend', wrapper);
        this.selectedLinesList.forEach((item) => {
          wrapper.appendChild(item.element);
        });
      }
    }
  }

  private addSelectionLink(ev: CustomEvent) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      this.dropDownLink.setOpen();
    }
    this.editor.focus();
    const selection = window.getSelection();
    this.whenSelectionLink = selection.getRangeAt(0);
    const ElementToFocus = this.inputSetLink.shadowRoot.querySelector('.input__container__text') as HTMLInputElement;
    ElementToFocus.focus();
  }

  private addLinkInput(ev: CustomEvent) {
    ev.preventDefault();
    const input = ev.target as HTMLInputElement | null;
    this.linkButtonInput = input.value;
    if (this.linkButtonInput.length > 0) {
      this.buttomLinkValidDisabled = false;
    } else {
      this.buttomLinkValidDisabled = true;
    }
  }

  private createLinkKeyDown(ev: KeyboardEvent) {
    if (ev.key == 'Enter') {
      this.createLink(ev);
    }
  }

  private createLink(ev) {
    ev.preventDefault();
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(this.whenSelectionLink);
    this.wrapSelection(ev, 'a', this.linkButtonInput);
    if (this.dropDownLink) {
      this.dropDownLink.setClose();
    }
  }

  private verifyList(firstItem: HTMLElement, lastItem: HTMLElement) {
    const firstItemValue =
      firstItem.parentElement.tagName.toLowerCase() === 'ul' || firstItem.parentElement.tagName.toLowerCase() === 'ol';
    const lastItemValue =
      lastItem.parentElement.tagName.toLowerCase() === 'ul' || lastItem.parentElement.tagName.toLowerCase() === 'ol';
    return firstItemValue && lastItemValue;
  }

  // Função para limpar o HTML ao colar conteúdo
  private handlePaste(event: ClipboardEvent) {
    event.preventDefault(); // Bloqueia a colagem padrão
    event.stopPropagation(); // Evita que afete outros elementos

    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const plainText = clipboardData.getData('text/plain'); // Obtém apenas texto puro

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement =
      commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : (commonAncestor as HTMLElement);
    if (parentElement.classList.contains('line')) {
      parentElement.remove();
    }

    range.deleteContents(); // Remove qualquer seleção existente

    // Converte cada linha do texto colado em <p class="line">
    const fragment = document.createDocumentFragment();
    plainText.split('\n').forEach((line) => {
      if (line.trim()) {
        const p = document.createElement('p');
        p.classList.add('line');
        p.textContent = line.trim();
        fragment.appendChild(p);
      }
    });

    // Insere o conteúdo processado no local do cursor
    range.insertNode(fragment);

    // Ajusta o cursor para o final do texto inserido
    selection.removeAllRanges();
    selection.addRange(range);
  }

  // Função para restaurar a formatação do texto selecionado
  private clearFormatting(ev: CustomEvent) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const startNode = range.startContainer as HTMLElement;
    const endNode = range.endContainer as HTMLElement;

    // Obtém todas as linhas afetadas pela seleção
    const selectedLines = new Set<HTMLElement>();

    let currentNode = startNode.parentElement;
    while (currentNode && currentNode !== endNode.parentElement) {
      let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : (currentNode as HTMLElement);
      if (element && element.classList.contains('line')) {
        selectedLines.add(element);
      }
      currentNode = (currentNode.nextSibling as HTMLElement) || (currentNode.parentElement?.nextSibling as HTMLElement);
    }

    // Adiciona a última linha caso tenha sido ignorada
    let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : (endNode as HTMLElement);
    while (endElement && !endElement.classList.contains('line') && endElement !== this.editor) {
      endElement = endElement.parentElement;
    }
    if (endElement && endElement.classList.contains('line')) {
      selectedLines.add(endElement);
    }

    // Remove a formatação de cada linha
    selectedLines.forEach((line) => {
      line.innerHTML = line.textContent; // Remove todas as tags HTML
      line.style.textAlign = ''; // Remove o alinhamento
    });

    this.wrapSelectionLine('p', true);

    // Limpa a seleção para evitar comportamento inesperado
    selection.removeAllRanges();
    selection.addRange(range);
  }

  render() {
    return (
      <Host
        class={{
          [`rich-text`]: true,
          [`rich-text-${this.positionBar}`]: true,
        }}
        style={{ height: this.height, maxHeight: this.maxHeight }}
        tabindex="0"
        onMouseEnter={() => (this.insideComponent = true)}
        onMouseLeave={() => (this.insideComponent = false)}
      >
        <div class="preview">
          <div
            data-test={this.dataTest}
            ref={(el) => this.refeditorElement(el)}
            contentEditable="true"
            class="editor-uai-design-system"
            tabindex="0"
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onMouseUp={() => this.updateToolbarState()}
            onKeyUp={() => this.updateToolbarState()}
            onKeyDown={(ev) => this.onKeydown(ev)}
            onInput={(ev) => this.onInput(ev)}
            onPaste={this.handlePaste.bind(this)}
          ></div>
        </div>

        <bds-grid
          class={{
            [`format-buttons`]: true,
            [`format-buttons-active`]:
              this.weightButton ||
              this.italicButton ||
              this.strikeThroughButton ||
              this.underlineButton ||
              this.linkButton ||
              this.codeButton ||
              this.alignmentButtons ||
              this.listButtons ||
              this.quoteButton ||
              this.headingButtons ||
              this.unstyledButton,
          }}
        >
          <div class="accordion-header">
            <bds-grid ref={(el) => this.refButtonsListElement(el)} class="buttons-list" flex-wrap="wrap">
              <div onFocus={(ev) => this.onFocusEditorBar(ev)} tabindex="1" class="editor-bar"></div>
              {this.weightButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'bold')}`} position="top-center">
                  <bds-button
                    variant={this.buttomBoldActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.wrapSelection(ev, 'b')}
                    icon-left="text-style-bold"
                    aria-label={`${termTranslate(this.language, 'bold')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.italicButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'italic')}`} position="top-center">
                  <bds-button
                    variant={this.buttomItalicActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.wrapSelection(ev, 'i')}
                    icon-left="text-style-italic"
                    aria-label={`${termTranslate(this.language, 'italic')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.strikeThroughButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'strike')}`} position="top-center">
                  <bds-button
                    variant={this.buttomStrikeActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.wrapSelection(ev, 'strike')}
                    icon-left="text-style-strikethrough"
                    aria-label={`${termTranslate(this.language, 'strike')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.underlineButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'underline')}`} position="top-center">
                  <bds-button
                    variant={this.buttomUnderlineActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.wrapSelection(ev, 'u')}
                    icon-left="text-style-underline"
                    aria-label={`${termTranslate(this.language, 'underline')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.linkButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'link')}`} position="top-center">
                  {this.buttomLinkActive ? (
                    <bds-button
                      variant="solid"
                      color="content"
                      size="short"
                      onBdsClick={(ev) => this.wrapSelection(ev, 'a')}
                      icon-left="link"
                      aria-label={`${termTranslate(this.language, 'link')}`}
                    ></bds-button>
                  ) : (
                    <bds-dropdown
                      ref={(el) => this.refDropDownLinkElement(el)}
                      activeMode="click"
                      position="bottom-left"
                    >
                      <div slot="dropdown-activator">
                        <bds-button
                          slot="dropdown-activator"
                          variant="text"
                          color="content"
                          size="short"
                          onBdsClick={(ev) => this.addSelectionLink(ev)}
                          icon-left="link"
                          aria-label={`${termTranslate(this.language, 'link')}`}
                        ></bds-button>
                      </div>
                      <bds-grid padding="half" alignItems="center" gap="half" slot="dropdown-content">
                        <bds-input
                          ref={this.refInputSetLink}
                          onBdsInput={(ev) => this.addLinkInput(ev)}
                          style={{ flexShrink: '99999' }}
                          placeholder="adcione o link aqui"
                          onKeyDown={(ev) => this.createLinkKeyDown(ev)}
                          tabindex={this.dropDownLink?.open ? '1' : '-1'}
                        ></bds-input>
                        <bds-button
                          disabled={this.buttomLinkValidDisabled}
                          icon-left="check"
                          onBdsClick={(ev) => this.createLink(ev)}
                          tabindex={this.dropDownLink?.open ? '1' : '-1'}
                          aria-label={`${termTranslate(this.language, 'link')}`}
                        ></bds-button>
                      </bds-grid>
                    </bds-dropdown>
                  )}
                </bds-tooltip>
              )}
              {this.codeButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'code')}`} position="top-center">
                  <bds-button
                    variant={this.buttomCodeActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.wrapSelection(ev, 'code')}
                    icon-left="code"
                    aria-label={`${termTranslate(this.language, 'code')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.alignmentButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'align_left')}`} position="top-center">
                  <bds-button
                    variant={this.buttomAlignLeftActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.alignText(ev, 'left')}
                    icon-left="align-left"
                    aria-label={`${termTranslate(this.language, 'align_left')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.alignmentButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'align_center')}`} position="top-center">
                  <bds-button
                    variant={this.buttomAlignCenterActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.alignText(ev, 'center')}
                    icon-left="align-center"
                    aria-label={`${termTranslate(this.language, 'align_center')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.alignmentButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'align_right')}`} position="top-center">
                  <bds-button
                    variant={this.buttomAlignRightActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.alignText(ev, 'right')}
                    icon-left="align-right"
                    aria-label={`${termTranslate(this.language, 'align_right')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.listButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'unordered_list')}`} position="top-center">
                  <bds-button
                    variant={this.buttomUnorderedListActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createList(ev, 'ul')}
                    icon-left="unordered-list"
                    aria-label={`${termTranslate(this.language, 'unordered_list')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.listButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'ordered_list')}`} position="top-center">
                  <bds-button
                    variant={this.buttomOrderedListActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createList(ev, 'ol')}
                    icon-left="ordered-list"
                    aria-label={`${termTranslate(this.language, 'ordered_list')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.quoteButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'quote')}`} position="top-center">
                  <bds-button
                    variant={this.buttomQuoteActive ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'blockquote')}
                    icon-left="quote"
                    aria-label={`${termTranslate(this.language, 'quote')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h1')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH1Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h1')}
                    icon-left="h-1"
                    aria-label={`${termTranslate(this.language, 'h1')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h2')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH2Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h2')}
                    icon-left="h-2"
                    aria-label={`${termTranslate(this.language, 'h2')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h3')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH3Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h3')}
                    icon-left="h-3"
                    aria-label={`${termTranslate(this.language, 'h3')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h4')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH4Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h4')}
                    icon-left="h-4"
                    aria-label={`${termTranslate(this.language, 'h4')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h5')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH5Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h5')}
                    icon-left="h-5"
                    aria-label={`${termTranslate(this.language, 'h5')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.headingButtons && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'h6')}`} position="top-center">
                  <bds-button
                    variant={this.buttomH6Active ? 'solid' : 'text'}
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.createHeading(ev, 'h6')}
                    icon-left="h-6"
                    aria-label={`${termTranslate(this.language, 'h6')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
              {this.unstyledButton && (
                <bds-tooltip tooltip-text={`${termTranslate(this.language, 'clear_formatting')}`} position="top-center">
                  <bds-button
                    variant="text"
                    color="content"
                    size="short"
                    onBdsClick={(ev) => this.clearFormatting(ev)}
                    icon-left="unstyled"
                    aria-label={`${termTranslate(this.language, 'clear_formatting')}`}
                  ></bds-button>
                </bds-tooltip>
              )}
            </bds-grid>
            <bds-button
              id="buttonAccordion"
              variant={this.buttomAccordionActive ? 'solid' : 'text'}
              class="arrow-down"
              color="content"
              size="short"
              onBdsClick={() => this.setheaderHeight()}
              icon-left={
                this.positionBar == 'top'
                  ? this.buttomAccordionActive
                    ? 'arrow-up'
                    : 'arrow-down'
                  : this.buttomAccordionActive
                    ? 'arrow-down'
                    : 'arrow-up'
              }
            ></bds-button>
          </div>
        </bds-grid>
      </Host>
    );
  }
}
