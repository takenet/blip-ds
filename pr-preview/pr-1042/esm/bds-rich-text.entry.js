import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-UYZ9xe6Z.js';
import { e as getParentsUntil } from './position-element-DJObw-Em.js';

const ptTerms = [
    {
        bold: 'Negrito',
        italic: 'Itálico',
        strike: 'Tachado',
        underline: 'Sublinhado',
        link: 'Link',
        code: 'Código',
        align_left: 'Alinhar à esquerda',
        align_center: 'Alinhar ao centro',
        align_right: 'Alinhar à direita',
        unordered_list: 'Lista não ordenada',
        ordered_list: 'Lista ordenada',
        quote: 'Citação',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6',
        clear_formatting: 'Limpar formatação',
        expand: 'Expandir',
    },
];

const esTerms = [
    {
        bold: 'Negrita',
        italic: 'Cursiva',
        strike: 'Tachado',
        underline: 'Subrayado',
        link: 'Link',
        code: 'Código',
        align_left: 'Alinear a la izquierda',
        align_center: 'Alinear al centro',
        align_right: 'Alinear a la derecha',
        unordered_list: 'Lista desordenada',
        ordered_list: 'Lista ordenada',
        quote: 'Cita',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6',
        clear_formatting: 'Limpiar formato',
        expand: 'Expandir',
    },
];

const enTerms = [
    {
        bold: 'Bold',
        italic: 'Italic',
        strike: 'Strikethrough',
        underline: 'Underline',
        link: 'Link',
        code: 'Code',
        align_left: 'Align left',
        align_center: 'Align center',
        align_right: 'Align right',
        unordered_list: 'Unordered list',
        ordered_list: 'Ordered list',
        quote: 'Quote',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
        h5: 'Heading 5',
        h6: 'Heading 6',
        clear_formatting: 'Clear formatting',
        expand: 'Expand',
    },
];

const termTranslate = (lang, string) => {
    let translate;
    switch (lang) {
        case 'pt_BR':
            translate = ptTerms.map((term) => term[string]);
            break;
        case 'es_ES':
            translate = esTerms.map((term) => term[string]);
            break;
        case 'en_US':
            translate = enTerms.map((term) => term[string]);
            break;
        default:
            translate = ptTerms.map((term) => term[string]);
    }
    return translate;
};

