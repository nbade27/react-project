
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CodingSkills from "./components/coding-skills/CodingSkills";
import MenuBar from "./components/MenuBar";
import University from "./components/universities/University";
import Home from "./components/Home";

export default function App() {

  return (
    <>
      <Router>
        <MenuBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/universities" element={<University />} />
          <Route path="/codingskills" element={< CodingSkills />} />
        </Routes>
      </Router>
    </>
  );
}
