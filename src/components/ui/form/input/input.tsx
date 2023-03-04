import React, { FC } from 'react';
import { FormInputProps } from './types';
import { FormInputStyled, FormInputWrapStyled } from './input.styled';
import { WithStyle } from '@/common/utils/types/with-style';
import IconCheckThin from '@/components/ui/icon/icons/check-thin';

export const FormInput: FC<FormInputProps> & WithStyle = ({ as: _as, ref: _ref, ...props }) => {
  return (
    <FormInputWrapStyled>
      <FormInputStyled {...props} id={props.id || props.name} />
      <IconCheckThin $color="success" $size={22} />
    </FormInputWrapStyled>
  );
};

FormInput.defaultProps = {
  type: 'text',
  disabled: false,
  required: false,
  placeholder: 'Enter',
  hideError: true,
};

FormInput.displayName = 'FormInput';
FormInput.Style = FormInputStyled;
