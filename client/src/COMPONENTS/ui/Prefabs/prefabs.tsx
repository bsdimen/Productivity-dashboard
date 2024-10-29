import React from 'react';
import { InfoIcon } from "../icons";
import { AddCircleIcon } from '../icons';



interface TaskTimeParams {
    time?: string;
    type?: string
}
interface taskParams {
    title: string,
    desc: string,
    timeReq?: TaskTimeParams,
    timeDone?: TaskTimeParams,
    timeRest?: TaskTimeParams

}

export const TaskTime = (p: TaskTimeParams) => {

    return (<div className={"time-block " + `${(p.type)}`}>
        <span>{`${(p.time)}` + " "}</span>
        <span>{`${(p.type)}`}</span>
    </div>)

}
export const Task = (T: taskParams) => {
    return <div className='task-container'>
        <div className='task-heading'>
            <h4>{T.title}</h4>
            <p>{T.desc}</p>
        </div>
        {/* <div className='task-details'>
            <TaskTime {...T.timeDone} />
            <TaskTime {...T.timeReq} />
            <TaskTime {...T.timeRest} />


        </div> */}

    </div>
}
export const AddTaskBtn = () => {
    return <form className='addTaskBtn'>
        <button type='submit'><AddCircleIcon /></button>
        <input className='addTaskInput' placeholder='Add New Task' />
    </form>
}


