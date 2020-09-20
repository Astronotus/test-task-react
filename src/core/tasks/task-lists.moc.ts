import { TasksListDto } from './tasks-list.dto';
import { TaskModel } from './task.model';

export const tasksLists: TasksListDto[] = [
  new TasksListDto({
    listType: 'income',
    tasks: [
      new TaskModel({ id: 0, text: 'Job', isLocked: false, whenCreated: 7 }),
      new TaskModel({ id: 1, text: 'Investments', isLocked: false, whenCreated: 34 })
    ]
  }),
  new TasksListDto({
    listType: 'expenses',
    tasks: [
      new TaskModel({ id: 0, text: 'Refilling the car', isLocked: false, whenCreated: 1 }),
      new TaskModel({ id: 1, text: 'Rent', isLocked: false, whenCreated: 13 }),
      new TaskModel({ id: 2, text: 'Purchases', isLocked: false, whenCreated: 16 }),
      new TaskModel({ id: 3, text: 'Donations', isLocked: false, whenCreated: 42 }),
      new TaskModel({ id: 4, text: 'Car fines', isLocked: true, whenCreated: 53 })
    ]
  }),
  new TasksListDto({
    listType: 'savings',
    tasks: [
      new TaskModel({ id: 0, text: 'Drove past McDonald', isLocked: false, whenCreated: 3 }),
      new TaskModel({ id: 1, text: 'Sewed up the hole in the toe', isLocked: false, whenCreated: 17 }),
      new TaskModel({ id: 2, text: 'Used the tea bag twice', isLocked: false, whenCreated: 34 })
    ]
  }),
  new TasksListDto({
    listType: 'debt',
    tasks: []
  }),
  new TasksListDto({
    listType: 'goals',
    tasks: [
      new TaskModel({ id: 0, text: 'Bought shares successfully', isLocked: false, whenCreated: 12 }),
    ]
  }),
  new TasksListDto({
    listType: 'emergency',
    tasks: []
  }),
];
