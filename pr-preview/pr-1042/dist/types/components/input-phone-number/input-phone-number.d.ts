import { EventEmitter } from '../../stencil-public-runtime';
import { Option } from '../selects/select-interface';
export type languages = 'pt_BR' | 'es_ES' | 'en_US';
export declare class InputPhoneNumber {
    private nativeInput?;
    el: HTMLBdsSelectElement;
    isOpen?: boolean;
    selectedCountry: string;
    isoCode: string;
    validationDanger?: boolean;
    validationMesage?: string;
    isPressed?: boolean;
    /**
     * Lista de opções do select.
     */
    options?: Array<Option>;
    /**
     * Valor do input de telefone.
     */
    text?: string;
    /**
     * Valor do select.
     */
    value?: string | null;
    /**
     * Habilita o estado "danger" no input.
     */
    danger?: boolean;
    /**
     * Habilita o estado "success" no input.
     */
    success?: boolean;
    /**
     * Desabilita o input.
     */
    disabled?: boolean;
    /**
     * Se `true`, o valor do input será obrigatório.
     */
    required: boolean;
    /**
     * Mensagem de ajuda para o usuário.
     */
    helperMessage?: string;
    /**
     * Mensagem de erro a ser exibida.
     */
    errorMessage?: string;
    /**
     * Mensagem de sucesso a ser exibida.
     */
    successMessage?: string;
    /**
     * Mensagem de erro para campo obrigatório.
     */
    requiredErrorMessage: string;
    /**
     * Mensagem de erro para validação numérica.
     */
    numberErrorMessage: string;
    /**
     * Data-test para identificar o componente.
     */
    dataTest?: string;
    /**
     * Data-test para o botão de seleção de bandeira.
     */
    dtSelectFlag?: string;
    /**
     * Evento disparado quando o valor é alterado.
     */
    bdsPhoneNumberChange: EventEmitter;
    /**
     * Evento disparado quando o input sofre alteração.
     */
    bdsInput: EventEmitter<InputEvent>;
    /**
     * Evento disparado quando a seleção é cancelada.
     */
    bdsCancel: EventEmitter<void>;
    /**
     * Evento disparado quando o select ganha foco.
     */
    bdsFocus: EventEmitter<void>;
    /**
     * Evento disparado quando o select perde o foco.
     */
    bdsBlur: EventEmitter<void>;
    /**
     * Label do input.
     */
    label?: string;
    /**
     * Ícone à esquerda do input.
     */
    icon?: string;
    /**
     * Valores possíveis: "pt_BR", "en_US", "es_ES".
     * Se nenhum for informado, utiliza o arquivo padrão (countries.json).
     */
    language?: languages;
    private countries;
    removeFocus(): Promise<void>;
    valueChanged(): void;
    handleWindow(ev: Event): void;
    languageChanged(): void;
    private updateCountries;
    componentWillRender(): void;
    private get childOptions();
    private refNativeInput;
    private onClickWrapper;
    private onFocus;
    private onBlur;
    private changedInputValue;
    protected handleInputChange(): void;
    private numberValidation;
    private toggle;
    private handleKeyDown;
    private handler;
    changeCountry(code: any, isoCode: any, flag: any): Promise<void>;
    private keyPressWrapper;
    private checkValidity;
    private renderIcon;
    private renderLabel;
    private renderMessage;
    render(): HTMLElement;
}
