import React from 'react';

import ReactDOM from 'react-dom';

interface Props {
  rootId?: string;
}

export const Portal: React.FC<Props> = ({ children, rootId = 'app' }) => {
  const root = document.getElementById(rootId);

  return root && ReactDOM.createPortal(<>{children}</>, root);
};
