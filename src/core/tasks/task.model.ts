export class TaskModel {
  id: number;
  text: string;
  isLocked: boolean;
  whenCreated: number;

  constructor(data?: TaskModel) {
    if (data) {
      this.id = data.id;
      this.text = data.text;
      this.isLocked = data.isLocked;
      this.whenCreated = data.whenCreated;
    }
  }
}
