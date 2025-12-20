import type { Fill, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
export { default as CIcon } from './c-icon.vue';
export type { CIconProps } from './c-icon.vue';
export interface CIconConfig {
    weight: Weight;
    theme: Theme;
    fill: Fill;
}
export declare function configureSymbolDefaults(overrides: Partial<CIconConfig>): void;
export declare const symbolDefaultConfig: {
    readonly weight: Weight;
    readonly theme: Theme;
    readonly fill: boolean;
};
