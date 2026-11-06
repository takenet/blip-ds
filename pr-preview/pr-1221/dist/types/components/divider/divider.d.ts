export declare class BdsDivider {
    /**
     * O tipo de estilo da linha: sólida, pontilhada, tracejada
     */
    styleType: 'solid' | 'dotted' | 'dashed';
    /**
     * Define se o divider deve ser exibido horizontalmente ou verticalmente
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Cor da linha, aceitando qualquer valor válido em CSS (hex, rgb, nome da cor)
     */
    color: 'divider-1' | 'divider-2' | 'divider-3';
    render(): any;
}
