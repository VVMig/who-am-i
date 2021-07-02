import React, { useRef, useState } from 'react';

import { Transition } from 'react-transition-group';

import { Portal } from '../portal';
import { ModalProps } from './interfaces';
import { defaultDelay, Styled } from './styled';

export const Modal: React.FC<ModalProps> = ({
  children,
  closeIcon,
  className,
  handleModalClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const isModalTarget = (event: React.MouseEvent) =>
    event.target === modalRef.current ||
    modalRef.current?.contains(event.target as Node);

  const closeModal: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) handleModalClose();
    event.stopPropagation();
  };

  const toggleButtonLight: React.MouseEventHandler = (event) => {
    if (!isModalTarget(event)) setIsButtonHighlighted(true);
    else setIsButtonHighlighted(false);
  };

  return (
    <>
      <Portal>
        <Styled.ModalWrapper
          onClick={closeModal}
          onMouseOver={toggleButtonLight}
        >
          <Styled.CloseButton isToggleColorized={isButtonHighlighted}>
            {closeIcon || <>&times;</>}
          </Styled.CloseButton>
          <Transition in={true} timeout={defaultDelay}>
            {(state) => (
              <Styled.Modal className={`${className} ${state}`} ref={modalRef}>
                {children}
              </Styled.Modal>
            )}
          </Transition>
        </Styled.ModalWrapper>
      </Portal>
    </>
  );
};
