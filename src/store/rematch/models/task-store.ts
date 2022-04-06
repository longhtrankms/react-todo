import { dispatch } from '../root-store';

const initialState = {
  tasks: []
};

const taskStore = {
  state: initialState,

  reducers: {
    setTasks: (state, payload) => ({ ...state, tasks: payload })
  },

  effects: (dispatch) => ({
    async doFetchAllTasks() {
      try {
        let res = await fetch('http://localhost:5555/tasks');
        let data = await res.json();

        await dispatch.taskStore.setTasks(data);
        return data;
      } catch (err) {
        throw err;
      }
    }
  })
};

export default taskStore;
