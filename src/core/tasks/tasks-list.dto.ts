import { TaskModel } from './task.model';

export class TasksListDto {
  listType: string;
  tasks: TaskModel[];

  constructor(data?: TasksListDto) {
    if (data) {
      this.listType = data.listType;
      this.tasks = data.tasks;
    }
  }
}
