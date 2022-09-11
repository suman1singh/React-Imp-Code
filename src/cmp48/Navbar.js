import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="nvr">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/"
          >
            Home{" "}
          </NavLink>
          <br />
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/career"
          >
            Career{" "}
          </NavLink>
          <br />
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/contact"
          >
            Contact{" "}
          </NavLink>
          <br />
        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/filter"
          >
            Filter
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/kdchbvrejyhvb"
          >
            Random NavLink
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "blue" : "" };
            }}
            className="nvr-NavLink"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
