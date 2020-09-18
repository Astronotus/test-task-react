export class TaskModel {
  id: number;
  text: string;
  whenCreated: number;

  constructor(data?: TaskModel) {
    if (data) {
      this.id = data.id;
      this.text = data.text;
      this.whenCreated = data.whenCreated;
    }
  }
}
