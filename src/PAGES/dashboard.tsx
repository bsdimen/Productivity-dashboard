import React from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"

const Dashboard = () => {
    const info = localStorage.getItem("login");
    return (
        <div>
            <SideNavBar />
            <h1>{info}</h1>
        </div>
    );
}

export default Dashboard;
