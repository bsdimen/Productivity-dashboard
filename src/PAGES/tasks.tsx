import React from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import TaskList from "../COMPONENTS/ui/taskList"
import {getLoggedUser} from "../HOOKS/getLoggedUserServ"
import {showTasksList} from "../HOOKS/taskServ"




const user = getLoggedUser();
const tasksList = showTasksList(user.id);
const Tasks = () => {
    return (
        <div className='tasks-container'>
            <SideNavBar />
            <div className='tasks-lists'>
                <h2>The title of the framework</h2>
                <p className='framework-description'>lorem*5</p>
                <div className='tasks'>
                     {/* { console.log(tasksList) } */}
                </div>
                
            </div>
        </div>
    );
}

export default Tasks;
