import styled from 'styled-components';
import Link from 'gatsby-link';

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color || '#000'};

  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#222'};
  }
`;

export default LinkStyled;
