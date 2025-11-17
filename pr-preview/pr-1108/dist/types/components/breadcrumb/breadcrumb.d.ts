export declare class Breadcrumb {
    items: string | Array<{
        label: string;
        href?: string;
    }>;
    parsedItems: Array<{
        label: string;
        href?: string;
    }>;
    isDropdownOpen: boolean;
    parseItems(newValue: string | Array<{
        label: string;
        href?: string;
    }>): void;
    componentWillLoad(): void;
    toggleDropdown(): void;
    render(): any;
}
