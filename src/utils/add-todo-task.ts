import { Task } from '@/types/todos';

type InitTask = { description: string } & Partial<
  Omit<Task, 'description' | 'id'>
>;

const addTodoTask = ({
  description,
  isCompleted = false,
  isEditing = false,
}: InitTask): Task => {
  const task: Task = {
    id: Math.random(),
    description,
    created: Date.now(),
    isCompleted,
    isEditing,
  };

  return task;
};
export default addTodoTask;
