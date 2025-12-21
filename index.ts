import { readonly } from 'vue';
import type { Filled, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';

export { default as HSymbol } from './h-symbol.vue';
export type { HSymbolProps } from './h-symbol.vue';

export interface HSymbolDefaultProps {
    weight: Weight;
    theme: Theme;
    filled: Filled;
    debug: boolean;
}

let _defaults: HSymbolDefaultProps = {
    weight: 400,
    theme: 'rounded',
    filled: false,
    debug: (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production'),
};
console.log('h-symbol debug:', _defaults.debug);

export function configureSymbolDefaultProps(
    overrides: Partial<HSymbolDefaultProps>,
) {
    _defaults = {
        ..._defaults,
        ...overrides,
    };
}

export const symbolDefaultProps = readonly({
    get weight() {
        return _defaults.weight;
    },
    get theme() {
        return _defaults.theme;
    },
    get filled() {
        return _defaults.filled;
    },
    get debug() {
        return _defaults.debug;
    },
});