const richTextCss = ".rich-text{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:8px;gap:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:16px;background-color:var(--color-surface-1, rgb(246, 246, 246))}.rich-text-top .format-buttons{-ms-flex-order:1;order:1}.rich-text-top .preview{-ms-flex-order:2;order:2}.rich-text-bottom .format-buttons{-ms-flex-order:2;order:2}.rich-text-bottom .preview{-ms-flex-order:1;order:1}.rich-text.active{border-color:var(--color-primary, rgb(30, 107, 241));-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.rich-text .format-buttons{display:none !important}.rich-text .format-buttons-active{display:-ms-flexbox !important;display:flex !important;position:relative;background-color:var(--color-surface-0, rgb(255, 255, 255));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:16px;padding:8px}.rich-text .format-buttons .style-onhover{position:absolute;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:32px;bottom:-32px;right:0;opacity:0;-webkit-transition:opacity ease-in-out 0.5s;-moz-transition:opacity ease-in-out 0.5s;transition:opacity ease-in-out 0.5s;pointer-events:none}.rich-text .format-buttons .style-onhover.active{opacity:1}.rich-text .format-buttons .accordion-header{width:100%;position:relative;padding-right:40px}.rich-text .format-buttons .accordion-header .buttons-list{-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}.rich-text .format-buttons .accordion-header .buttons-list .editor-bar{width:0;margin-right:-8px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip{-webkit-transition:height ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s;transition:height ease-in-out 0.25s;height:0px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip>bds-button,.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip>bds-dropdown>div[slot=dropdown-activator]>bds-button{height:0;opacity:0;display:block;overflow:hidden;-webkit-transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s;transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active{height:32px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active>bds-button,.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active>bds-dropdown>div[slot=dropdown-activator]>bds-button{overflow:inherit;height:32px;opacity:1}.rich-text .format-buttons .accordion-header .arrow-down{position:absolute;right:0;top:0;display:none}.rich-text .format-buttons .accordion-header .arrow-down.active{display:block}.rich-text .preview{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:8px;-webkit-transition:height ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s;transition:height ease-in-out 0.25s}.rich-text .preview .editor-uai-design-system{min-height:48px;height:100%;background-color:transparent;font-size:1rem;line-height:1.5;overflow-y:auto;outline:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-style:normal;font-weight:normal;color:var(--color-content-default, rgb(40, 40, 40))}.rich-text .preview .editor-uai-design-system::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.rich-text .preview .editor-uai-design-system::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.rich-text .preview .editor-uai-design-system p,.rich-text .preview .editor-uai-design-system h1,.rich-text .preview .editor-uai-design-system h2,.rich-text .preview .editor-uai-design-system h3,.rich-text .preview .editor-uai-design-system h4,.rich-text .preview .editor-uai-design-system h5,.rich-text .preview .editor-uai-design-system h6,.rich-text .preview .editor-uai-design-system ul,.rich-text .preview .editor-uai-design-system ol,.rich-text .preview .editor-uai-design-system blockquote{margin:0 0 8px 0}.rich-text .preview .editor-uai-design-system h1{font-size:32px;font-weight:600}.rich-text .preview .editor-uai-design-system h2{font-size:28px;font-weight:600}.rich-text .preview .editor-uai-design-system h3{font-size:24px;font-weight:600}.rich-text .preview .editor-uai-design-system h4{font-size:20px;font-weight:600}.rich-text .preview .editor-uai-design-system h5{font-size:16px;font-weight:600}.rich-text .preview .editor-uai-design-system h6{font-size:12px;font-weight:600}.rich-text .preview .editor-uai-design-system a{text-decoration:none;color:var(--color-primary, rgb(30, 107, 241))}.rich-text .preview .editor-uai-design-system blockquote{padding:4px 16px 4px 32px;font-size:14px;position:relative;display:inline-block}.rich-text .preview .editor-uai-design-system blockquote::before,.rich-text .preview .editor-uai-design-system blockquote::after{content:'\"';position:absolute;font-size:24px;color:var(--color-content-ghost, rgb(140, 140, 140))}.rich-text .preview .editor-uai-design-system blockquote::before{left:8px;top:-6px}.rich-text .preview .editor-uai-design-system blockquote::after{right:0px;bottom:0px}.rich-text .preview .editor-uai-design-system code{font-family:monospace;font-size:12px;background-color:var(--color-surface-2, rgb(237, 237, 237));padding:4px;border-radius:4px}";

