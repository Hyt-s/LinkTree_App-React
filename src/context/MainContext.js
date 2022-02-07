import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MainContext = createContext();

function MainContextProvider(props) {
  const [treesData, setTreesData] = useState();
  const [linksData, setLinksData] = useState();
  
  const getTreesData = () => {
      axios.get("https://link-tree-app.herokuapp.com/linktree/")
      .then((response) => {
        //   console.log("response: ", response);
          setTreesData(response.data)
      }).catch((error) => {
          alert("An error occurred, please reload!", error);
      })
  };

  const getLinksData = () => {
      axios.get("https://link-tree-app.herokuapp.com/links/")
      .then((response) => {
        //   console.log("response: ", response);
          setLinksData(response.data)
      }).catch((error) => {
          alert("An error occurred, please reload!", error);
      })
  };

  useEffect(() => {
      getTreesData();
      getLinksData();
  }, [])

  return (
    <MainContext.Provider value={{ treesData, linksData }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;