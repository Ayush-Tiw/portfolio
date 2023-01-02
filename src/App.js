import logo from "./logo.svg";
import "./App.css";
import { AboutMe } from "./AboutMe";
import { SkillList } from "./SkillList";
import { Project } from "./Project";
import { Personal } from "./Personal";
import { Resume } from "./Resume";

function App() {
  return (
    <div className="app-container">
      <AboutMe />
      <SkillList />
      <Personal/>
    </div>
  );
}


export default App;
