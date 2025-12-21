import type { Filled, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
export { default as HSymbol } from './h-symbol.vue';
export type { HSymbolProps } from './h-symbol.vue';
export interface HSymbolConfig {
    weight: Weight;
    theme: Theme;
    filled: Filled;
    debug: boolean;
}
export declare function configureSymbolDefaults(overrides: Partial<HSymbolConfig>): void;
export declare const symbolDefaultConfig: {
    readonly weight: Weight;
    readonly theme: Theme;
    readonly filled: boolean;
    readonly debug: boolean;
};
