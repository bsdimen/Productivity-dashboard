import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import logo from "../../ASSETS/logo.svg"

import graph_icon from "../../ASSETS/graph-icon.svg";
import timer_icon from "../../ASSETS/timer-icon.svg";
import task_icon from "../../ASSETS/task-icon.svg";
import logout_icon from "../../ASSETS/logout-icon.svg";
import side_bar from "../../ASSETS/sidebar-left-icon.svg";
import Dashboard from '../../PAGES/dashboard';





const SideNavBar = () => {
    const [isNavTitleVisible, setIsNavTitleVisible] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    if (isNavTitleVisible){
        setIsNavTitleVisible(false);
    }
    else {
        setIsNavTitleVisible(true);
    }
    
  };
    return (
        <div className='body'>
             <div className='navbar'>
                <header>
                    <div className='logo-container'>
                        <img className="logo" src={logo} />
                    </div>
                    <nav>
                        <NavLink className="nav-link" to="/dashboard"><img src={graph_icon}/>{isNavTitleVisible && <span>Dashboard</span>}</NavLink>
                        <NavLink className="nav-link" to="/promodo"><img src={timer_icon}/>{isNavTitleVisible && <span>Promodo</span>}</NavLink>
                        <NavLink className="nav-link" to="/tasks"><img src={task_icon}/>{isNavTitleVisible && <span>Tasks</span>}</NavLink>
                        <NavLink className="nav-link" to="/logout"><img src={logout_icon}/>{isNavTitleVisible && <span>Logout</span>}</NavLink>
                    </nav>

                    <button className='sideBar-btn' onClick={handleButtonClick}><img src={side_bar}/></button>
                </header>
             </div>
             <section>
                <Outlet />
             </section>
        </div>
       
    );
}

export default SideNavBar;
