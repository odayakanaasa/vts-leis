import React from 'react';
import styled from 'styled-components';

import Wrap from './styled/Wrap';
import Main from './styled/Main';
import { ButtonPrimary } from '../Button';
import Navigation from '../Navigation';

import headerImg from '../../assets/header-image.png';

const IntroH1 = styled.h1`
  font-size: 64px;
  width: 400px;
  letter-spacing: -3px;
  line-height: 64px;
`;

const SubH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;

const TextWrap = styled.div`
  margin-left: 80px;
`;

const HomeHeader = () => (
  <Wrap>
    <Navigation isHome />
    <Main>
      <img src={headerImg} alt="intro robot" />
      <TextWrap>
        <IntroH1>Ontdek onze LEIS klas.</IntroH1>
        <SubH2>Lego Education Innovation Studio</SubH2>
        <ButtonPrimary>leer meer</ButtonPrimary>
      </TextWrap>
    </Main>
  </Wrap>
);

export default HomeHeader;
