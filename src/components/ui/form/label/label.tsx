import React, { FC } from 'react';
import { LabelProps } from './types';
import { FormLabelStyled } from './label.styled';
import { WithStyle } from '@/common/utils/types/with-style';

export const FormLabel: FC<LabelProps> & WithStyle = React.memo(
  React.forwardRef((props, ref) => {
    return (
      <FormLabelStyled ref={ref} {...props}>
        {props.children}
      </FormLabelStyled>
    );
  }),
);

FormLabel.defaultProps = {
  as: 'label',
};

FormLabel.displayName = 'FormLabel';
FormLabel.Style = FormLabelStyled;
