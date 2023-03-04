import React, { FC, useEffect, useRef, useState } from 'react';
import { OptionTypeBase } from 'react-select';
import { CustomField } from 'react-uforms';

import { ClearIndicator, DropdownIndicator, NoOptionsMessage, OptionBasic } from './select-elements';
import { FormSelectStyled } from './select.styled';
import { FormSelectProps } from './types';
import { WithStyle } from '@/common/utils/types/with-style';

export const getFormattedValue = (inputValue: string, options: OptionTypeBase[]): OptionTypeBase => {
  const index = options.findIndex((option) => option.value === inputValue);
  return index !== -1 ? options[index] : { label: inputValue, value: inputValue };
};

export const formatDefaultValues = (inputValue: string[] | string, options: any): OptionTypeBase[] | OptionTypeBase => {
  if (Array.isArray(inputValue)) {
    return inputValue.map((item) => getFormattedValue(item, options));
  }
  return getFormattedValue(inputValue, options);
};

export const FormSelect: FC<FormSelectProps> & WithStyle = (props) => {
  const {
    id,
    name,
    disabled,
    required,
    options,
    isMulti,
    isClearable,
    instanceId,
    onInputChange,
    onChange,
    onFocus,
    placeholder,
    onBlur,
    hideError,
    menuPlacement,
    colorMark: initColorMark,
    isSearchable,
    showMultiOptionsCount,
    autoComplete,
    'data-test': dataTest,
    'data-test-id': dataTestId,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const colorMark = initColorMark && (initColorMark.includes('#') ? initColorMark : `#${initColorMark}`);

  const Option = isMulti || OptionBasic;

  return (
    <CustomField name={name} hideError={hideError}>
      {({ getValue, setValue, getErrors, setTouched }) => {
        const value = getValue();
        const wrapRef = useRef<any>(null);

        useEffect(() => {
          const input = wrapRef?.current?.querySelector(`input[name="${name}"]`);
          const comboboxDiv = wrapRef.current.querySelector('.react-select__control');
          input?.setAttribute('id', id || name);
          comboboxDiv?.setAttribute('role', 'combobox');
        }, []);

        const optionsProps = { value: value ? formatDefaultValues(value, options) : null, options };

        return (
          <div
            data-test={dataTest}
            data-test-id={dataTestId}
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            ref={wrapRef}
          >
            <FormSelectStyled
              components={{
                DropdownIndicator,
                ClearIndicator,
                NoOptionsMessage,
                Option,
              }}
              isDisabled={disabled}
              isCreatable={false}
              hideSelectedOptions={false}
              onChange={(newValue: any, action: any) => {
                let value = undefined;
                if (newValue) {
                  value = Array.isArray(newValue) ? newValue.map((item) => item.value) : newValue.value;
                }

                setValue(value, () => {
                  if (onChange) {
                    onChange(newValue, action);
                  }
                });
              }}
              onBlur={(event: any) => {
                if (onBlur) {
                  onBlur(event);
                }
                setTouched();
              }}
              onMenuOpen={() => setIsOpen(true)}
              onMenuClose={() => setIsOpen(false)}
              className={`react-select-container ${location ? 'react-select-location' : ''}`}
              classNamePrefix="react-select"
              instanceId={instanceId || name}
              error={Array.isArray(getErrors()) && getErrors().length > 0}
              {...{
                id: '',
                menuPlacement,
                name,
                required,
                isMulti,
                placeholder,
                isClearable,
                colorMark,
                isSearchable,
                onFocus,
                onInputChange,
                autoComplete,
                showMultiOptionsCount: showMultiOptionsCount && isMulti,
                ...optionsProps,
              }}
            />
          </div>
        );
      }}
    </CustomField>
  );
};

FormSelect.defaultProps = {
  hideError: false,
  isMulti: false,
};

FormSelect.displayName = 'FormSelect';
