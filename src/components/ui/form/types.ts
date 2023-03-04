export interface FormControlBasicType {
  color?: string;
  border: string;
  backgroundColor?: string;
}

export interface FormControlDefaultType extends FormControlBasicType {
  placeholderColor: string;
}

export interface FormControlActionType extends FormControlBasicType {
  icon?: any;
}
