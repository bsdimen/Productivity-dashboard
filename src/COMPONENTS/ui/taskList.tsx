import { Task } from "./Prefabs/prefabs";
import { AddTaskBtn } from "./Prefabs/prefabs";

interface taskListParams {
    title: string;
    desc: string;
}
const TaskList = (list: taskListParams) => {
    const params = { title: "task title for test", desc: "task desc for test" }
    return (
        <div className='taskList-container'>
            <div className='taskList-heading'>
                <h3>{list.title}</h3>
                <p>{list.desc}</p>
            </div>
            <div className="tasks">
                <Task {...params} />
                <AddTaskBtn />
            </div>
            <h4></h4>

        </div>
    );
}

export default TaskList;
