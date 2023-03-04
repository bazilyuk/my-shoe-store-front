import styled, { css } from 'styled-components';

import { LabelProps } from './types';
import { asterisk } from '@/common/utils/style';

const overlapLabelStyles = css`
  background-color: #fff;
  color: gray;
  font-size: 10px;
  line-height: 1em;
  padding: 0 5px 2px;
  left: 17px;
  position: absolute;
  top: -0.5em;
  z-index: 3;
`;

export const FormLabelStyled = styled('label')<LabelProps>`
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 8px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${({ required }) => required && asterisk()};
  ${({ type }) => type === 'overlap' && overlapLabelStyles};
  ${({ isError }) =>
    isError &&
    `
      color: red;
    `}
`;
