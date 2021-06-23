import React from 'react';

import { Transition } from 'react-transition-group';

import { DropdownItem } from './interfaces';
import { Styled } from './styled';

interface Props {
  isShow: boolean;
  dropdownItems: DropdownItem[];
}

export const Dropdown: React.FC<Props> = ({ isShow, dropdownItems }) => {
  return (
    <Transition in={isShow} timeout={200} unmountOnExit>
      {(state) => (
        <Styled.Dropdown className={state}>
          {dropdownItems.map((item, index) => (
            <Styled.DropdownItem
              key={`${item.text}-${index}`}
              onClick={item.onClickHandler}
            >
              {item.text}
            </Styled.DropdownItem>
          ))}
        </Styled.Dropdown>
      )}
    </Transition>
  );
};
