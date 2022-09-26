export interface TitleActionBtnType {
    name?: string;
    value: string;
    type: 'btn' | 'menu';
    iconClass?: string;
    icon?: string;
    classNames?: string;
    tooltip?: string;
    clickType?: string;
    iconClassNames?: string;
    children?: TitleActionBtnType[];
    perms?: string[];
}