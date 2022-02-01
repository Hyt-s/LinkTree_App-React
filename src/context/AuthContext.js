import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [currentData, setCurrentData] = useState();

//   useEffect(() => {
//     userObserver(setCurrentUser);
//   }, []);

  return (
    <AuthContext.Provider value={{ currentData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;