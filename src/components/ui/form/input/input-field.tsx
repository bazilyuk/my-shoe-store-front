import React, { FC } from 'react';
import { CustomField } from 'react-uforms';

import { FormLabel, LabelProps } from '../label';
import { FormInput } from './input';
import { FormInputFieldWrapStyled, FormInputStyled } from './input.styled';
import { FormInputFieldProps } from './types';
import { WithStyle } from '@/common/utils/types/with-style';

export const FormInputLabel = (props: LabelProps) => (
  <FormLabel required={props.required} type={props.type} isError={props.isError} htmlFor={props.htmlFor}>
    {props.label}
  </FormLabel>
);

export const FormInputField: FC<FormInputFieldProps> & WithStyle = ({ labelColored, ...props }) => {
  const labelProps = {
    required: props.required,
    label: props.label,
    htmlFor: props.name,
  };

  return (
    <FormInputFieldWrapStyled>
      <CustomField name={props.name} hideError={true}>
        {({ getErrors }) => {
          const isError = Array.isArray(getErrors()) && getErrors().length > 0;

          return (
            <>
              {props.label && <FormInputLabel isError={labelColored && isError} {...labelProps} />}
              <FormInput {...props} placeholder={props.placeholder} />
            </>
          );
        }}
      </CustomField>
    </FormInputFieldWrapStyled>
  );
};

FormInputField.defaultProps = {
  type: 'text',
  disabled: false,
  required: false,
  placeholder: 'Enter',
};

FormInputField.displayName = 'FormInputField';
FormInputField.Style = FormInputStyled;
