import React from 'react';

import ButtonBase from './styled/ButtonBase';

const ButtonPrimary = ButtonBase.extend`
  color: #fbfcfe;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(45deg, #ff3a1f 0%, #f0543f 100%);

  &:hover {
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.24);
    background-image: linear-gradient(45deg, #fa270a 0%, #ff4228 100%);
  }
`;

export default ButtonPrimary;
