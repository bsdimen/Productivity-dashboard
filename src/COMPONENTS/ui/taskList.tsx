import { Task } from "./Prefabs/prefabs";

interface taskListParams {
    title: string;
    desc: string;
}
const TaskList = (list: taskListParams) => {
    return (
        <div className='taskList-container'>
            <div className='taskList-heading'>
                <h3>{list.title}</h3>
                <p>{list.desc}</p>
            </div>
            <div className="tasks">
                <Task />
            </div>
            <h4></h4>

        </div>
    );
}

export default TaskList;
