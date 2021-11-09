import { Tag, Task } from '../types/types';

type State = {
  editedTask: Omit<Task, 'completed' | 'createdAt'>;
  selectedTag: Omit<Tag, 'createdAt'>;
};
