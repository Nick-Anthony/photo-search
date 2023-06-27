import { useState } from "react";
import "../styles/TopBar.css";
import { ReactComponent as TopBarIcon } from "../topBarIcon.svg";
import Dropdown from "./Dropdown";

function TopBar() {
  const [name, setName] = useState("");
  return (
    <div className="topBar">
      <TopBarIcon className="icon" />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Query"
      />
      <Dropdown placeholder="Select..." />
      <button>Search</button>
    </div>
  );
}
export default TopBar;
