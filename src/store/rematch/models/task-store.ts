import { Task } from 'interface/task-interfaces';

interface ITaskStoreState {
  tasks: Task[];
}

const initialState: ITaskStoreState = {
  tasks: []
};

const taskStore = {
  state: initialState,

  reducers: {
    setTasks: (state, payload) => ({ ...state, tasks: payload }),
  }
};

export default taskStore;
