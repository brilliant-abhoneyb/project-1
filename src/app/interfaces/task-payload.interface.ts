import { TaskInterface } from "./task.interface";

export type TaskPayloadInterface = Omit<TaskInterface, 'id'>;