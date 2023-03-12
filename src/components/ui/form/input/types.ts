import { TextProps } from 'react-uforms';
import { ArrayToType } from '@/common/utils/types/types';
import { HtmlProps } from '@/common/utils/types/html-props';

export const FormInputTypeArray = ['date', 'text', 'password', 'email', 'tel', 'number', 'hidden'] as const;
export type FormInputType = ArrayToType<typeof FormInputTypeArray>;

export interface FormInputProps extends TextProps {
  type: FormInputType;
  id?: string;
  name: string;
  hideError?: boolean;
  clearable?: boolean;
  format?: string;
}

export type FormInputWrapProps = HtmlProps<HTMLDivElement>;

export interface FormInputFieldProps extends FormInputProps {
  label?: string;
  labelColored?: boolean;
}

export interface FormInputClearableProps extends FormInputProps {
  clearable?: boolean;
  onClear?(): void;
}

export type FormInputStyledAttrProps = FormInputClearableProps;
