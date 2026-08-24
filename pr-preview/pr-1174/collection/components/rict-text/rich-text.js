import { h, Host } from '@stencil/core';
import { getParentsUntil } from '../../utils/position-element';
import { termTranslate } from './languages';
export class RichText {
  constructor() {
    this.buttonsListElement = null;
    this.buttonsEditElements = null;
    this.editor = null;
    this.dropDownLink = null;
    this.refButtonsListElement = (el) => {
      this.buttonsListElement = el;
    };
    this.refeditorElement = (el) => {
      this.editor = el;
    };
    this.refDropDownLinkElement = (el) => {
      this.dropDownLink = el;
    };
    this.refInputSetLink = (el) => {
      this.inputSetLink = el;
    };
    this.clearToolbar = () => {
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
    this.setheaderHeight = () => {
      this.buttomAccordionActive = !this.buttomAccordionActive;
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0)
        return;
      const range = selection.getRangeAt(0);
      // Limpa a seleção para evitar comportamento inesperado
      selection.removeAllRanges();
      selection.addRange(range);
    };
    this.onBlur = () => {
      this.el.classList.remove('active');
      if (this.insideComponent === false) {
        this.clearToolbar();
      }
      this.bdsBlur.emit();
    };
    this.onFocus = () => {
      this.el.classList.add('active');
      this.bdsFocus.emit();
    };
    this.onKeydown = (event) => {
      if (event.key === 'Backspace') {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
          return;
        const range = selection.getRangeAt(0);
        const startNode = range.startContainer;
        // Encontra o elemento de bloco que contém o cursor
        let blockElement = startNode.nodeType === Node.TEXT_NODE ? startNode.parentElement : startNode;
        while (blockElement && !blockElement.classList.contains('line') && blockElement !== this.editor) {
          blockElement = blockElement.parentElement;
        }
        // Se o elemento atual for um <blockquote> e estiver vazio, removê-lo
        if (blockElement &&
          blockElement.tagName === 'BLOCKQUOTE' &&
          blockElement.classList.contains('line') &&
          blockElement.innerText.length <= 1) {
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
    this.buttomBoldActive = false;
    this.buttomItalicActive = false;
    this.buttomStrikeActive = false;
    this.buttomUnderlineActive = false;
    this.buttomCodeActive = false;
    this.buttomLinkActive = false;
    this.buttomLinkValidDisabled = true;
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
    this.buttomAccordionActive = false;
    this.headerHeight = '32px';
    this.hasSelectionRange = false;
    this.selectedLinesList = null;
    this.treeElementsEditor = null;
    this.styleSectorActive = null;
    this.styleOnHover = 'teste';
    this.whenSelectionLink = null;
    this.linkButtonInput = null;
    this.insideComponent = false;
    this.language = 'pt_BR';
    this.weightButton = true;
    this.italicButton = true;
    this.strikeThroughButton = true;
    this.underlineButton = true;
    this.linkButton = true;
    this.codeButton = true;
    this.alignmentButtons = true;
    this.listButtons = true;
    this.quoteButton = true;
    this.headingButtons = true;
    this.unstyledButton = true;
    this.height = null;
    this.maxHeight = null;
    this.positionBar = 'top';
    this.dataTest = null;
  }
  componentDidLoad() {
    if (this.editor.innerHTML.trim() === '') {
      this.editor.innerHTML = '<p class="line"><br></p>';
    }
    if (this.weightButton ||
      this.italicButton ||
      this.strikeThroughButton ||
      this.underlineButton ||
      this.linkButton ||
      this.codeButton ||
      this.alignmentButtons ||
      this.listButtons ||
      this.quoteButton ||
      this.headingButtons ||
      this.unstyledButton) {
      this.buttonsEditElements = this.buttonsListElement.getElementsByTagName('bds-tooltip');
      this.accordionHeader(false);
      this.editor.parentElement.style.height = `calc(100% - 56px)`;
    }
    else {
      this.editor.parentElement.style.height = `100%`;
    }
  }
  buttomsHeaderChanged() {
    setTimeout(() => this.accordionHeader(this.buttomAccordionActive), 500);
  }
  buttomAccordionActiveChanged() {
    this.accordionHeader(this.buttomAccordionActive);
  }
  updateToolbarState() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
    this.treeElementsEditor = getParentsUntil(parentElement, '.editor-uai-design-system');
  }
  // Coloca o cursor no final do editor
  accordionHeader(value) {
    const allbuttonsEditElementsWidth = this.buttonsEditElements.length * 40;
    const buttonsListWidth = this.buttonsListElement.offsetWidth;
    const buttonAccordion = this.el.querySelector('#buttonAccordion');
    if (buttonsListWidth < allbuttonsEditElementsWidth) {
      buttonAccordion.classList.add('active');
    }
    else {
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
    }
    else {
      allbuttonsEditElements.slice(Math.floor(diferrence)).forEach((element) => {
        element.classList.remove('active');
        this.editor.parentElement.style.height = `calc(100% - 56px)`;
      });
    }
  }
  treeElementsEditorChanged(value) {
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
  // Função para ajustar parágrafos durante a edição
  onInput(ev) {
    ev.preventDefault();
    this.bdsRichTextInput.emit(ev);
    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const currentNode = range.startContainer;
    // Se o nó atual é uma `div`, converta-o em um `p`
    if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.tagName === 'DIV') {
      const divElement = currentNode;
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
  // Controle a navegação do componente
  onFocusEditorBar(ev) {
    const editorBar = ev.target;
    const NextButton = editorBar.nextElementSibling.querySelector('bds-button');
    const ElementToFocus = NextButton.shadowRoot.querySelector('.focus');
    ElementToFocus.focus();
    this.buttomAccordionActive = true;
  }
  // Coloca o cursor no final do editor
  setCursorToEnd() {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this.editor);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  tagName(tag, tagList) {
    const value = tagList.map((element) => element?.tagName.toLowerCase());
    return value.includes(tag);
  }
  wrapSelection(ev, tag, link) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    if (!this.editor.contains(selection.anchorNode))
      return;
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
    const tagList = getParentsUntil(parentElement, '.line');
    const isTagApplied = this.tagName(tag, tagList);
    // Se a seleção estiver vazia, cria um espaço invisível para edição
    let content;
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
        }
        else if (isAtEndOfTag) {
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
        }
        else {
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
    }
    else {
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
    }
    else {
      newRange.setStartBefore(wrapper.firstChild || wrapper);
      newRange.setEndAfter(wrapper.lastChild || wrapper);
    }
    selection.removeAllRanges();
    selection.addRange(newRange);
    this.updateToolbarState();
    // Emite o evento para atualizar o estado
    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
  }
  wrapSelectionLine(tag, enableLinesReturn = false) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    if (!this.editor.contains(selection.anchorNode))
      return;
    const range = selection.getRangeAt(0);
    const startNode = range.startContainer;
    const endNode = range.endContainer;
    // Obtém todas as linhas afetadas pela seleção
    const selectedLines = new Set();
    let currentNode = startNode.parentElement;
    while (currentNode && currentNode !== endNode.parentElement) {
      let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : currentNode;
      if (element && element.classList.contains('line')) {
        selectedLines.add(element);
      }
      currentNode = currentNode.nextSibling || currentNode.parentElement?.nextSibling;
    }
    // Adiciona a última linha caso tenha sido ignorada
    let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : endNode;
    while (endElement && !endElement.classList.contains('line') && endElement !== this.editor) {
      endElement = endElement.parentElement;
    }
    if (endElement && endElement.classList.contains('line')) {
      selectedLines.add(endElement);
    }
    // Verifica se todas as linhas já possuem a tag escolhida
    const allAreSameTag = [...selectedLines].every((line) => tag === 'li' ? false : line.tagName.toLowerCase() === tag);
    const returnSelected = [...selectedLines].map((el) => {
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
  alignText(ev, alignment) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    let blockElement = range.startContainer;
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
      const currentAlignment = blockElement.style.textAlign;
      if (currentAlignment === alignment) {
        // Se já estiver alinhado, remove o alinhamento
        blockElement.style.textAlign = '';
      }
      else {
        // Caso contrário, aplica o alinhamento
        blockElement.style.textAlign = alignment;
      }
    }
    // Limpa a seleção para evitar comportamento inesperado
    selection.removeAllRanges();
    selection.addRange(range);
    this.updateToolbarState();
    this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
  }
  // Função para criar/remover lista (ordenada ou não ordenada)
  createHeading(ev, type) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    if (!this.editor.contains(selection.anchorNode))
      return;
    this.wrapSelectionLine(type, true);
    const firstItemList = this.selectedLinesList[0]?.element;
    const firstParent = firstItemList.parentElement.previousElementSibling;
    const lastParent = firstItemList.parentElement.nextElementSibling;
    const parent = firstItemList.parentElement;
    if (parent.tagName.toLowerCase() === 'ul') {
      this.selectedLinesList.forEach((item) => {
        if (firstParent) {
          firstParent.insertAdjacentElement('afterend', item.element);
        }
        else if (lastParent) {
          lastParent.insertAdjacentElement('beforebegin', item.element);
        }
        else {
          this.editor.insertAdjacentElement('afterbegin', item.element);
        }
      });
      if (Array.from(parent.getElementsByTagName('li')).length == 0) {
        parent.remove();
      }
    }
  }
  // Função para criar/remover lista (ordenada ou não ordenada)
  createList(ev, type) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    if (!this.editor.contains(selection.anchorNode))
      return;
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
    }
    else {
      const parentListElements = parent.getElementsByTagName('li');
      const parentList = Array.from(parentListElements).map((element) => ({ element }));
      if (parentList.length == this.selectedLinesList.length) {
        if (type !== parent.tagName.toLowerCase()) {
          wrapper.innerHTML = parent.innerHTML;
          parent.parentNode.replaceChild(wrapper, parent);
        }
        else {
          this.selectedLinesList.forEach((item) => {
            const tagList = parent.parentElement.tagName.toLowerCase() === 'li' ? 'li' : 'p';
            const newElement = document.createElement(tagList);
            newElement.classList.add('line');
            newElement.innerHTML = item.element.innerHTML;
            if (parent.parentElement.tagName.toLowerCase() === 'li') {
              parent.parentElement.insertAdjacentElement('afterend', newElement);
            }
            else {
              parent.previousElementSibling.insertAdjacentElement('afterend', newElement);
            }
            parent.removeChild(item.element);
          });
          parent.remove();
        }
      }
      else {
        // parent.insertBefore(wrapper, firstItemList);
        firstItemList.previousElementSibling.insertAdjacentElement('beforeend', wrapper);
        this.selectedLinesList.forEach((item) => {
          wrapper.appendChild(item.element);
        });
      }
    }
  }
  addSelectionLink(ev) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      this.dropDownLink.setOpen();
    }
    this.editor.focus();
    const selection = window.getSelection();
    this.whenSelectionLink = selection.getRangeAt(0);
    const ElementToFocus = this.inputSetLink.shadowRoot.querySelector('.input__container__text');
    ElementToFocus.focus();
  }
  addLinkInput(ev) {
    ev.preventDefault();
    const input = ev.target;
    this.linkButtonInput = input.value;
    if (this.linkButtonInput.length > 0) {
      this.buttomLinkValidDisabled = false;
    }
    else {
      this.buttomLinkValidDisabled = true;
    }
  }
  createLinkKeyDown(ev) {
    if (ev.key == 'Enter') {
      this.createLink(ev);
    }
  }
  createLink(ev) {
    ev.preventDefault();
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(this.whenSelectionLink);
    this.wrapSelection(ev, 'a', this.linkButtonInput);
    if (this.dropDownLink) {
      this.dropDownLink.setClose();
    }
  }
  verifyList(firstItem, lastItem) {
    const firstItemValue = firstItem.parentElement.tagName.toLowerCase() === 'ul' || firstItem.parentElement.tagName.toLowerCase() === 'ol';
    const lastItemValue = lastItem.parentElement.tagName.toLowerCase() === 'ul' || lastItem.parentElement.tagName.toLowerCase() === 'ol';
    return firstItemValue && lastItemValue;
  }
  // Função para limpar o HTML ao colar conteúdo
  handlePaste(event) {
    event.preventDefault(); // Bloqueia a colagem padrão
    event.stopPropagation(); // Evita que afete outros elementos
    const clipboardData = event.clipboardData || window.clipboardData;
    const plainText = clipboardData.getData('text/plain'); // Obtém apenas texto puro
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
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
  clearFormatting(ev) {
    const detail = ev.detail;
    if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
      detail.preventDefault();
      detail.stopPropagation();
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const startNode = range.startContainer;
    const endNode = range.endContainer;
    // Obtém todas as linhas afetadas pela seleção
    const selectedLines = new Set();
    let currentNode = startNode.parentElement;
    while (currentNode && currentNode !== endNode.parentElement) {
      let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : currentNode;
      if (element && element.classList.contains('line')) {
        selectedLines.add(element);
      }
      currentNode = currentNode.nextSibling || currentNode.parentElement?.nextSibling;
    }
    // Adiciona a última linha caso tenha sido ignorada
    let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : endNode;
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
    return (h(Host, { class: {
        [`rich-text`]: true,
        [`rich-text-${this.positionBar}`]: true,
      }, style: { height: this.height, maxHeight: this.maxHeight }, tabindex: "0", onMouseEnter: () => (this.insideComponent = true), onMouseLeave: () => (this.insideComponent = false) }, h("div", { class: "preview" }, h("div", { "data-test": this.dataTest, ref: (el) => this.refeditorElement(el), contentEditable: "true", class: "editor-uai-design-system", tabindex: "0", onBlur: this.onBlur, onFocus: this.onFocus, onMouseUp: () => this.updateToolbarState(), onKeyUp: () => this.updateToolbarState(), onKeyDown: (ev) => this.onKeydown(ev), onInput: (ev) => this.onInput(ev), onPaste: this.handlePaste.bind(this) })), h("bds-grid", { class: {
        [`format-buttons`]: true,
        [`format-buttons-active`]: this.weightButton ||
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
      } }, h("div", { class: "accordion-header" }, h("bds-grid", { ref: (el) => this.refButtonsListElement(el), class: "buttons-list", "flex-wrap": "wrap" }, h("div", { onFocus: (ev) => this.onFocusEditorBar(ev), tabindex: "1", class: "editor-bar" }), this.weightButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'bold')}`, position: "top-center" }, h("bds-button", { variant: this.buttomBoldActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'b'), "icon-left": "text-style-bold", "aria-label": `${termTranslate(this.language, 'bold')}` }))), this.italicButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'italic')}`, position: "top-center" }, h("bds-button", { variant: this.buttomItalicActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'i'), "icon-left": "text-style-italic", "aria-label": `${termTranslate(this.language, 'italic')}` }))), this.strikeThroughButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'strike')}`, position: "top-center" }, h("bds-button", { variant: this.buttomStrikeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'strike'), "icon-left": "text-style-strikethrough", "aria-label": `${termTranslate(this.language, 'strike')}` }))), this.underlineButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'underline')}`, position: "top-center" }, h("bds-button", { variant: this.buttomUnderlineActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'u'), "icon-left": "text-style-underline", "aria-label": `${termTranslate(this.language, 'underline')}` }))), this.linkButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'link')}`, position: "top-center" }, this.buttomLinkActive ? (h("bds-button", { variant: "solid", color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'a'), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })) : (h("bds-dropdown", { ref: (el) => this.refDropDownLinkElement(el), activeMode: "click", position: "bottom-left" }, h("div", { slot: "dropdown-activator" }, h("bds-button", { slot: "dropdown-activator", variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.addSelectionLink(ev), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })), h("bds-grid", { padding: "half", alignItems: "center", gap: "half", slot: "dropdown-content" }, h("bds-input", { ref: this.refInputSetLink, onBdsInput: (ev) => this.addLinkInput(ev), style: { flexShrink: '99999' }, placeholder: "adcione o link aqui", onKeyDown: (ev) => this.createLinkKeyDown(ev), tabindex: this.dropDownLink?.open ? '1' : '-1' }), h("bds-button", { disabled: this.buttomLinkValidDisabled, "icon-left": "check", onBdsClick: (ev) => this.createLink(ev), tabindex: this.dropDownLink?.open ? '1' : '-1', "aria-label": `${termTranslate(this.language, 'link')}` })))))), this.codeButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'code')}`, position: "top-center" }, h("bds-button", { variant: this.buttomCodeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'code'), "icon-left": "code", "aria-label": `${termTranslate(this.language, 'code')}` }))), this.alignmentButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'align_left')}`, position: "top-center" }, h("bds-button", { variant: this.buttomAlignLeftActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'left'), "icon-left": "align-left", "aria-label": `${termTranslate(this.language, 'align_left')}` }))), this.alignmentButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'align_center')}`, position: "top-center" }, h("bds-button", { variant: this.buttomAlignCenterActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'center'), "icon-left": "align-center", "aria-label": `${termTranslate(this.language, 'align_center')}` }))), this.alignmentButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'align_right')}`, position: "top-center" }, h("bds-button", { variant: this.buttomAlignRightActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'right'), "icon-left": "align-right", "aria-label": `${termTranslate(this.language, 'align_right')}` }))), this.listButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'unordered_list')}`, position: "top-center" }, h("bds-button", { variant: this.buttomUnorderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ul'), "icon-left": "unordered-list", "aria-label": `${termTranslate(this.language, 'unordered_list')}` }))), this.listButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'ordered_list')}`, position: "top-center" }, h("bds-button", { variant: this.buttomOrderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ol'), "icon-left": "ordered-list", "aria-label": `${termTranslate(this.language, 'ordered_list')}` }))), this.quoteButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'quote')}`, position: "top-center" }, h("bds-button", { variant: this.buttomQuoteActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'blockquote'), "icon-left": "quote", "aria-label": `${termTranslate(this.language, 'quote')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h1')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH1Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h1'), "icon-left": "h-1", "aria-label": `${termTranslate(this.language, 'h1')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h2')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH2Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h2'), "icon-left": "h-2", "aria-label": `${termTranslate(this.language, 'h2')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h3')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH3Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h3'), "icon-left": "h-3", "aria-label": `${termTranslate(this.language, 'h3')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h4')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH4Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h4'), "icon-left": "h-4", "aria-label": `${termTranslate(this.language, 'h4')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h5')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH5Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h5'), "icon-left": "h-5", "aria-label": `${termTranslate(this.language, 'h5')}` }))), this.headingButtons && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'h6')}`, position: "top-center" }, h("bds-button", { variant: this.buttomH6Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h6'), "icon-left": "h-6", "aria-label": `${termTranslate(this.language, 'h6')}` }))), this.unstyledButton && (h("bds-tooltip", { "tooltip-text": `${termTranslate(this.language, 'clear_formatting')}`, position: "top-center" }, h("bds-button", { variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.clearFormatting(ev), "icon-left": "unstyled", "aria-label": `${termTranslate(this.language, 'clear_formatting')}` })))), h("bds-button", { id: "buttonAccordion", variant: this.buttomAccordionActive ? 'solid' : 'text', class: "arrow-down", color: "content", size: "short", onBdsClick: () => this.setheaderHeight(), "icon-left": this.positionBar == 'top'
        ? this.buttomAccordionActive
          ? 'arrow-up'
          : 'arrow-down'
        : this.buttomAccordionActive
          ? 'arrow-down'
          : 'arrow-up' })))));
  }
  static get is() { return "bds-rich-text"; }
  static get originalStyleUrls() {
    return {
      "$": ["rich-text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rich-text.css"]
    };
  }
  static get properties() {
    return {
      "language": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "languages",
          "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
          "references": {
            "languages": {
              "location": "import",
              "path": "./rich-text-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the language for fixed texts."
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'pt_BR'"
      },
      "weightButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "weightButton to define if component has Bold Control."
        },
        "attribute": "weight-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "italicButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "italicButton to define if component has Italic Control."
        },
        "attribute": "italic-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "strikeThroughButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "strikeThroughbutton to define if component has Strike Control."
        },
        "attribute": "strike-through-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "underlineButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "underlineButton to define if component has Underline Control."
        },
        "attribute": "underline-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "linkButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "linkButton to define if component has Link Control."
        },
        "attribute": "link-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "codeButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "codeButton to define if component has Code Control."
        },
        "attribute": "code-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "alignmentButtons": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "alignmentButtons to define if component has TextAlign Control."
        },
        "attribute": "alignment-buttons",
        "reflect": false,
        "defaultValue": "true"
      },
      "listButtons": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "listButtons to define if component has List Control."
        },
        "attribute": "list-buttons",
        "reflect": false,
        "defaultValue": "true"
      },
      "quoteButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "quoteButton to define if component has Quote Control."
        },
        "attribute": "quote-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "headingButtons": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "headingButtons to define if component has Heading Control."
        },
        "attribute": "heading-buttons",
        "reflect": false,
        "defaultValue": "true"
      },
      "unstyledButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "unstyledButton to define if component has Unstyled Control."
        },
        "attribute": "unstyled-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "height": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "height is the prop to define height of component."
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "null"
      },
      "maxHeight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "maxHeight is the prop to define max height of component."
        },
        "attribute": "max-height",
        "reflect": false,
        "defaultValue": "null"
      },
      "positionBar": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "positionBar",
          "resolved": "\"bottom\" | \"top\"",
          "references": {
            "positionBar": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "positionBar is the prop to define max height of component."
        },
        "attribute": "position-bar",
        "reflect": false,
        "defaultValue": "'top'"
      },
      "dataTest": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "buttomBoldActive": {},
      "buttomItalicActive": {},
      "buttomStrikeActive": {},
      "buttomUnderlineActive": {},
      "buttomCodeActive": {},
      "buttomLinkActive": {},
      "buttomLinkValidDisabled": {},
      "buttomAlignLeftActive": {},
      "buttomAlignCenterActive": {},
      "buttomAlignRightActive": {},
      "buttomUnorderedListActive": {},
      "buttomOrderedListActive": {},
      "buttomQuoteActive": {},
      "buttomH1Active": {},
      "buttomH2Active": {},
      "buttomH3Active": {},
      "buttomH4Active": {},
      "buttomH5Active": {},
      "buttomH6Active": {},
      "buttomAccordionActive": {},
      "headerHeight": {},
      "hasSelectionRange": {},
      "selectedLinesList": {},
      "treeElementsEditor": {},
      "styleSectorActive": {},
      "styleOnHover": {},
      "whenSelectionLink": {},
      "linkButtonInput": {},
      "insideComponent": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsRichTextChange",
        "name": "bdsRichTextChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsRichTextInput",
        "name": "bdsRichTextInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input has changed."
        },
        "complexType": {
          "original": "KeyboardEvent",
          "resolved": "KeyboardEvent",
          "references": {
            "KeyboardEvent": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "bdsBlur",
        "name": "bdsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input onblur."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsFocus",
        "name": "bdsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "weightButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "italicButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "strikeThroughButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "underlineButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "linkButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "codeButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "alignmentButtons",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "listButtons",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "quoteButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "headingButtons",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "unstyledButton",
        "methodName": "buttomsHeaderChanged"
      }, {
        "propName": "buttomAccordionActive",
        "methodName": "buttomAccordionActiveChanged"
      }, {
        "propName": "treeElementsEditor",
        "methodName": "treeElementsEditorChanged"
      }];
  }
}
