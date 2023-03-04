import { HtmlProps } from '@/common/utils/types/html-props';

export type SVGProp = HtmlProps<HTMLOrSVGElement>;
export interface IconProps extends SVGProp {
  $size?: number;
  $color?: string;
  as?: any;
}
