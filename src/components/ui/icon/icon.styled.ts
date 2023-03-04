import styled from 'styled-components';
import { IconProps } from './types';
import { Colors } from '@/common/const/colors';

export const IconStyled = styled('div')<IconProps>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  display: inline-flex;
  * {
    fill: ${({ $color }) => $color && Colors[$color]};
  }
`;
