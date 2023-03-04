import React from 'react';
import { components } from 'react-select';
import { ColorMarkOption, OptionTextStyled } from './select.styled';
import IconTriangleDown from '@/components/ui/icon/icons/triangle-down';
import IconCheckThin from '@/components/ui/icon/icons/check-thin';
import IconClose from '@/components/ui/icon/icons/close';

export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <span className="react-select__dropdown-indicator-inner">
        <IconTriangleDown $size={8} $color="gray800" />
      </span>
    </components.DropdownIndicator>
  );
};

export const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator role="button" ariaLabel="clear" {...props}>
      <span className="react-select__clear-btn">
        <IconClose $size={10} $color="black" />
      </span>
    </components.ClearIndicator>
  );
};

export const NoOptionsMessage = (props: any) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span className="react-select__no-result">No results found</span>
    </components.NoOptionsMessage>
  );
};

export const OptionBasic = (props: any) => {
  const { data, children } = props;

  return (
    <components.Option {...props}>
      {data?.hex && <ColorMarkOption $color={data.hex} />}
      <OptionTextStyled>{children}</OptionTextStyled>
      <span className="react-select__check-ico">
        <IconCheckThin $size={16} $color="success" />
      </span>
    </components.Option>
  );
};
