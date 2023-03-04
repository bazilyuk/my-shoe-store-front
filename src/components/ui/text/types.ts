import { HtmlProps } from '@/common/utils/types/html-props';

export interface TextProps extends HtmlProps<Omit<HTMLParagraphElement, 'align'>> {
  children: any;
  as?: any;
  color?: string;
  letterSpacing?: number;
  /** To use uppercase text */
  uppercase?: boolean;
  /** To use capitalize text */
  capitalize?: boolean;
  /** To use line through text */
  lineThrough?: boolean;
  /** Takes full width of the parent component */
  fullWidth?: boolean;
  fontSize?: number;
  lineHeight?: number;
}

export interface TextStyledAttrProps extends TextProps {
  $color?: string;
  $letterSpacing?: number;
  $fontSize?: number;
  $lineHeight?: number;
  $capitalize?: boolean;
}
