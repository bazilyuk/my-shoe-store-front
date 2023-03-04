import React, { FC } from 'react';
import { IconProps } from '@/components/ui/icon/types';
import { WithStyle } from '@/common/utils/types/with-style';
import { IconStyled } from '@/components/ui/icon/icon.styled';
import { iconDefaultProps } from '@/components/ui/icon/const';

const IconTriangleDown: FC<IconProps> & WithStyle = (props) => {
  return (
    <IconStyled {...props}>
      <svg viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path d="m344 1214.5v9l6-4.449z" fill="#132122" fillRule="evenodd" transform="matrix(0 1 1 0 -1214 -344)" />
      </svg>
    </IconStyled>
  );
};

IconTriangleDown.defaultProps = iconDefaultProps;
IconTriangleDown.displayName = 'IconTriangleDown';

export default IconTriangleDown;
