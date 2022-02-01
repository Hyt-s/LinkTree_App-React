import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import View from "../components/view/View";
import Build from "../components/build/Build";
import Navbar from "../components/navbar/Navbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="build" element={<Build />} />
        <Route path="view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
