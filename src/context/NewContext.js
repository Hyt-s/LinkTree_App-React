import { createContext, useState } from "react";

export const NewContext = createContext();

function NewContextProvider(props) {
  const [tree, setTree] = useState();
  const [links, setLinks] = useState([]);

  return (
    <NewContext.Provider value={{ tree, links, setTree, setLinks }}>
      {props.children}
    </NewContext.Provider>
  );
};

export default NewContextProvider;