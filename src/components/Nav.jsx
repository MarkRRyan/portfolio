import { Link } from "react-router-dom";
import { useState } from 'react';

const Nav = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
    // Toggle sidebar visibility
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <div className="app">
        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
  
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/"><div>Home</div></Link></li>
            <li><Link to="/about"><div>About</div></Link></li>
            <li><Link to="/projects"><div>Projects</div> </Link></li>
            <li><Link to="/skills"><div>Skills</div></Link></li>
          </ul>
        </div>
      </div>

    );
}

export default Nav