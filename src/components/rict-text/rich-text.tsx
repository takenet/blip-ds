import { Element, Component, h, Host, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { getParentsUntil } from '../../utils/position-element';
import { languages } from './rich-text-interface';
import { termTranslate } from './languages';

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

  @Element() el: HTMLElement;
  @State() buttomBoldActive?: boolean = false;
  @State() buttomBoldDisabled?: boolean = true;
  @State() buttomItalicActive?: boolean = false;
  @State() buttomItalicDisabled?: boolean = true;
  @State() buttomStrikeActive?: boolean = false;
  @State() buttomStrikeDisabled?: boolean = true;
  @State() buttomUnderlineActive?: boolean = false;
  @State() buttomUnderlineDisabled?: boolean = true;
  @State() buttomCodeActive?: boolean = false;
  @State() buttomCodeDisabled?: boolean = true;
  @State() buttomLinkActive?: boolean = false;
  @State() buttomLinkDisabled?: boolean = true;
  @State() buttomLinkValidDisabled?: boolean = true;
  @State() buttomAlignLeftActive?: boolean = false;
  @State() buttomAlignLeftDisabled?: boolean = true;
  @State() buttomAlignCenterActive?: boolean = false;
  @State() buttomAlignCenterDisabled?: boolean = true;
  @State() buttomAlignRightActive?: boolean = false;
  @State() buttomAlignRightDisabled?: boolean = true;
  @State() buttomUnorderedListActive?: boolean = false;
  @State() buttomUnorderedListDisabled?: boolean = true;
  @State() buttomOrderedListActive?: boolean = false;
  @State() buttomOrderedListDisabled?: boolean = true;
  @State() buttomQuoteActive?: boolean = false;
  @State() buttomQuoteDisabled?: boolean = true;
  @State() buttomH1Active?: boolean = false;
  @State() buttomH1Disabled?: boolean = true;
  @State() buttomH2Active?: boolean = false;
  @State() buttomH2Disabled?: boolean = true;
  @State() buttomH3Active?: boolean = false;
  @State() buttomH3Disabled?: boolean = true;
  @State() buttomH4Active?: boolean = false;
  @State() buttomH4Disabled?: boolean = true;
  @State() buttomH5Active?: boolean = false;
  @State() buttomH5Disabled?: boolean = true;
  @State() buttomH6Active?: boolean = false;
  @State() buttomH6Disabled?: boolean = true;
  @State() buttomUnStyledDisabled?: boolean = true;
  @State() buttomAccordionActive?: boolean = false;
  @State() headerHeight?: string = '32px';
  @State() hasSelectionRange?: boolean = false;
  @State() selectedLinesList?: { element: HTMLElement }[] = null;
  @State() treeElementsEditor?: HTMLElement[] = null;
  @State() styleSectorActive?: string = null;
  @State() styleOnHover?: string = 'teste';
  @State() whenSelectionLink?: Range = null;
  @State() linkButtonInput?: string = null;
  /**
   * Set the language for fixed texts.
   */
  @Prop() language?: languages = 'pt_BR';
  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() height?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Emitted when the value has changed.
   */
  @Event({ bubbles: true, composed: true }) bdsChangeRichText!: EventEmitter;

  /**
   * Emitted when the input has changed.
   */
  @Event() bdsInputRichText!: EventEmitter<KeyboardEvent>;

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
    this.buttonsEditElements = this.buttonsListElement.getElementsByTagName(
      'bds-tooltip',
    ) as HTMLCollectionOf<HTMLBdsTooltipElement>;
    this.accordionHeader(false);
    this.editor.parentElement.style.height = `calc(100% - 56px)`;
  }

  @Watch('buttomAccordionActive')
  protected buttomAccordionActiveChanged(value): void {
    this.accordionHeader(value);
  }

  private updateToolbarState() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement =
      commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : (commonAncestor as HTMLElement);
    this.treeElementsEditor = getParentsUntil(parentElement, '.editor-uai-design-system');
    const rangeClone = range.cloneContents();
    this.hasSelectionRange = rangeClone.textContent.length > 0;
    this.buttomBoldDisabled = this.buttomBoldActive ? false : !this.hasSelectionRange;
    this.buttomItalicDisabled = this.buttomItalicActive ? false : !this.hasSelectionRange;
    this.buttomStrikeDisabled = this.buttomStrikeActive ? false : !this.hasSelectionRange;
    this.buttomUnderlineDisabled = this.buttomUnderlineActive ? false : !this.hasSelectionRange;
    this.buttomCodeDisabled = this.buttomCodeActive ? false : !this.hasSelectionRange;
    this.buttomLinkDisabled = this.buttomLinkActive ? false : !this.hasSelectionRange;
  }

  // Coloca o cursor no final do editor
  private accordionHeader(value: false) {
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
    const tagList = value.map((element) => element.tagName.toLowerCase());
    const tagVerifyName = (tag) => tagList.includes(tag);
    const getLine = value.find((el) => el.classList.contains('line'));
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

  private setheaderHeight = () => {
    this.buttomAccordionActive = !this.buttomAccordionActive;
  };

  private onBlur = () => {
    this.el.classList.remove('active');
    setTimeout(() => {
      this.buttomBoldActive = false;
      this.buttomItalicActive = false;
      this.buttomStrikeActive = false;
      this.buttomUnderlineActive = false;
      this.buttomCodeActive = false;
      this.buttomLinkActive = false;
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
      this.buttomBoldDisabled = true;
      this.buttomItalicDisabled = true;
      this.buttomStrikeDisabled = true;
      this.buttomUnderlineDisabled = true;
      this.buttomCodeDisabled = true;
      this.buttomLinkDisabled = true;
      this.buttomAlignLeftDisabled = true;
      this.buttomAlignCenterDisabled = true;
      this.buttomAlignRightDisabled = true;
      this.buttomUnorderedListDisabled = true;
      this.buttomOrderedListDisabled = true;
      this.buttomQuoteDisabled = true;
      this.buttomH1Disabled = true;
      this.buttomH2Disabled = true;
      this.buttomH3Disabled = true;
      this.buttomH4Disabled = true;
      this.buttomH5Disabled = true;
      this.buttomH6Disabled = true;
      this.buttomUnStyledDisabled = true;
    }, 100);
    this.bdsBlur.emit();
  };

  private onFocus = () => {
    this.el.classList.add('active');
    setTimeout(() => {
      this.buttomAlignLeftDisabled = false;
      this.buttomAlignCenterDisabled = false;
      this.buttomAlignRightDisabled = false;
      this.buttomUnorderedListDisabled = false;
      this.buttomOrderedListDisabled = false;
      this.buttomQuoteDisabled = false;
      this.buttomH1Disabled = false;
      this.buttomH2Disabled = false;
      this.buttomH3Disabled = false;
      this.buttomH4Disabled = false;
      this.buttomH5Disabled = false;
      this.buttomH6Disabled = false;
      this.buttomUnStyledDisabled = false;
    }, 100);
    this.bdsFocus.emit();
  };

  // Função para ajustar parágrafos durante a edição
  private onInput(ev: Event) {
    ev.preventDefault();
    this.bdsInputRichText.emit(ev as KeyboardEvent);

    this.bdsChangeRichText.emit({ value: this.editor.innerHTML });

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
  };

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
    const value = tagList.map((element) => element.tagName.toLowerCase());
    return value.includes(tag);
  }

  private wrapSelection(tag: string, link?: string) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const startNode = range.startContainer as HTMLElement;
    const commonAncestor = range.commonAncestorContainer;
    const parentElement =
      commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : (commonAncestor as HTMLElement);

    const tagList = getParentsUntil(parentElement, '.line');

    // Verifica se a tag já está aplicada
    if (this.tagName(tag, getParentsUntil(parentElement, '.line'))) {
      tagList.forEach((element) => {
        if (element.tagName.toLowerCase() === tag) {
          const parent = element.parentElement;
          if (parent) {
            while (element.firstChild) {
              parent.insertBefore(element.firstChild, element);
            }
            parent.removeChild(element);
          }
        }
      });
    }

    const content = range.extractContents();
    const elements = content.querySelectorAll('*');

    elements.forEach((element) => {
      // Move os filhos do elemento para o pai antes de remover a tag
      while (element.firstChild) {
        element.parentNode.insertBefore(element.firstChild, element);
      }
      // Remove a tag agora vazia
      element.remove();
    });

    // Adiciona a tag se ela não estiver aplicada

    const wrapper = document.createElement(tag);
    if (tag === 'a') {
      wrapper.setAttribute('href', link);
    }
    wrapper.appendChild(content);
    range.insertNode(wrapper);

    startNode.parentElement.querySelectorAll('*').forEach((tag) => {
      // Verifica se a tag está vazia (sem texto e sem filhos visíveis)
      if (!tag.textContent.trim() && tag.children.length === 0) {
        tag.remove(); // Remove a tag vazia
      }
    });

    // Restaura a seleção
    selection.removeAllRanges();

    this.bdsChangeRichText.emit({ value: this.editor.innerHTML });
  }

  private wrapSelectionLine(tag: string, enableLinesReturn: boolean = false) {
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
    selection.removeAllRanges();

    this.bdsChangeRichText.emit({ value: this.editor.innerHTML });
  }

  // Função para aplicar alinhamento ao texto selecionado
  private alignText(alignment: 'left' | 'center' | 'right' | 'justify') {
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

    this.bdsChangeRichText.emit({ value: this.editor.innerHTML });
  }

  // Função para criar/remover lista (ordenada ou não ordenada)
  private createHeading(type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote') {
    this.wrapSelectionLine(type, true);
    const firstItemList = this.selectedLinesList[0].element;
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
  private createList(type: 'ol' | 'ul') {
    this.wrapSelectionLine('li', true);

    const firstItemList = this.selectedLinesList[0].element;
    const lastItemList = this.selectedLinesList[this.selectedLinesList.length - 1].element;
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

  private addSelectionLink() {
    const selection = window.getSelection();
    this.whenSelectionLink = selection.getRangeAt(0);
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
    this.wrapSelection('a', this.linkButtonInput);
    if (this.dropDownLink) {
      this.dropDownLink.setClose();
    }
    this.editor.blur();
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

    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const plainText = clipboardData.getData('text/plain'); // Obtém apenas texto puro

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
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
  private clearFormatting() {
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
      <Host class="rich-text" style={{ height: this.height }}>
        <bds-grid class="format-buttons" padding="1">
          <div class="accordion-header">
            <bds-grid ref={(el) => this.refButtonsListElement(el)} class="buttons-list" flex-wrap="wrap">
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'bold')}`}
                position="top-center"
                disabled={this.buttomBoldDisabled}
              >
                <bds-button
                  variant={this.buttomBoldActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.wrapSelection('b')}
                  icon-left="text-style-bold"
                  disabled={this.buttomBoldDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'italic')}`}
                position="top-center"
                disabled={this.buttomItalicDisabled}
              >
                <bds-button
                  variant={this.buttomItalicActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.wrapSelection('i')}
                  icon-left="text-style-italic"
                  disabled={this.buttomItalicDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'strike')}`}
                position="top-center"
                disabled={this.buttomStrikeDisabled}
              >
                <bds-button
                  variant={this.buttomStrikeActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.wrapSelection('strike')}
                  icon-left="text-style-strikethrough"
                  disabled={this.buttomStrikeDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'underline')}`}
                position="top-center"
                disabled={this.buttomUnderlineDisabled}
              >
                <bds-button
                  variant={this.buttomUnderlineActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.wrapSelection('u')}
                  icon-left="text-style-underline"
                  disabled={this.buttomUnderlineDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'link')}`}
                position="top-center"
                disabled={this.buttomLinkDisabled}
              >
                {this.buttomLinkActive ? (
                  <bds-button
                    variant="solid"
                    color="content"
                    size="short"
                    onBdsClick={() => this.wrapSelection('a')}
                    icon-left="link"
                    disabled={this.buttomLinkDisabled}
                    tabindex="-1"
                  ></bds-button>
                ) : (
                  <bds-dropdown ref={(el) => this.refDropDownLinkElement(el)} activeMode="click" position="bottom-left">
                    <div slot="dropdown-activator">
                      <bds-button
                        variant="text"
                        color="content"
                        size="short"
                        onBdsClick={() => this.addSelectionLink()}
                        icon-left="link"
                        disabled={this.buttomLinkDisabled}
                        tabindex="-1"
                      ></bds-button>
                    </div>
                    <bds-grid padding="half" alignItems="center" gap="half" slot="dropdown-content">
                      <bds-input
                        onBdsInput={(ev) => this.addLinkInput(ev)}
                        style={{ flexShrink: '99999' }}
                        placeholder="adcione o link aqui"
                        onKeyDown={(ev) => this.createLinkKeyDown(ev)}
                        tabindex="-1"
                      ></bds-input>
                      <bds-button
                        disabled={this.buttomLinkValidDisabled}
                        icon-left="check"
                        onBdsClick={(ev) => this.createLink(ev)}
                        tabindex="-1"
                      ></bds-button>
                    </bds-grid>
                  </bds-dropdown>
                )}
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'code')}`}
                position="top-center"
                disabled={this.buttomCodeDisabled}
              >
                <bds-button
                  variant={this.buttomCodeActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.wrapSelection('code')}
                  icon-left="code"
                  disabled={this.buttomCodeDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'align_left')}`}
                position="top-center"
                disabled={this.buttomAlignLeftDisabled}
              >
                <bds-button
                  variant={this.buttomAlignLeftActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.alignText('left')}
                  icon-left="align-left"
                  disabled={this.buttomAlignLeftDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'align_center')}`}
                position="top-center"
                disabled={this.buttomAlignCenterDisabled}
              >
                <bds-button
                  variant={this.buttomAlignCenterActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.alignText('center')}
                  icon-left="align-center"
                  disabled={this.buttomAlignCenterDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'align_right')}`}
                position="top-center"
                disabled={this.buttomAlignRightDisabled}
              >
                <bds-button
                  variant={this.buttomAlignRightActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.alignText('right')}
                  icon-left="align-right"
                  disabled={this.buttomAlignRightDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'unordered_list')}`}
                position="top-center"
                disabled={this.buttomUnorderedListDisabled}
              >
                <bds-button
                  variant={this.buttomUnorderedListActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createList('ul')}
                  icon-left="unordered-list"
                  disabled={this.buttomUnorderedListDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'ordered_list')}`}
                position="top-center"
                disabled={this.buttomOrderedListDisabled}
              >
                <bds-button
                  variant={this.buttomOrderedListActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createList('ol')}
                  icon-left="ordered-list"
                  disabled={this.buttomOrderedListDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'quote')}`}
                position="top-center"
                disabled={this.buttomQuoteDisabled}
              >
                <bds-button
                  variant={this.buttomQuoteActive ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('blockquote')}
                  icon-left="quote"
                  disabled={this.buttomQuoteDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h1')}`}
                position="top-center"
                disabled={this.buttomH1Disabled}
              >
                <bds-button
                  variant={this.buttomH1Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h1')}
                  icon-left="h-1"
                  disabled={this.buttomH1Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h2')}`}
                position="top-center"
                disabled={this.buttomH2Disabled}
              >
                <bds-button
                  variant={this.buttomH2Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h2')}
                  icon-left="h-2"
                  disabled={this.buttomH2Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h3')}`}
                position="top-center"
                disabled={this.buttomH3Disabled}
              >
                <bds-button
                  variant={this.buttomH3Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h3')}
                  icon-left="h-3"
                  disabled={this.buttomH3Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h4')}`}
                position="top-center"
                disabled={this.buttomH4Disabled}
              >
                <bds-button
                  variant={this.buttomH4Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h4')}
                  icon-left="h-4"
                  disabled={this.buttomH4Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h5')}`}
                position="top-center"
                disabled={this.buttomH5Disabled}
              >
                <bds-button
                  variant={this.buttomH5Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h5')}
                  icon-left="h-5"
                  disabled={this.buttomH5Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'h6')}`}
                position="top-center"
                disabled={this.buttomH6Disabled}
              >
                <bds-button
                  variant={this.buttomH6Active ? 'solid' : 'text'}
                  color="content"
                  size="short"
                  onBdsClick={() => this.createHeading('h6')}
                  icon-left="h-6"
                  disabled={this.buttomH6Disabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
              <bds-tooltip
                tooltip-text={`${termTranslate(this.language, 'clear_formatting')}`}
                position="top-center"
                disabled={this.buttomUnStyledDisabled}
              >
                <bds-button
                  variant="text"
                  color="content"
                  size="short"
                  onBdsClick={() => this.clearFormatting()}
                  icon-left="unstyled"
                  disabled={this.buttomUnStyledDisabled}
                  tabindex="-1"
                ></bds-button>
              </bds-tooltip>
            </bds-grid>
            <bds-button
              id="buttonAccordion"
              variant={this.buttomAccordionActive ? 'solid' : 'text'}
              class="arrow-down"
              color="content"
              size="short"
              onBdsClick={() => this.setheaderHeight()}
              icon-left={this.buttomAccordionActive ? 'arrow-up' : 'arrow-down'}
              tabindex="-1"
            ></bds-button>
          </div>
        </bds-grid>
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
      </Host>
    );
  }
}
