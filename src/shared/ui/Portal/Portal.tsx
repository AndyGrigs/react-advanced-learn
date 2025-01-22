import React from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}

export const Portal = (PortalProps: PortalProps) => {
    const { children, element = document.body } = PortalProps;

    return createPortal(children, element);
};
