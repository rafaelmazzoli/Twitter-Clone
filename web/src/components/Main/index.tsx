import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ButtonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon></BackIcon>
        </button>
        <ProfileInfo>
          <strong>Rafael Camargo</strong>
          <span>32 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage></ProfilePage>

      <ButtonMenu>
        <HomeIcon></HomeIcon>
        <SearchIcon></SearchIcon>
        <BellIcon></BellIcon>
        <EmailIcon></EmailIcon>
      </ButtonMenu>
    </Container>
  );
};

export default Main;
