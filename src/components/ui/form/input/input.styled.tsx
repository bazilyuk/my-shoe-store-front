import React, { FC } from 'react';
import { Text } from 'react-uforms';

import { IconStyled } from '@/components/ui/icon/icon.styled';
import { FormInputProps, FormInputStyledAttrProps, FormInputWrapProps } from '@/components/ui/form/input/types';
import styled, { css } from 'styled-components';
import {
  formControlBasic,
  formControlColorVariant,
  formControlDisabledVariant,
  formControlFocusVariant,
  formControlPlaceholder,
} from '@/components/ui/form/const';

const FormInputChild: FC<FormInputProps> = ({ clearable: _clearable, ...props }) => {
  return <Text {...props} hideError={true} />;
};

export const FormInputBasicStyles = css`
  border-radius: 0;

  /* Basic styles */
  ${formControlBasic}

  /* Color variations */
  ${formControlColorVariant()}

  /* Placeholder customization */
  ${formControlPlaceholder}

  /* Focus state */
  ${formControlFocusVariant}

  /* Disabled state */
  ${formControlDisabledVariant}
`;

export const FormInputStyled = styled(FormInputChild)<FormInputStyledAttrProps>`
  font-size: 12px;
  height: 52px;
  line-height: 30px;
  padding: 10px 15px;
  ${FormInputBasicStyles}
  ${({ clearable }) => (clearable ? 'padding-right: 40px;' : '')}
`;

const FormInputWrapChild: FC<FormInputWrapProps> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export const FormInputWrapStyled = styled(FormInputWrapChild)<FormInputWrapProps>`
  position: relative;

  & > ${IconStyled} {
    position: absolute;
    margin: -11px 0 0;
    top: 50%;
    right: 15px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
  }
`;

export const FormInputFieldWrapStyled = styled('div')`
  position: relative;
`;
