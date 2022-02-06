import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { Card, CardButton, CardHeader, CardDescription, CardLinks } from './HomeStyle';

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

const Cards = ({ item }) => {
  const { linksData } = useContext(MainContext);
  // console.log("linksData: ", linksData);
  // console.log("item: ", item)

  itemColor = colorDict[item?.tree_color];

  return (
    <Card>
      <CardHeader>{item?.tree_title}</CardHeader>
      <CardDescription>{item?.tree_description}</CardDescription>
      <CardLinks>
        {linksData && linksData.map((i) => {
            if (i.tree === item?.id) {
              return <CardButton key={i.id} href={i.link_url} itemColor={itemColor}>
                  {i.link_title}
              </CardButton>
            }
        })}
      </CardLinks>
    </Card>
  );
};

export default Cards;