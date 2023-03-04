import React, { FC } from 'react';
import Select from 'react-select';
import styled, { css } from 'styled-components';
import { FormSelectProps } from './types';
import { Colors } from '@/common/const/colors';
import { IconStyled } from '@/components/ui/icon/icon.styled';

export const FormSelectContainerStyled = styled('div')`
  position: relative;
`;

export const FormSelectChild: FC<FormSelectProps> = (props) => <Select {...props} />;

export const ColorMarkStyled = styled('div')`
  display: block;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const colorMarkStyle = (colorMark: string) => css`
  &__single-value {
    display: flex;
    align-items: center;
    margin-left: 0;

    &:before {
      background-color: ${colorMark};
      border-radius: 50%;
      content: '';
      display: block;
      margin-right: 12px;
      height: 18px;
      width: 18px;
      border: 1px solid gray;
      flex: 1 0 18px;
    }
  }
  &__input {
    margin-left: 25px;
  }
`;

export const FormSelectStyled = styled(FormSelectChild)<FormSelectProps>`
  ${ColorMarkStyled} {
    left: 0;
    background-color: ${({ colorMark }) => colorMark};
  }

  .react-select,
  .react-select-creatable {
    &__control {
      border-radius: 0;
      border: ${({ error }) => `1px solid ${error ? 'red' : Colors.gray700}`};
      line-height: 20px;
      box-sizing: border-box;
      font-size: 14px;
      &:hover {
        box-shadow: none;
        outline: none;
        border: 1px solid ${Colors.gray700};
      }
      &--menu-is-open,
      &--is-focused {
        box-shadow: inset 0 0 0 1px rgba(61, 178, 215, 0.8);
        outline: none;
        border: 1px solid #3e9dbb;
      }
      &--is-disabled {
        border: 1px solid ${Colors.gray300};
        color: ${Colors.gray500};
        background-color: ${Colors.gray100};
        .react-select__dropdown-indicator ${IconStyled} {
          fill: ${Colors.gray300} !important;
        }
      }
    }
    &__value-container {
      min-height: 50px;
      padding: 5px 15px;
    }
    &__indicator {
      width: 36px;
      height: 50px;
      box-sizing: border-box;
      position: relative;

      &-separator {
        display: none;
      }
    }
    &__clear-indicator {
      width: auto;
      padding: 14px 5px;
      cursor: pointer;
      &:hover {
        color: ${Colors.primaryDark};
      }
    }
    &__dropdown-indicator-inner {
      width: 20px;
      height: 20px;
      text-align: center;
      position: absolute;
      top: 50%;
      margin: -10px 0 0;
    }
    &__menu {
      margin: -1px 0 0;
      border-radius: 0;
      z-index: 11;
      box-shadow: none;
      padding: 0;
      border: 1px solid ${Colors.gray700};
      &-notice {
        font-size: 14px;
      }
      &-list {
        padding: 0;
      }
    }
    &__multi-value {
      background-color: ${Colors.secondaryLight};
      ${({ showMultiOptionsCount }) =>
        showMultiOptionsCount &&
        css`
          background-color: transparent;
          margin: 0;
          padding: 0;
        `}
      & + .react-select-creatable__multi-value, & + .react-select__multi-value {
        ${({ showMultiOptionsCount }) =>
          showMultiOptionsCount &&
          css`
            display: none;
          `}
      }
      &__label {
        height: 32px;
        font-size: 14px;
        padding: 5px 10px;
        line-height: 22px;
      }
      &__remove {
        width: 32px;
        background-color: ${Colors.secondary};
        cursor: pointer;
        text-align: center;
        svg {
          margin: 0 auto;
        }

        &:hover,
        &:focus {
          background-color: ${Colors.secondary};
        }
      }
    }
    &__clear-btn {
      width: 22px;
      height: 22px;
      background-color: ${Colors.secondary};
      border: none;
      padding: 6px;
      line-height: 8px;
      cursor: pointer;
      &:hover,
      &:focus {
        outline: none;
        background-color: ${Colors.secondaryLight};
      }
    }
    &__no-result {
      height: 44px;
      padding: 10px 15px;
      line-height: 24px;
    }
    &__option {
      height: 44px;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      padding: 10px 15px;
      line-height: 24px;
      color: ${Colors.gray700};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .react-select__option .react-select-creatable__check-block,
  .react-select-creatable__option .react-select__check-ico {
    display: none;
  }
  .react-select {
    ${({ colorMark }) => colorMark && colorMarkStyle(colorMark)}

    &__option {
      display: flex;
      align-items: center;
      padding-left: 15px;
      padding-right: 45px;
      .react-select__check-ico {
        position: absolute;
        display: none;
        top: 50%;
        margin: -8px 0 0;
        right: 15px;
      }
      &.react-select__option--is-focused {
        box-shadow: inset 0 0 0 1px rgba(61, 178, 215, 0.8);
        background: inherit;
      }
      &:hover {
        background-color: ${Colors.secondaryLight};
      }
      &.react-select__option--is-selected {
        background-color: ${Colors.secondary};
        cursor: default;
        position: relative;
        .react-select__check-ico {
          display: block;
        }
      }
    }
  }
  .react-select__option.react-select__location-wrap {
    padding-left: 35px;
    .react-select__location-icon {
      display: block;
      position: absolute;
      top: 50%;
      left: 15px;
      margin: -11px 0 0;
    }
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background-color: ${Colors.white};
      color: ${Colors.primaryDark};
      * {
        fill: ${Colors.primaryDark};
      }
    }
  }
  .react-select-creatable {
    &__option {
      padding-left: 48px;
      cursor: pointer;
      .react-select-creatable__check-block {
        width: 18px;
        height: 18px;
        border: 1px solid ${Colors.gray700};
        top: 50%;
        left: 16px;
        display: block;
        position: absolute;
        margin: -9px 0 0;
        padding: 2px;
        svg {
          margin: 2px 0 0 0;
          display: none;
        }
      }
      &.react-select-creatable__option--is-focused,
      &.react-select-creatable__option--is-selected {
        background-color: ${Colors.white};
      }
      &.react-select-creatable__option--is-selected {
        .react-select-creatable__check-block {
          svg {
            display: block;
          }
        }
      }
    }
  }
`;

export const ColorMarkOption = styled.span<{ $color?: string }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${({ $color }) => $color};
  ${({ $color }) => $color && $color.toLowerCase() === '#ffffff' && `border: 1px solid ${Colors.gray250};`};
  flex-shrink: 0;
`;

export const OptionTextStyled = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
