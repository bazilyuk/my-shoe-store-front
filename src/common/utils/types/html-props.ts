import React, { RefObject } from 'react';
import { Omit } from '@/common/utils/types/omit';

type HTMLPropsReact<T> = Omit<React.HTMLProps<T>, 'ref' | 'as' | 'color'>;

export interface HtmlProps<T> extends HTMLPropsReact<T> {
  ref?: ((instance: T) => void) | RefObject<T>;
}
