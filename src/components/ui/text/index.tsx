import React, { FC } from 'react';
import { TextProps } from './types';
import { TextStyled } from './text.styled';
import { WithStyle } from '@/common/utils/types/with-style';

export const Text: FC<TextProps> & WithStyle = ({ color, fontSize, ...rest }) => {
  return <TextStyled $color={color} $fontSize={fontSize} {...rest} />;
};

Text.defaultProps = {
  as: 'span',
};

Text.displayName = 'Text';
Text.Style = TextStyled;
