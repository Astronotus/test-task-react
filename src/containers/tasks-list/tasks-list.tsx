import React from 'react';
import { taskLists } from '../../core/tasks/task-lists.moc';
import { TaskListDto } from '../../core/tasks/task-list.dto';
import { useParams } from 'react-router';
import Task from '../../components/task/task';

const TasksList: React.FC = () => {

  const { page } = useParams();
  const list: TaskListDto = taskLists.find(e => e.listType === page);

  return (
    <div>
      {list ? list.tasks.map(e => <Task/>) : null}
    </div>
  );
};

export default TasksList;
