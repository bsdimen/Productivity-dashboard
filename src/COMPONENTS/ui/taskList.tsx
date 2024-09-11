import { Task } from "./Prefabs/prefabs";
import { AddTaskBtn } from "./Prefabs/prefabs";
import { AddCircleIcon } from '../ui/icons';

interface taskListParams {
    title: string;
    desc: string;
}
const TaskList = (list: taskListParams) => {
    const params = {
        title: 'My Task',
        desc: 'This is a sample task.',
        timeReq: { time: '1 hour', type: 'required' },
        timeDone: { time: '2 hours', type: 'done' },
        timeRest: { time: '1 hour', type: 'rest' }
    };
    return (
        <div className='taskList-container'>
            <div className='taskList-heading'>
                <h3>{list.title}</h3>
                <p>{list.desc}</p>
                <div className="addIcon">
                    <AddCircleIcon />
                </div>
            </div>
            <div className="tasks">
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />
                <Task {...params} />

                <AddTaskBtn />
            </div>
            <h4></h4>

        </div>
    );
}

export default TaskList;
