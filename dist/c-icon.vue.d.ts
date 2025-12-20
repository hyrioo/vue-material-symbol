import type { IconKey, Theme, Fill, Weight } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
export interface CIconProps {
    icon: IconKey;
    weight?: Weight;
    theme?: Theme;
    fill?: Fill;
    width?: number;
    height?: number;
    size?: number;
}
declare const _default: import("vue").DefineComponent<CIconProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CIconProps> & Readonly<{}>, {
    weight: Weight;
    theme: Theme;
    fill: Fill;
    width: number;
    height: number;
    size: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
