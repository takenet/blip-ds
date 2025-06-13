import { ComponentInterface } from '../../../stencil-public-runtime';
export type AlertHeaderVariannt = 'system' | 'error' | 'warning' | 'delete';
export declare class AlertHeader implements ComponentInterface {
    /**
     * Variant. Entered as one of the variant. Can be one of:
     * 'system', 'error', 'warning', 'delete';
     */
    variant?: AlertHeaderVariannt;
    /**
     * used for add icon the header. Uses the bds-icon component.
     */
    icon?: string;
    render(): any;
}
