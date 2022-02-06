import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MainContext = createContext();

function MainContextProvider(props) {
  const [treesData, setTreesData] = useState();
  const [linksData, setLinksData] = useState();
  
  const getTreesData = () => {
      axios.get("https://a2001172-a3b0-41ec-9205-e54280df4ac5.mock.pstmn.io/linktree")
      .then((response) => {
          console.log("response: ", response);
          setTreesData(response.data)
      }).catch((error) => {
          console.log("error: ", error);
      })
  };

  const getLinksData = () => {
      axios.get("https://a2001172-a3b0-41ec-9205-e54280df4ac5.mock.pstmn.io/links")
      .then((response) => {
          console.log("response: ", response);
          setLinksData(response.data)
      }).catch((error) => {
          console.log("error: ", error);
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