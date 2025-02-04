import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Nickname from "./routes/Nickname";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nickname" element={<Nickname />} />
    </Routes>
  );
}

export default App;
