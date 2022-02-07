import React, { useContext } from "react";
import { NewContext } from "../../context/NewContext";
import { Card, CardButton, CardHeader, CardDescription, CardLinks, Container } from '../home/HomeStyle';

let itemColor = "blue";
const colorDict = {
    "AQ": "aqua",
    "BL": "blue",
    "BR": "brown",
    "GO": "gold",
    "GE": "green",
    "OR": "orange",
    "PI": "pink",
    "PU": "purple",
    "RE": "red",
    "VI": "violet",
}

const View = () => {
  const { tree, links } = useContext(NewContext);
//   console.log("tree: ", tree);
//   console.log("links: ", links);

  itemColor = colorDict[tree?.tree_color];

  return (
      <Container>
        <Card>
        <CardHeader>{tree?.tree_title}</CardHeader>
        <CardDescription>{tree?.tree_description}</CardDescription>
        <CardLinks>
            {links?.map((i) => {
                return (<CardButton key={i.id} href={i.link_url} itemColor={itemColor}>
                    {i.link_title}
                </CardButton>)
            })}
        </CardLinks>
        </Card>
      </Container>
  );
};

export default View;