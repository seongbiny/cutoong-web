import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Nickname from "./pages/Nickname";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nickname" element={<Nickname />} />
    </Routes>
  );
}

export default App;
