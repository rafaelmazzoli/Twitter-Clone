import React from 'react';

import { Container, Item, Tittle } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Tittle>{title}</Tittle>
      </Item>
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
