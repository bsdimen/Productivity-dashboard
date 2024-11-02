import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Logo } from "../../COMPONENTS/ui/icons"

import { GraphIcon, TimerIcon, TaskIcon, LogOutIcon, SideBarLeftIcon, ChevronDownIcon } from "../../COMPONENTS/ui/icons";

import useGetAllFrames from '../../HOOKS/FRAMEWORKS/useGetAllFrames';





const SideNavBar = () => {
    const [isNavTitleVisible, setIsNavTitleVisible] = useState(false);
    const { mutate, frameworks } = useGetAllFrames();


    // Function to handle button click
    const handleButtonClick = () => {
        if (isNavTitleVisible) {
            setIsNavTitleVisible(false);
        }
        else {
            setIsNavTitleVisible(true);
        }

    };

    useEffect(() => {
        mutate();
        console.log(frameworks);
    }, [])
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
                        <NavLink className="nav-link" to="/framework"><TaskIcon />{isNavTitleVisible && <span className='link-icon'><span>Frameworks</span> <ChevronDownIcon /></span>}</NavLink>
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
