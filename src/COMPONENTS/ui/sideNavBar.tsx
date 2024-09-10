import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Logo } from "../../COMPONENTS/ui/icons"

import { GraphIcon } from "../../COMPONENTS/ui/icons";
import { TimerIcon } from "../../COMPONENTS/ui/icons";
import { TaskIcon } from "../../COMPONENTS/ui/icons";
import { LogOutIcon } from "../../COMPONENTS/ui/icons";
import { SideBarLeftIcon } from "../../COMPONENTS/ui/icons";
import Dashboard from '../../PAGES/dashboard';





const SideNavBar = () => {
    const [isNavTitleVisible, setIsNavTitleVisible] = useState(false);

    // Function to handle button click
    const handleButtonClick = () => {
        if (isNavTitleVisible) {
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
                        <Logo />
                    </div>
                    <nav>
                        <NavLink className="nav-link" to="/dashboard"><GraphIcon />{isNavTitleVisible && <span>Dashboard</span>}</NavLink>
                        <NavLink className="nav-link" to="/promodo"><TimerIcon />{isNavTitleVisible && <span>Promodo</span>}</NavLink>
                        <NavLink className="nav-link" to="/framework"><TaskIcon />{isNavTitleVisible && <span>Tasks</span>}</NavLink>
                        <NavLink className="nav-link" to="/logout"><LogOutIcon />{isNavTitleVisible && <span>Logout</span>}</NavLink>
                    </nav>

                    <button className='sideBar-btn' onClick={handleButtonClick}><SideBarLeftIcon /></button>
                </header>
            </div>
            <section>
                <Outlet />
            </section>
        </div>

    );
}

export default SideNavBar;
