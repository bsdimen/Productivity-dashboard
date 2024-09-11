import React from 'react';
import { InfoIcon } from "../icons";
import { AddCircleIcon } from '../icons';



interface taskParams {
    title: string,
    desc: string,

}
export const Task = (T: taskParams) => {
    return <div className='task-container'>
        <h4>{T.title}</h4>
        <p>{T.desc}</p>
    </div>
}
export const AddTaskBtn = () => {
    return <form className='addTaskBtn'>
        <button type='submit'><AddCircleIcon /></button>
        <input className='addTaskInput' placeholder='Add New Task' />
    </form>
}


