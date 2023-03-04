import React, { FC } from 'react';
import { IconProps } from '@/components/ui/icon/types';
import { WithStyle } from '@/common/utils/types/with-style';
import { IconStyled } from '@/components/ui/icon/icon.styled';
import { iconDefaultProps } from '@/components/ui/icon/const';

const IconCheckThin: FC<IconProps> & WithStyle = (props) => {
  return (
    <IconStyled {...props}>
      <svg viewBox="0 0 29 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m95.96 357.019845-8.6084053-8.513808c-.196338-.19418-.5129156-.192431-.707096.003907s-.1924313.512915.0039066.707096l8.96 8.861538c.1948057.192665.5083837.192665.7031894 0l17.9200003-17.723077c.196338-.19418.198087-.510758.003906-.707096-.19418-.196338-.510758-.198087-.707096-.003906z"
          fill="#fff"
          transform="translate(-86 -339)"
        />
      </svg>
    </IconStyled>
  );
};

IconCheckThin.defaultProps = iconDefaultProps;
IconCheckThin.displayName = 'IconCheckThin';

export default IconCheckThin;
