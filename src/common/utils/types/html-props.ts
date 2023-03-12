import React, { RefObject } from 'react';

type HTMLPropsReact<T> = Omit<React.HTMLProps<T>, 'ref' | 'as' | 'color'>;

export interface HtmlProps<T> extends HTMLPropsReact<T> {
  ref?: ((instance: T) => void) | RefObject<T>;
}
