import { TasksListDto } from './tasks-list.dto';
import { TaskModel } from './task.model';

export const taskLists: TasksListDto[] = [
  new TasksListDto({
    listType: 'income',
    tasks: [
      new TaskModel({ id: 0, text: 'Job', whenCreated: 7 }),
      new TaskModel({ id: 1, text: 'Investments', whenCreated: 34 })
    ]
  }),
  new TasksListDto({
    listType: 'expenses',
    tasks: [
      new TaskModel({ id: 0, text: 'Refilling the car', whenCreated: 1 }),
      new TaskModel({ id: 1, text: 'Rent', whenCreated: 13 }),
      new TaskModel({ id: 2, text: 'Purchases', whenCreated: 16 }),
      new TaskModel({ id: 3, text: 'Donations', whenCreated: 42 }),
      new TaskModel({ id: 4, text: 'Car fines', whenCreated: 53 })
    ]
  }),
  new TasksListDto({
    listType: 'savings',
    tasks: [
      new TaskModel({ id: 0, text: 'Drove past McDonald', whenCreated: 3 }),
      new TaskModel({ id: 1, text: 'Sewed up the hole in the toe', whenCreated: 17 }),
      new TaskModel({ id: 2, text: 'Used the tea bag twice', whenCreated: 34 })
    ]
  }),
  new TasksListDto({
    listType: 'debt',
    tasks: []
  }),
  new TasksListDto({
    listType: 'goals',
    tasks: [
      new TaskModel({ id: 0, text: 'Bought shares successfully', whenCreated: 12 }),
    ]
  }),
  new TasksListDto({
    listType: 'emergency',
    tasks: []
  }),
];
