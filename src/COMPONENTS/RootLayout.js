import React  from 'react';
import { NavLink,Outlet } from 'react-router-dom';

export default function RootLayout () {

        return (
            <div>
                <header>
                    <nav>
                    <NavLink to="/"></NavLink>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        );

}


