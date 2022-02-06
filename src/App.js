import AppRouter from "./router/Router";
import "./App.css";
import MainContextProvider from "./context/MainContext";
import NewContextProvider from "./context/NewContext";

function App() {
  return (
    <MainContextProvider>
      <NewContextProvider>
        <AppRouter />
      </NewContextProvider>
    </MainContextProvider>
  );
};

export default App;
