import React, { FC } from 'react';
import { CustomField } from 'react-uforms';
import { FormSelectFieldProps } from './types';
import { FormSelect } from './select';
import { FormLabel, LabelProps } from '../label';
import { FormSelectContainerStyled } from './select.styled';

export const FormSelectLabel = (props: LabelProps) => (
  <FormLabel required={props.required} type={props.type} isError={props.isError} htmlFor={props.htmlFor}>
    {props.label}
  </FormLabel>
);

export const FormSelectField: FC<FormSelectFieldProps> = ({ ...props }) => {
  const labelProps = {
    required: props.required,
    label: props.label,
    htmlFor: props.name,
  };

  return (
    <FormSelectContainerStyled>
      <CustomField name={props.name} hideError={true}>
        {({ getErrors }) => {
          const isError = Array.isArray(getErrors()) && getErrors().length > 0;

          return (
            <>
              {props.label && <FormSelectLabel isError={isError} {...labelProps} />}
              <FormSelect {...props} hideError={true} />
            </>
          );
        }}
      </CustomField>
    </FormSelectContainerStyled>
  );
};
