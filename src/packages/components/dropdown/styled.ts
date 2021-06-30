import styled from 'styled-components';

import { appearStorm } from '../../configs';

const Dropdown = styled.div`
  position: absolute;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  right: 25%;
  top: calc(100% + 5px);
  overflow: hidden;
  max-height: 150px;
  overflow: auto;

  &.entering {
    animation: ${appearStorm} 200ms ease-out both;
  }

  &.entered {
    transition: 100ms ease-out;
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.lightBlue};
  }

  &.exiting {
    animation: ${appearStorm} 200ms ease-out reverse both;
  }

  * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const DropdownItem = styled.div`
  white-space: nowrap;
  padding: 5px 15px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.2s ease;
  }
`;

export const Styled = {
  DropdownItem,
  Dropdown,
};
