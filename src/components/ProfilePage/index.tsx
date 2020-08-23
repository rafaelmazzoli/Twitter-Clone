import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Rafael Camargo</h1>
        <h2>@maz_zoli</h2>

        <p>Fullstack Developer</p>

        <ul>
          <li>
            <LocationIcon></LocationIcon>São Paulo, Brasil
          </li>
          <li>
            <CakeIcon></CakeIcon>Nascido(a) em 25 de setembro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>312</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed></Feed>
    </Container>
  );
};

export default ProfilePage;
