import React from 'react';
import SideNavBar from "../COMPONENTS/ui/sideNavBar"
import TaskList from "../COMPONENTS/ui/taskList"
import { getLoggedUser } from "../HOOKS/getLoggedUserServ"





const user = getLoggedUser();

const framework = () => {
    const test = { title: "title test", desc: "test desc" }
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
                        <TaskList {...test} />
                        <TaskList {...test} />
                        <TaskList {...test} />
                        <TaskList {...test} />
                        <TaskList {...test} />
                        <TaskList {...test} />
                        <TaskList {...test} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default framework;
