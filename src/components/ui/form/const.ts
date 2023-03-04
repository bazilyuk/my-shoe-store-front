import { css } from 'styled-components';
import { Colors } from '@/common/const/colors';
import { FormControlActionType, FormControlDefaultType } from '@/components/ui/form/types';
import { IconStyled } from '@/components/ui/icon/icon.styled';

export const formControlBasic = css`
  width: 100%;
  display: block;
  box-sizing: border-box;
  appearance: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const FormControlDisabled: FormControlActionType = {
  color: Colors.gray500,
  backgroundColor: Colors.gray100,
  border: `1px solid ${Colors.gray300}`,
};
export const FormControlFocused: FormControlActionType = {
  border: `1px solid ${Colors.primary}`,
};

export const FormControlDefault: FormControlDefaultType = {
  color: Colors.gray800,
  placeholderColor: Colors.gray500,
  border: `1px solid ${Colors.gray700}`,
};

export const formControlColorVariant = () => css`
  color: ${FormControlDefault.color};
  background-color: ${FormControlDefault.backgroundColor};
  border: ${FormControlDefault.border};

  &.is-invalid {
    border-color: ${Colors.danger};
  }
  &.is-success {
    border-color: ${Colors.success};

    & + ${IconStyled} {
      opacity: 1;
      z-index: 0;
    }
  }
`;

export const formControlPlaceholder = css`
  &::-webkit-input-placeholder {
    color: ${FormControlDefault.placeholderColor};
    text-transform: none;
  }
  &::-moz-placeholder {
    color: ${FormControlDefault.placeholderColor};
    text-transform: none;
  }
  &:-ms-input-placeholder {
    color: ${FormControlDefault.placeholderColor};
    text-transform: none;
  }
`;

export const formControlFocusVariant = css`
  &:focus {
    border: ${FormControlFocused.border};
    box-shadow: 0 0 0 2px rgba(0, 103, 244, 0.5);
  }
`;

export const formControlDisabledVariant = css`
  &:disabled {
    background-color: ${FormControlDisabled.backgroundColor};
    border: ${FormControlDisabled.border};
  }
`;
