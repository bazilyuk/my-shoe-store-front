import { TextStyledAttrProps } from './types';
import styled from 'styled-components';
import { uppercase, capitalize, lineThrough } from '@/common/utils/style';

export const TextStyled = styled('div')<TextStyledAttrProps>`
  ${({ $lineHeight }) => $lineHeight && `line-height: ${$lineHeight}px;`};
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize}px;`};
  ${({ $letterSpacing }) => $letterSpacing && `letter-spacing: ${$letterSpacing}px;`};
  ${({ $color }) => $color && `color: ${$color};`};
  ${({ $capitalize }) => $capitalize && capitalize()};
  ${(props) => props.uppercase && uppercase()};
  ${(props) => props.lineThrough && lineThrough()};
`;
