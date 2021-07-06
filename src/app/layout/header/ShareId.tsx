import React, { useState } from 'react';

import { useQueryParams } from '../../hooks';
import { icons } from '../../icons';
import { Styled } from './styled';

export const ShareId = () => {
  const shareId = useQueryParams('id');
  const [isCopied, setIsCopied] = useState(false);

  const onClickClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shareId);
  };

  return (
    <Styled.RoomShareId>
      <Styled.RoomShareIdWrapper>
        {shareId}
        <Styled.Clipboard isCopied={isCopied} onClick={onClickClipboard}>
          {icons.Clipboard}
        </Styled.Clipboard>
      </Styled.RoomShareIdWrapper>
    </Styled.RoomShareId>
  );
};
