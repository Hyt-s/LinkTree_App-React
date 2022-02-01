import React from 'react';
import { Card, CardButton, CardHeader, CardDescription } from './HomeStyle';

const Cards = ({ item }) => {
  // console.log(item)

  return (
    <Card color = {item.color}>
      <CardHeader>{item.title}</CardHeader>
      <CardDescription>{item.description}</CardDescription>
      {item.links.map((link) => {
          <CardButton color={item.color}>{link}</CardButton>
      })}
    </Card>
  );
};

export default Cards;