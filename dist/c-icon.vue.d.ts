import type { IconKey } from '@hyrioo/vite-plugin-material-symbols-svg/consumer';
type Theme = 'rounded' | 'outlined' | 'sharp';
export interface CIconProps {
    icon: IconKey;
    weight?: number;
    theme?: Theme;
    fill?: 0 | 1;
    width?: number;
    height?: number;
    size?: number;
}
declare const _default: import("vue").DefineComponent<CIconProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CIconProps> & Readonly<{}>, {
    weight: number;
    theme: Theme;
    fill: 0 | 1;
    width: number;
    height: number;
    size: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
