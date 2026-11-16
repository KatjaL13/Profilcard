import { NavLink } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <div className="sidebar-logo">
        <img className="sidebar-logo-image" src="./devkarriere.png" alt="" />
      </div>
      <div className="sidebar-links">
        <NavLink to="/overview">Übersicht</NavLink>
        <NavLink to="/create">Erstellen</NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;
