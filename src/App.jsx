import { Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import AboutUs from "./pages/AboutUs";
import ScholarShip from "./pages/ScholarShip";
import FundRaiser from "./pages/FundRaiser";
import Efa from "./pages/Efa";
import Operations from "./pages/Operations";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutUs" element={<AboutUs />} /> 
      <Route path="/operations" element={<Operations/>} ></Route>
      <Route path="/donate" element={<Operations />} />
      <Route path="/fundraiser" element={<FundRaiser />} />
      <Route path="/reports" element={<Efa />} />
      <Route path="/scholarship" element={<ScholarShip />} />
    </Routes>
  );
}

export default App;
