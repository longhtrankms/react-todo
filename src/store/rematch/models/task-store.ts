const initialState = {
  tasks: [],
  random: 123
};

const taskStore = {
  state: initialState,

  reducers: {
    setTasks: (state, payload) => ({ ...state, tasks: payload }),

    setNewTask: (state, payload) => ({ tasks: [...state.tasks, payload] })
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
    },

    async doAddTask(payload) {
      try {
        let res = await fetch('http://localhost:5555/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        let data = await res.json();
        dispatch.taskStore.setNewTask(data);
      } catch (err) {
        throw err;
      }
    }
  })
};

export default taskStore;
