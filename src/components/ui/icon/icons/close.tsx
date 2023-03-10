import React, { FC } from 'react';
import { IconProps } from '@/components/ui/icon/types';
import { WithStyle } from '@/common/utils/types/with-style';
import { IconStyled } from '@/components/ui/icon/icon.styled';
import { iconDefaultProps } from '@/components/ui/icon/const';

const IconClose: FC<IconProps> & WithStyle = (props) => {
  return (
    <IconStyled {...props}>
      <svg viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m13.033 11.803 11.657-11.656a.5.5 0 1 1 .708.708l-11.656 11.656 11.656 11.634a.5.5 0 0 1 -.708.709l-11.656-11.635-11.634 11.634a.5.5 0 1 1 -.708-.708l11.633-11.633-11.633-11.612a.5.5 0 1 1 .708-.709z"
          fill="#132122"
        />
      </svg>
    </IconStyled>
  );
};

IconClose.defaultProps = iconDefaultProps;
IconClose.displayName = 'IconClose';

export default IconClose;
