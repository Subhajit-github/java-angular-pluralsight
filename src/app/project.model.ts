import { Task } from "./task.model";

export interface Project {
    id: number;
    name: string;
    description: string;
    tasks: Task[]; // Array of tasks associated with the project. Also can declare as Array<Task>.

}
