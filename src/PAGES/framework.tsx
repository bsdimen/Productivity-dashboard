import React, { useEffect } from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import TaskList from "../COMPONENTS/ui/taskList"
import { getLoggedUser } from "../Services/getLoggedUserServ"
import useCreateFrame from '../HOOKS/FRAMEWORKS/useCreateFrame';
import { useAuth } from '../Services/authContextServ';



const Framework = () => {

    const { user } = useAuth();
    const frame = { title: "title test", description: "test desc", userId: user!.id }

    const { mutate } = useCreateFrame(frame);
    useEffect(() => {
        mutate();
    }, [])







    return (
        <div className='framework-container'>
            <SideNavBar />
            <div className='framework'>
                <div className='framework-wrapper'>
                    <div className='framework-heading'>
                        <h2>Main Space</h2>
                        <p>lorem*5</p>
                    </div>


                    <div className='task-lists'>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Framework;
