import React from 'react';

import { Transition } from 'react-transition-group';

import { DropdownItem } from './interfaces';
import { Styled } from './styled';

interface Props {
  isShow: boolean;
  dropdownItems: DropdownItem[];
  onCloseDropdown: () => void;
}

export const Dropdown: React.FC<Props> = ({
  isShow,
  dropdownItems,
  onCloseDropdown,
}) => {
  const onClickDropdownItem = (onClickItem?: () => void) => {
    if (onClickItem) {
      onClickItem();
    }

    onCloseDropdown();
  };

  return (
    <Transition in={isShow} timeout={200} unmountOnExit>
      {(state) => (
        <Styled.Dropdown className={state}>
          {dropdownItems.map((item, index) => (
            <Styled.DropdownItem
              key={`${item.text}-${index}`}
              onClick={() => onClickDropdownItem(item.onClickHandler)}
            >
              {item.text}
            </Styled.DropdownItem>
          ))}
        </Styled.Dropdown>
      )}
    </Transition>
  );
};
