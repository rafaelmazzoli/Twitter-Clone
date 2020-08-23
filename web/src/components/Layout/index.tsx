import React from 'react';

import { Container, Wrapper } from './styles';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar></MenuBar>
        <Main></Main>
        <SideBar></SideBar>
      </Wrapper>
    </Container>
  );
};

export default Layout;
