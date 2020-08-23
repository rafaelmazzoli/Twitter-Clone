import React from 'react';

import {
  Container,
  Retweeted,
  TweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TweetIcon></TweetIcon> Você retweetou
      </Retweeted>

      <Body>
        <Avatar></Avatar>

        <Content>
          <Header>
            <strong>Lucas Câmara</strong>
            <span>@lucas_camara</span>
            <Dot></Dot>
            <time>22 de ago</time>
          </Header>

          <Description>Finalizei meu TCC!!!</Description>

          <ImageContent></ImageContent>

          <Icons>
            <Status>
              <CommentIcon></CommentIcon>
              18
            </Status>
            <Status>
              <RetweetIcon></RetweetIcon>
              18
            </Status>
            <Status>
              <LikeIcon></LikeIcon>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
