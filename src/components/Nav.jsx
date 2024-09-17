import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/projects">
        <div>Projects</div> 
      </Link>
      <Link to="/skills">
        <div>Skills</div>
      </Link>
    </div>
  );
};

export default Nav;
