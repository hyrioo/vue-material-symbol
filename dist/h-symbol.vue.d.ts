import type { OpticalSize, Filled, IconKey, Theme, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
export interface HSymbolProps {
    icon: IconKey;
    weight?: Weight;
    theme?: Theme;
    filled?: Filled;
    size?: number;
    opticalSize?: OpticalSize | null;
}
declare const _default: import("vue").DefineComponent<HSymbolProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<HSymbolProps> & Readonly<{}>, {
    weight: Weight;
    theme: Theme;
    filled: Filled;
    size: number;
    opticalSize: OpticalSize | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
