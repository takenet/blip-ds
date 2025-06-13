import { h, Host } from "@stencil/core";
import { getParentsUntil } from "../../utils/position-element";
import { termTranslate } from "./languages";
export class RichText {
    constructor() {
        this.buttonsListElement = null;
        this.buttonsEditElements = null;
        this.editor = null;
        this.dropDownLink = null;
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
        /**
         * Set the language for fixed texts.
         */
        this.language = 'pt_BR';
        /**
         * weightButton to define if component has Bold Control.
         */
        this.weightButton = true;
        /**
         * italicButton to define if component has Italic Control.
         */
        this.italicButton = true;
        /**
         * strikeThroughbutton to define if component has Strike Control.
         */
        this.strikeThroughButton = true;
        /**
         * underlineButton to define if component has Underline Control.
         */
        this.underlineButton = true;
        /**
         * linkButton to define if component has Link Control.
         */
        this.linkButton = true;
        /**
         * codeButton to define if component has Code Control.
         */
        this.codeButton = true;
        /**
         * alignmentButtons to define if component has TextAlign Control.
         */
        this.alignmentButtons = true;
        /**
         * listButtons to define if component has List Control.
         */
        this.listButtons = true;
        /**
         * quoteButton to define if component has Quote Control.
         */
        this.quoteButton = true;
        /**
         * headingButtons to define if component has Heading Control.
         */
        this.headingButtons = true;
        /**
         * unstyledButton to define if component has Unstyled Control.
         */
        this.unstyledButton = true;
        /**
         * height is the prop to define height of component.
         */
        this.height = null;
        /**
         * maxHeight is the prop to define max height of component.
         */
        this.maxHeight = null;
        /**
         * positionBar is the prop to define max height of component.
         */
        this.positionBar = 'top';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
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
        return (h(Host, { key: '66f81eac389517bd2c062cc79c2ba3044db99db5', class: {
                [`rich-text`]: true,
                [`rich-text-${this.positionBar}`]: true,
            }, style: { height: this.height, maxHeight: this.maxHeight }, tabindex: "0", onMouseEnter: () => (this.insideComponent = true), onMouseLeave: () => (this.insideComponent = false) }, h("div", { key: '8318665720b485370734a634833d5804b0e16e5a', class: "preview" }, h("div", { key: 'bfb97298f8f0215e457b6bc7565a871311894dae', "data-test": this.dataTest, ref: (el) => this.refeditorElement(el), contentEditable: "true", class: "editor-uai-design-system", tabindex: "0", onBlur: this.onBlur, onFocus: this.onFocus, onMouseUp: () => this.updateToolbarState(), onKeyUp: () => this.updateToolbarState(), onKeyDown: (ev) => this.onKeydown(ev), onInput: (ev) => this.onInput(ev), onPaste: this.handlePaste.bind(this) })), h("bds-grid", { key: 'db1bff0bf1fe7b344b59f958bcb6690edc91d071', class: {
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
            } }, h("div", { key: '26a2716d26f4538832e96295f64a45e3f5a2c286', class: "accordion-header" }, h("bds-grid", { key: '0f98c1490a419ba8029079bf793ab5e5f9258669', ref: (el) => this.refButtonsListElement(el), class: "buttons-list", "flex-wrap": "wrap" }, h("div", { key: '298333177ebf9d62e028e67c1bef17a4c3d6fa4b', onFocus: (ev) => this.onFocusEditorBar(ev), tabindex: "1", class: "editor-bar" }), this.weightButton && (h("bds-tooltip", { key: '9f7c6dedf2ef50b9a91941f35bd4cd0b1938a7fe', "tooltip-text": `${termTranslate(this.language, 'bold')}`, position: "top-center" }, h("bds-button", { key: 'e317233dc7d4721274d37b31557cb0be3418707e', variant: this.buttomBoldActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'b'), "icon-left": "text-style-bold", "aria-label": `${termTranslate(this.language, 'bold')}` }))), this.italicButton && (h("bds-tooltip", { key: '74bc2b53392e6b27727a0351e199ba3f87a23666', "tooltip-text": `${termTranslate(this.language, 'italic')}`, position: "top-center" }, h("bds-button", { key: '03857345b78a8dc5099375360fafc39617d63d3f', variant: this.buttomItalicActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'i'), "icon-left": "text-style-italic", "aria-label": `${termTranslate(this.language, 'italic')}` }))), this.strikeThroughButton && (h("bds-tooltip", { key: '099bcbef72467c68eb7f7b43cc1feef73f2e4e3a', "tooltip-text": `${termTranslate(this.language, 'strike')}`, position: "top-center" }, h("bds-button", { key: 'bc9951ce8073d51def43821bb9b534bce7c7a723', variant: this.buttomStrikeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'strike'), "icon-left": "text-style-strikethrough", "aria-label": `${termTranslate(this.language, 'strike')}` }))), this.underlineButton && (h("bds-tooltip", { key: '7f02609041f8ea3c769261f1bbaf144cedbdbfef', "tooltip-text": `${termTranslate(this.language, 'underline')}`, position: "top-center" }, h("bds-button", { key: '13f64572d5751e2245f6bf4436e1737018cfade8', variant: this.buttomUnderlineActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'u'), "icon-left": "text-style-underline", "aria-label": `${termTranslate(this.language, 'underline')}` }))), this.linkButton && (h("bds-tooltip", { key: '064dff09138c4e05fb8526f9fd55f060bb807aad', "tooltip-text": `${termTranslate(this.language, 'link')}`, position: "top-center" }, this.buttomLinkActive ? (h("bds-button", { variant: "solid", color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'a'), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })) : (h("bds-dropdown", { ref: (el) => this.refDropDownLinkElement(el), activeMode: "click", position: "bottom-left" }, h("div", { slot: "dropdown-activator" }, h("bds-button", { slot: "dropdown-activator", variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.addSelectionLink(ev), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })), h("bds-grid", { padding: "half", alignItems: "center", gap: "half", slot: "dropdown-content" }, h("bds-input", { ref: this.refInputSetLink, onBdsInput: (ev) => this.addLinkInput(ev.detail), style: { flexShrink: '99999' }, placeholder: "adcione o link aqui", onKeyDown: (ev) => this.createLinkKeyDown(ev), tabindex: this.dropDownLink?.open ? '1' : '-1' }), h("bds-button", { disabled: this.buttomLinkValidDisabled, "icon-left": "check", onBdsClick: (ev) => this.createLink(ev), tabindex: this.dropDownLink?.open ? '1' : '-1', "aria-label": `${termTranslate(this.language, 'link')}` })))))), this.codeButton && (h("bds-tooltip", { key: '40c4736a3082ee1d84c405e67e196906cb49843a', "tooltip-text": `${termTranslate(this.language, 'code')}`, position: "top-center" }, h("bds-button", { key: 'a9623b88a7957cfc80e0d78c27fc24a18867904b', variant: this.buttomCodeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'code'), "icon-left": "code", "aria-label": `${termTranslate(this.language, 'code')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: '278b4b749fb9208f61cb020acaa3493dd13885d5', "tooltip-text": `${termTranslate(this.language, 'align_left')}`, position: "top-center" }, h("bds-button", { key: '45ddf069fd61af7961a8bca090494f8199882cd1', variant: this.buttomAlignLeftActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'left'), "icon-left": "align-left", "aria-label": `${termTranslate(this.language, 'align_left')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: 'b3d81cb9ca838ad122565580c6beacd11252b3bf', "tooltip-text": `${termTranslate(this.language, 'align_center')}`, position: "top-center" }, h("bds-button", { key: 'f43c9929a6a436a872e724b8dbc106d9a141f961', variant: this.buttomAlignCenterActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'center'), "icon-left": "align-center", "aria-label": `${termTranslate(this.language, 'align_center')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: '21bc200d823fd361c425c01392170767d64653a8', "tooltip-text": `${termTranslate(this.language, 'align_right')}`, position: "top-center" }, h("bds-button", { key: '428145da17bb6d69aa5622fe34499fe9ddbcc91f', variant: this.buttomAlignRightActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'right'), "icon-left": "align-right", "aria-label": `${termTranslate(this.language, 'align_right')}` }))), this.listButtons && (h("bds-tooltip", { key: '1c0146f92fbec7dd607a5b485939d9bde9616c05', "tooltip-text": `${termTranslate(this.language, 'unordered_list')}`, position: "top-center" }, h("bds-button", { key: '4e12216a852c891dca4c31c6c2358e368d121e03', variant: this.buttomUnorderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ul'), "icon-left": "unordered-list", "aria-label": `${termTranslate(this.language, 'unordered_list')}` }))), this.listButtons && (h("bds-tooltip", { key: '5532c30e7d2c814083a04df96c7b3df1cab30cff', "tooltip-text": `${termTranslate(this.language, 'ordered_list')}`, position: "top-center" }, h("bds-button", { key: '9e203ec4fe8c40996a8d69956e85a56f4ad6ef81', variant: this.buttomOrderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ol'), "icon-left": "ordered-list", "aria-label": `${termTranslate(this.language, 'ordered_list')}` }))), this.quoteButton && (h("bds-tooltip", { key: 'f1474e5fda1f67cad82c65b9c9400c6a5d6c3292', "tooltip-text": `${termTranslate(this.language, 'quote')}`, position: "top-center" }, h("bds-button", { key: 'eaffe4161aaf03e865f3129a2b3048f53cf26ecf', variant: this.buttomQuoteActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'blockquote'), "icon-left": "quote", "aria-label": `${termTranslate(this.language, 'quote')}` }))), this.headingButtons && (h("bds-tooltip", { key: '9dd7735a5183ded205b1676a4691d99bb88c46ea', "tooltip-text": `${termTranslate(this.language, 'h1')}`, position: "top-center" }, h("bds-button", { key: '481c40233ddae0adfc3418308ddf478e3309fe7e', variant: this.buttomH1Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h1'), "icon-left": "h-1", "aria-label": `${termTranslate(this.language, 'h1')}` }))), this.headingButtons && (h("bds-tooltip", { key: '88645f07cc07f2969b41fc662162de821f714da3', "tooltip-text": `${termTranslate(this.language, 'h2')}`, position: "top-center" }, h("bds-button", { key: '9dbb3ee8993ae50b5b6844185855e2b6563ee81d', variant: this.buttomH2Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h2'), "icon-left": "h-2", "aria-label": `${termTranslate(this.language, 'h2')}` }))), this.headingButtons && (h("bds-tooltip", { key: '2687be0b5396cbecde6e5422497a25a624965cc5', "tooltip-text": `${termTranslate(this.language, 'h3')}`, position: "top-center" }, h("bds-button", { key: '064fcc4335024ea349d0226d7621e6ebdaee9ec1', variant: this.buttomH3Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h3'), "icon-left": "h-3", "aria-label": `${termTranslate(this.language, 'h3')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'fb48cf012af528868af92bd590b0780972f2274c', "tooltip-text": `${termTranslate(this.language, 'h4')}`, position: "top-center" }, h("bds-button", { key: 'ca68b04c8fad737c6ccc94d9807b42de0a1015a3', variant: this.buttomH4Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h4'), "icon-left": "h-4", "aria-label": `${termTranslate(this.language, 'h4')}` }))), this.headingButtons && (h("bds-tooltip", { key: '1129e2564b3290708bf98a4a9bb23dd7f2bce5a6', "tooltip-text": `${termTranslate(this.language, 'h5')}`, position: "top-center" }, h("bds-button", { key: '6406672ef1f86d4aae51b5499159127682aecf3a', variant: this.buttomH5Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h5'), "icon-left": "h-5", "aria-label": `${termTranslate(this.language, 'h5')}` }))), this.headingButtons && (h("bds-tooltip", { key: '93e808e8ebf931aec7150101afd31754e4d28bed', "tooltip-text": `${termTranslate(this.language, 'h6')}`, position: "top-center" }, h("bds-button", { key: 'a2e1fc1a5303d63680486a0debb3930bf6d77262', variant: this.buttomH6Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h6'), "icon-left": "h-6", "aria-label": `${termTranslate(this.language, 'h6')}` }))), this.unstyledButton && (h("bds-tooltip", { key: 'e2b3934027add671b0ac32148ca074da71744f9e', "tooltip-text": `${termTranslate(this.language, 'clear_formatting')}`, position: "top-center" }, h("bds-button", { key: 'afbe04f792bbce7c70fd03ff3f3b59127a450407', variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.clearFormatting(ev), "icon-left": "unstyled", "aria-label": `${termTranslate(this.language, 'clear_formatting')}` })))), h("bds-button", { key: '1c8ec29a82c8b92190a72fb38e545d28a77ab061', id: "buttonAccordion", variant: this.buttomAccordionActive ? 'solid' : 'text', class: "arrow-down", color: "content", size: "short", onBdsClick: () => this.setheaderHeight(), "icon-left": this.positionBar == 'top'
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
                "attribute": "language",
                "mutable": false,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "import",
                            "path": "./rich-text-interface",
                            "id": "src/components/rict-text/rich-text-interface.ts::languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the language for fixed texts."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'pt_BR'"
            },
            "weightButton": {
                "type": "boolean",
                "attribute": "weight-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "italicButton": {
                "type": "boolean",
                "attribute": "italic-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "strikeThroughButton": {
                "type": "boolean",
                "attribute": "strike-through-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "underlineButton": {
                "type": "boolean",
                "attribute": "underline-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "linkButton": {
                "type": "boolean",
                "attribute": "link-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "codeButton": {
                "type": "boolean",
                "attribute": "code-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "alignmentButtons": {
                "type": "boolean",
                "attribute": "alignment-buttons",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "listButtons": {
                "type": "boolean",
                "attribute": "list-buttons",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "quoteButton": {
                "type": "boolean",
                "attribute": "quote-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "headingButtons": {
                "type": "boolean",
                "attribute": "heading-buttons",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "unstyledButton": {
                "type": "boolean",
                "attribute": "unstyled-button",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "height": {
                "type": "string",
                "attribute": "height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "maxHeight": {
                "type": "string",
                "attribute": "max-height",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "positionBar": {
                "type": "string",
                "attribute": "position-bar",
                "mutable": false,
                "complexType": {
                    "original": "positionBar",
                    "resolved": "\"bottom\" | \"top\"",
                    "references": {
                        "positionBar": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/rict-text/rich-text.tsx",
                            "id": "src/components/rict-text/rich-text.tsx::positionBar"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "positionBar is the prop to define max height of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'top'"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                "getter": false,
                "setter": false,
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
                    "original": "InputEvent",
                    "resolved": "InputEvent",
                    "references": {
                        "InputEvent": {
                            "location": "global",
                            "id": "global::InputEvent"
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
//# sourceMappingURL=rich-text.js.map