const RichText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsRichTextChange = createEvent(this, "bdsRichTextChange");
        this.bdsRichTextInput = createEvent(this, "bdsRichTextInput");
        this.bdsBlur = createEvent(this, "bdsBlur");
        this.bdsFocus = createEvent(this, "bdsFocus");
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
        return (h(Host, { key: '6e5b218dabb382ebeae52b2ec7a0497d923c999e', class: {
                [`rich-text`]: true,
                [`rich-text-${this.positionBar}`]: true,
            }, style: { height: this.height, maxHeight: this.maxHeight }, tabindex: "0", onMouseEnter: () => (this.insideComponent = true), onMouseLeave: () => (this.insideComponent = false) }, h("div", { key: '2909de1adf06e810e9e908309fedbe8c291ec1e4', class: "preview" }, h("div", { key: '2a4cab2608c6a0e87c31b047f47b0926d703533a', "data-test": this.dataTest, ref: (el) => this.refeditorElement(el), contentEditable: "true", class: "editor-uai-design-system", tabindex: "0", onBlur: this.onBlur, onFocus: this.onFocus, onMouseUp: () => this.updateToolbarState(), onKeyUp: () => this.updateToolbarState(), onKeyDown: (ev) => this.onKeydown(ev), onInput: (ev) => this.onInput(ev), onPaste: this.handlePaste.bind(this) })), h("bds-grid", { key: 'be73afe468fded2e0e2ca9746112c5630daf67a0', class: {
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
            } }, h("div", { key: '3e5c6416c1feec757c28e84fff4b3d24713a88b4', class: "accordion-header" }, h("bds-grid", { key: 'b9f0d7cadba83d2e69943025dc18005ff91c2964', ref: (el) => this.refButtonsListElement(el), class: "buttons-list", "flex-wrap": "wrap" }, h("div", { key: '20ad63af2e1c1659351da25114256ed089f7364c', onFocus: (ev) => this.onFocusEditorBar(ev), tabindex: "1", class: "editor-bar" }), this.weightButton && (h("bds-tooltip", { key: 'ca0a51b549024ad47d0d672cb736a25314dfbe0e', "tooltip-text": `${termTranslate(this.language, 'bold')}`, position: "top-center" }, h("bds-button", { key: '67618b2a15a542c648805093ec259f1781641e5d', variant: this.buttomBoldActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'b'), "icon-left": "text-style-bold", "aria-label": `${termTranslate(this.language, 'bold')}` }))), this.italicButton && (h("bds-tooltip", { key: 'eb92f4188a27c981318edfaa3e001005ee74efbc', "tooltip-text": `${termTranslate(this.language, 'italic')}`, position: "top-center" }, h("bds-button", { key: 'fe406619a20057d4750940d941199e6bb2188e6c', variant: this.buttomItalicActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'i'), "icon-left": "text-style-italic", "aria-label": `${termTranslate(this.language, 'italic')}` }))), this.strikeThroughButton && (h("bds-tooltip", { key: 'eda674b3cb669ba2752f42891d89301deea7d066', "tooltip-text": `${termTranslate(this.language, 'strike')}`, position: "top-center" }, h("bds-button", { key: '646132b6029ac5e0991f7003ba40401e532f5aeb', variant: this.buttomStrikeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'strike'), "icon-left": "text-style-strikethrough", "aria-label": `${termTranslate(this.language, 'strike')}` }))), this.underlineButton && (h("bds-tooltip", { key: '4e17dfe7b9992a52a2f9ac6287c193455c6d0001', "tooltip-text": `${termTranslate(this.language, 'underline')}`, position: "top-center" }, h("bds-button", { key: '00fa424858b39fedbb09492daf680ac5c00de5b5', variant: this.buttomUnderlineActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'u'), "icon-left": "text-style-underline", "aria-label": `${termTranslate(this.language, 'underline')}` }))), this.linkButton && (h("bds-tooltip", { key: 'd3faef07b29ca078933ba776a50de79b6dcb9f48', "tooltip-text": `${termTranslate(this.language, 'link')}`, position: "top-center" }, this.buttomLinkActive ? (h("bds-button", { variant: "solid", color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'a'), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })) : (h("bds-dropdown", { ref: (el) => this.refDropDownLinkElement(el), activeMode: "click", position: "bottom-left" }, h("div", { slot: "dropdown-activator" }, h("bds-button", { slot: "dropdown-activator", variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.addSelectionLink(ev), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })), h("bds-grid", { padding: "half", alignItems: "center", gap: "half", slot: "dropdown-content" }, h("bds-input", { ref: this.refInputSetLink, onBdsInput: (ev) => this.addLinkInput(ev), style: { flexShrink: '99999' }, placeholder: "adcione o link aqui", onKeyDown: (ev) => this.createLinkKeyDown(ev), tabindex: this.dropDownLink?.open ? '1' : '-1' }), h("bds-button", { disabled: this.buttomLinkValidDisabled, "icon-left": "check", onBdsClick: (ev) => this.createLink(ev), tabindex: this.dropDownLink?.open ? '1' : '-1', "aria-label": `${termTranslate(this.language, 'link')}` })))))), this.codeButton && (h("bds-tooltip", { key: '041531585c9a37e2c25db41b88af338228125b8e', "tooltip-text": `${termTranslate(this.language, 'code')}`, position: "top-center" }, h("bds-button", { key: 'e417bc2dcbd9795aeb8559ec851f58b0a3332250', variant: this.buttomCodeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'code'), "icon-left": "code", "aria-label": `${termTranslate(this.language, 'code')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: 'dfba3d627d0a02f16b216cb8acaf6822afefd4a5', "tooltip-text": `${termTranslate(this.language, 'align_left')}`, position: "top-center" }, h("bds-button", { key: 'e196938e19724120ddf1010ccccd7ccf0a33995a', variant: this.buttomAlignLeftActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'left'), "icon-left": "align-left", "aria-label": `${termTranslate(this.language, 'align_left')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: '975b32a5a507aca54467c9513d9e6cdbddcb1963', "tooltip-text": `${termTranslate(this.language, 'align_center')}`, position: "top-center" }, h("bds-button", { key: '6dc6bad1bc18543fad221384ce441431c00a3748', variant: this.buttomAlignCenterActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'center'), "icon-left": "align-center", "aria-label": `${termTranslate(this.language, 'align_center')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: 'af28535e3b51d7ac07427d0cb2dc2c051e4e4911', "tooltip-text": `${termTranslate(this.language, 'align_right')}`, position: "top-center" }, h("bds-button", { key: 'f4c5004621395e7df3f0c0cb5845c9ef28a2e0a5', variant: this.buttomAlignRightActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'right'), "icon-left": "align-right", "aria-label": `${termTranslate(this.language, 'align_right')}` }))), this.listButtons && (h("bds-tooltip", { key: 'b141ec79deea39688b1dbbe6b32aae3813658d32', "tooltip-text": `${termTranslate(this.language, 'unordered_list')}`, position: "top-center" }, h("bds-button", { key: 'b6289fa008e53346bc9087f607598549717c8fb0', variant: this.buttomUnorderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ul'), "icon-left": "unordered-list", "aria-label": `${termTranslate(this.language, 'unordered_list')}` }))), this.listButtons && (h("bds-tooltip", { key: '3609d718564f8839d65b68b283f712250daf46c2', "tooltip-text": `${termTranslate(this.language, 'ordered_list')}`, position: "top-center" }, h("bds-button", { key: '6861698a0f7061dfe0664bd2e982ec2d2c369076', variant: this.buttomOrderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ol'), "icon-left": "ordered-list", "aria-label": `${termTranslate(this.language, 'ordered_list')}` }))), this.quoteButton && (h("bds-tooltip", { key: '19ab61e66bbadcb06de653ff5aa8ff12d2982091', "tooltip-text": `${termTranslate(this.language, 'quote')}`, position: "top-center" }, h("bds-button", { key: '1fe8d1705301db7b1dd28b5ed40bd5139ccdbf22', variant: this.buttomQuoteActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'blockquote'), "icon-left": "quote", "aria-label": `${termTranslate(this.language, 'quote')}` }))), this.headingButtons && (h("bds-tooltip", { key: '76623f1100adc9d168622f3651347412d3f8ee5d', "tooltip-text": `${termTranslate(this.language, 'h1')}`, position: "top-center" }, h("bds-button", { key: '611a490465bd03d1364ffe7551f4034407baeab1', variant: this.buttomH1Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h1'), "icon-left": "h-1", "aria-label": `${termTranslate(this.language, 'h1')}` }))), this.headingButtons && (h("bds-tooltip", { key: '6db1b911646e7d72c121535e435ad26c51998c4f', "tooltip-text": `${termTranslate(this.language, 'h2')}`, position: "top-center" }, h("bds-button", { key: '3e3b3e30b5e335d45c84da60752654b415203e20', variant: this.buttomH2Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h2'), "icon-left": "h-2", "aria-label": `${termTranslate(this.language, 'h2')}` }))), this.headingButtons && (h("bds-tooltip", { key: '0bb9d450b2edc8fdf372e640d47803877341ba0a', "tooltip-text": `${termTranslate(this.language, 'h3')}`, position: "top-center" }, h("bds-button", { key: 'bac98c8fffffce09add20f8c988c997993902342', variant: this.buttomH3Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h3'), "icon-left": "h-3", "aria-label": `${termTranslate(this.language, 'h3')}` }))), this.headingButtons && (h("bds-tooltip", { key: '3287842013b159e212da58e166babe8602b97542', "tooltip-text": `${termTranslate(this.language, 'h4')}`, position: "top-center" }, h("bds-button", { key: '41b931555201c76a920aed277a563400d90c9afa', variant: this.buttomH4Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h4'), "icon-left": "h-4", "aria-label": `${termTranslate(this.language, 'h4')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'fa9b6bad4abd94cdd890e3eca865a35dabf8798a', "tooltip-text": `${termTranslate(this.language, 'h5')}`, position: "top-center" }, h("bds-button", { key: '240a850770957eec90010cb251b668e721199a58', variant: this.buttomH5Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h5'), "icon-left": "h-5", "aria-label": `${termTranslate(this.language, 'h5')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'b81af303389d35979f1714ad50d76e4b614e5f69', "tooltip-text": `${termTranslate(this.language, 'h6')}`, position: "top-center" }, h("bds-button", { key: '8031c31d287dc1df60546f6ea7ce9b129627412f', variant: this.buttomH6Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h6'), "icon-left": "h-6", "aria-label": `${termTranslate(this.language, 'h6')}` }))), this.unstyledButton && (h("bds-tooltip", { key: '350c9d6317b3a6491e17e2492920d7d452046bed', "tooltip-text": `${termTranslate(this.language, 'clear_formatting')}`, position: "top-center" }, h("bds-button", { key: '6497fd89f2983c2abee0459300174054dcbb937e', variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.clearFormatting(ev), "icon-left": "unstyled", "aria-label": `${termTranslate(this.language, 'clear_formatting')}` })))), h("bds-button", { key: 'bc12a6c192e3c50ecccf9ca24f6ba6926b141ff8', id: "buttonAccordion", variant: this.buttomAccordionActive ? 'solid' : 'text', class: "arrow-down", color: "content", size: "short", onBdsClick: () => this.setheaderHeight(), "icon-left": this.positionBar == 'top'
                ? this.buttomAccordionActive
                    ? 'arrow-up'
                    : 'arrow-down'
                : this.buttomAccordionActive
                    ? 'arrow-down'
                    : 'arrow-up' })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "weightButton": ["buttomsHeaderChanged"],
        "italicButton": ["buttomsHeaderChanged"],
        "strikeThroughButton": ["buttomsHeaderChanged"],
        "underlineButton": ["buttomsHeaderChanged"],
        "linkButton": ["buttomsHeaderChanged"],
        "codeButton": ["buttomsHeaderChanged"],
        "alignmentButtons": ["buttomsHeaderChanged"],
        "listButtons": ["buttomsHeaderChanged"],
        "quoteButton": ["buttomsHeaderChanged"],
        "headingButtons": ["buttomsHeaderChanged"],
        "unstyledButton": ["buttomsHeaderChanged"],
        "buttomAccordionActive": ["buttomAccordionActiveChanged"],
        "treeElementsEditor": ["treeElementsEditorChanged"]
    }; }
};
RichText.style = richTextCss;

export { RichText as bds_rich_text };
//# sourceMappingURL=bds-rich-text.entry.js.map

//# sourceMappingURL=bds-rich-text.entry.js.map