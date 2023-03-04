import { HtmlProps } from '@/common/utils/types/html-props';

export interface LabelProps extends HtmlProps<HTMLLabelElement> {
  required?: boolean;
  as?: any;
  isError?: boolean;
  isActive?: boolean;
}
