import { Props } from 'react-select';

export interface FormSelectProps extends Omit<Props, 'isMulti'> {
  error?: boolean;
  isMulti?: boolean;
  hideError?: boolean;
  colorMark?: string;
  isSearchable?: boolean;
  showMultiOptionsCount?: boolean;
}

export interface FormSelectFieldProps extends FormSelectProps {
  label?: string;
}

export interface FormSelectOptionProps {
  label?: string;
  value?: string;
}
