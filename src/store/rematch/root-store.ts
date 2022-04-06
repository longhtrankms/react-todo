import { init, RematchRootState } from '@rematch/core';
import counterStore from './models/counter-store';
import taskStore from './models/task-store';

const models = {
  counterStore,
  taskStore,
};

const rootStore = init({
  models
});

export default rootStore;

export type IRootState = RematchRootState<typeof models>
export type IRootDispatch = typeof rootStore.dispatch

export var state: IRootState;
export var dispatch: IRootDispatch;