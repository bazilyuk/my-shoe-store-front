import { css } from 'styled-components';

export const uppercase = () => css`
  text-transform: uppercase;
`;

export const capitalize = () => css`
  text-transform: capitalize;
`;

export const lineThrough = () => css`
  text-decoration: line-through;
`;

export const asterisk = () => css`
  ::after {
    content: ' *';
  }
`;
