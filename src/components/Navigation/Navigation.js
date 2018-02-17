import React from 'react';
import styled from 'styled-components';
//
import Wrap from './styled/Wrap';
import Inner from './styled/Inner';
import Link from '../Link';
import { Logo } from '../icons';

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;

  li {
    margin-right: 30px;
  }

  li:last-child {
    margin-right: 0;
  }
`;

const navItems = ['nieuws', 'over-ons', 'workshops', 'inschrijven', 'partners', 'contact'];

const Navigation = ({ isHome }) => (
  <Wrap>
    <Inner>
      <Link to="/">
        <Logo width={120} height={36} />
      </Link>
      <NavList>
        {navItems.map(item => (
          <li key={item}>
            <Link color={isHome ? '#fff' : '#222'} to={`/${item}`}>
              {item.replace('-', ' ')}
            </Link>
          </li>
        ))}
      </NavList>
    </Inner>
  </Wrap>
);

export default Navigation;
