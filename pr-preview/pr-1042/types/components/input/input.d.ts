import { EventEmitter } from '../../stencil-public-runtime';
import { InputType, InputAutocapitalize, InputAutoComplete, InputCounterLengthRules } from './input-interface';
export declare class Input {
    private nativeInput?;
    isPressed?: boolean;
    isPassword?: boolean;
    validationMesage?: string;
    validationDanger?: boolean;
    /**
     * Nome do input, usado para identificação no formulário.
     */
    inputName?: string;
    /**
     * Define o tipo do input (por exemplo, `text`, `password`, etc).
     */
    type?: InputType;
    /**
     * Rótulo que será exibido acima do input.
     */
    label?: string;
    /**
     * Texto que será exibido como sugestão ou dica no input.
     */
    placeholder?: string;
    /**
     * Define a capitalização automática do texto (valores possíveis: `on`, `off`).
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Define o comportamento de autocompletar do navegador (valores possíveis: `on`, `off`).
     */
    autoComplete?: InputAutoComplete;
    /**
     * Define o valor máximo permitido para o input.
     */
    max?: string;
    /**
     * Define o número máximo de caracteres permitidos no input.
     */
    maxlength?: number;
    /**
     * Define o valor mínimo permitido para o input.
     */
    min?: string;
    /**
     * Define o número mínimo de caracteres permitidos no input.
     */
    minlength?: number;
    /**
     * Torna o input somente leitura.
     */
    readonly: boolean;
    /**
     * Define se o input é obrigatório.
     */
    required: boolean;
    /**
     * Define um padrão regex que o valor do input deve seguir.
     */
    pattern?: string;
    /**
     * Mensagem de ajuda exibida abaixo do input.
     */
    helperMessage?: string;
    /**
     * Mensagem de erro exibida quando o valor do input é inválido.
     */
    errorMessage?: string;
    /**
     * Mensagem exibida quando o valor do input é válido.
     */
    successMessage?: string;
    /**
     * Nome do ícone a ser exibido dentro do input.
     */
    icon?: string;
    /**
     * Define se o input está desabilitado.
     */
    disabled?: boolean;
    /**
     * Define se o input está em estado de erro.
     */
    danger?: boolean;
    /**
     * Define se o input está em estado de sucesso.
     */
    success?: boolean;
    /**
     * O valor atual do input.
     */
    value?: string | null;
    /**
     * Define se será exibido um contador de comprimento de caracteres.
     */
    counterLength?: boolean;
    /**
     * Define a regra do contador de comprimento de caracteres (min, max, etc).
     */
    counterLengthRule?: InputCounterLengthRules;
    /**
     * Define se o input será submetido ao pressionar Enter.
     */
    isSubmit: boolean;
    /**
     * Define se o input é uma área de texto (textarea).
     */
    isTextarea: boolean;
    /**
     * Define a quantidade de linhas da área de texto (se for `textarea`).
     */
    rows?: number;
    /**
     * Define a quantidade de colunas da área de texto (se for `textarea`).
     */
    cols?: number;
    /**
     * Mensagem de erro exibida quando o input não é preenchido e é obrigatório.
     */
    requiredErrorMessage: string;
    /**
     * Mensagem de erro exibida quando o valor do input não atende ao comprimento mínimo.
     */
    minlengthErrorMessage: string;
    /**
     * Mensagem de erro exibida quando o valor do input não atende ao valor mínimo permitido.
     */
    minErrorMessage: string;
    /**
     * Mensagem de erro exibida quando o valor do input não atende ao valor máximo permitido.
     */
    maxErrorMessage: string;
    /**
     * Mensagem de erro exibida quando o valor do input não é um email válido.
     */
    emailErrorMessage: string;
    /**
     * Mensagem de erro exibida quando o valor do input não é um número válido.
     */
    numberErrorMessage: string;
    /**
     * Define se o input será exibido como chips (um tipo de entrada com múltiplos valores).
     */
    chips: boolean;
    /**
     * Data test é a prop para testar especificamente a ação do componente.
     */
    dataTest?: string;
    encode?: boolean;
    /**
     * Evento disparado quando o valor do input muda.
     */
    bdsChange: EventEmitter;
    /**
     * Evento disparado quando o input recebe um input (digitação).
     */
    bdsInput: EventEmitter<KeyboardEvent>;
    /**
     * Evento disparado quando o input perde o foco.
     */
    bdsOnBlur: EventEmitter;
    /**
     * Evento disparado quando o input ganha o foco.
     */
    bdsFocus: EventEmitter;
    /**
     * Evento disparado quando o formulário é submetido.
     */
    bdsSubmit: EventEmitter;
    /**
     * Evento disparado para validação de padrão regex.
     */
    bdsPatternValidation: EventEmitter;
    /**
     * Evento disparado quando a tecla "Backspace" é pressionada.
     */
    bdsKeyDownBackspace: EventEmitter;
    /**
     * Define o foco no campo de entrada.
     */
    setFocus(): Promise<void>;
    /**
     * Remove o foco do campo de entrada.
     */
    removeFocus(): Promise<void>;
    /**
     * Retorna o elemento de input do componente.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Verifica se o campo de entrada é válido.
     */
    isValid(): Promise<boolean>;
    /**
     * Limpa o valor do campo de entrada.
     */
    clear(): Promise<void>;
    /**
     * Codifica os caracteres especiais para exibição segura (evita injeção de código HTML).
     */
    private encodeValue;
    /**
     * Avisa sobre a mudança do valor do campo de entrada.
     */
    protected valueChanged(newValue: string | null): void;
    /**
     * Tratamento de eventos de pressionamento de tecla (Enter, Backspace, etc).
     */
    private keyPressWrapper;
    /**
     * Função chamada ao digitar no campo de entrada.
     */
    private onInput;
    /**
     * Função chamada ao perder o foco do campo de entrada.
     */
    private onBlur;
    /**
     * Função chamada ao ganhar o foco do campo de entrada.
     */
    private onFocus;
    /**
     * Função chamada ao clicar no campo de entrada.
     */
    private onClickWrapper;
    /**
     * Limpa o valor do campo de entrada.
     */
    private clearTextInput;
    /**
     * Função que renderiza o ícone dentro do campo de entrada.
     */
    private renderIcon;
    /**
     * Função que renderiza a label do campo de entrada.
     */
    private renderLabel;
    /**
     * Função que renderiza as mensagens de erro ou sucesso abaixo do campo de entrada.
     */
    private renderMessage;
    /**
     * Valida o campo de entrada ao perder o foco.
     */
    private onBlurValidations;
    /**
     * Realiza as validações do campo enquanto o usuário digita.
     */
    private onBdsInputValidations;
    /**
     * Valida o padrão regex do campo.
     */
    private patternValidation;
    /**
     * Valida se o campo é obrigatório.
     */
    private requiredValidation;
    /**
     * Valida o comprimento do texto no campo de entrada.
     */
    private lengthValidation;
    /**
     * Valida os valores mínimos e máximos do campo de entrada.
     */
    private minMaxValidation;
    /**
     * Valida se o campo contém um email válido.
     */
    private emailValidation;
    /**
     * Valida se o campo contém um número válido.
     */
    private numberValidation;
    /**
     * Verifica se o campo de entrada é válido.
     */
    private checkValidity;
    /**
     * Atualiza o valor do campo de entrada após as mudanças.
     */
    componentDidUpdate(): void;
    render(): HTMLElement;
}
