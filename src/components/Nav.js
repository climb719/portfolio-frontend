import React from 'react';
import { Link } from "react-router-dom";

const Nav = props => {
    return (
     <div className="nav-bar">
     <ul>
     <li><Link end to="/"><div className='link'>Home</div></Link></li>
     <li><Link end to="/about"><div className='link'>About</div></Link></li>
      <li><Link to="/projects"><div className='link'>Projects</div></Link></li>
      <li><Link to="/blog"><div className='link'>Blog</div></Link></li>
      <li><Link to="/skills"><div className='link'>Skills</div></Link></li>
      <li><Link to="/contact"><div className='link'>Contact</div></Link></li>
     </ul>

      </div>
      )
    }
    
export default Nav;