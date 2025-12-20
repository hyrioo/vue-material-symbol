import { readonly } from 'vue';
import type { Fill, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';

export { default as CIcon } from './c-icon.vue';
export type { CIconProps } from './c-icon.vue';

export interface CIconConfig {
    weight: Weight;
    theme: Theme;
    fill: Fill;
}

let _defaults: CIconConfig = {
    weight: 400,
    theme: 'rounded',
    fill: false,
};

export function configureSymbolDefaults(
    overrides: Partial<CIconConfig>,
) {
    _defaults = {
        ..._defaults,
        ...overrides,
    };
}

export const symbolDefaultConfig = readonly({
    get weight() {
        return _defaults.weight;
    },
    get theme() {
        return _defaults.theme;
    },
    get fill() {
        return _defaults.fill;
    },
});