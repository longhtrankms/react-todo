import { init } from '@rematch/core';
import counterStore from './rematch/models/counter.store';
import taskStore from './rematch/models/task-store';

const models = {
  counterStore,
  taskStore,
};

const rootStore = init({
  models
});

export default rootStore;
