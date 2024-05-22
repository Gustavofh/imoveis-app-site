import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../templatesCss/Navbar.css';
import { IconContext } from 'react-icons';
// import git from './git.jpeg'

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSidebarOnMouseLeave = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>         
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} size={25}/>
          </Link>
          <text className='custom-text'>SEU IMÓVEL NA<br/>BLOCO</text>
          {/* <img className='menu-img' src={git} alt="Logo" onClick={showSidebar} style={{ width: '50px', height: 'auto' }}/> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onMouseLeave={closeSidebarOnMouseLeave} >
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose size={15}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
