import { useEffect } from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import { useAuth } from '../HOOKS/authContextServ';

const Dashboard = () => {
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            console.log("User is logged in:", user);
        } else {
            console.log("No user is logged in.");
        }
    }, [user]);
    return (
        <div>
            <SideNavBar />
        </div>
    );
}

export default Dashboard;
