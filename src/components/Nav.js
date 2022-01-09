import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
     <div className="nav-bar">
     <ul>
     <li><NavLink end to="/about"><div className='link'>About</div></NavLink></li>
      <li><NavLink to="/projects"><div className='link'>Projects</div></NavLink></li>
      <li><NavLink to="/blog"><div className='link'>Blog</div></NavLink></li>
      <li><NavLink to="/skills"><div className='link'>Skills</div></NavLink></li>
      <li><NavLink to="/contact"><div className='link'>Contact</div></NavLink></li>
     </ul>

      </div>
      )
    }
    
export default Nav;