import { Button, Divider } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch, IRootDispatch, IRootState, state } from 'store/rematch/root-store';
import TaskListing from './listing/TaskListing';
import AddTaskModal from './modal/AddTaskModal';

interface ICounterTaskViewProps {
  count: typeof state.counterStore.count;
  updateCount: typeof dispatch.counterStore.updateCount;
  tasks: typeof state.taskStore.tasks;
  setTasks: typeof dispatch.taskStore.setTasks;
  doFetchAllTasks: typeof dispatch.taskStore.doFetchAllTasks;
  doAddTask: typeof dispatch.taskStore.doAddTask;
}

interface ICounterTaskState {
  cartItem: number;
  isAddTaskModalVisible: boolean;
}

class CounterTaskView extends Component<ICounterTaskViewProps, ICounterTaskState> {
  state = {
    cartItem: 0,
    isAddTaskModalVisible: false
  };

  private _updateCartItem = (amount: number) => {
    this.setState({ cartItem: this.state.cartItem + amount });
  };

  private _openAddTaskModal = async () => {
    await this.props.doAddTask({ title: 'test', time: 'idk' });
    // this.setState({ isAddTaskModalVisible: true });
  };

  private _closeAddTaskModal = () => {
    this.setState({ isAddTaskModalVisible: false });
  };

  componentDidMount = async () => {
    await this.props.doFetchAllTasks();
  };

  render() {
    const { count, updateCount, tasks } = this.props;

    return (
      <div className="flex p-medium">
        <div className="flex-column align-center">
          <AddTaskModal isModalVisible={this.state.isAddTaskModalVisible} onCancelModal={this._closeAddTaskModal} />

          <Divider />

          <Button onClick={this._openAddTaskModal}>Add+</Button>

          <TaskListing tasks={tasks} />

          {/* <h1>Counter: {count}</h1>
        <Button type="primary" onClick={() => updateCount(1)}>
          Increase
        </Button>
        <Button onClick={() => updateCount(-1)}>Decrease</Button> */}

          {/* <Divider />

        <h1>Cart item: {this.state.cartItem}</h1>
        <Button type="primary" onClick={() => this._updateCartItem(1)}>
          Add
        </Button>
        <Button onClick={() => this._updateCartItem(-1)}>Remove</Button> */}
        </div>
      </div>
    );
  }
}

const mapState = (state: IRootState) => ({
  count: state.counterStore.count,
  tasks: state.taskStore.tasks
});

const mapDispatch = (dispatch: IRootDispatch) => ({
  updateCount: dispatch.counterStore.updateCount,
  setTasks: dispatch.taskStore.setTasks,
  doFetchAllTasks: dispatch.taskStore.doFetchAllTasks,
  doAddTask: dispatch.taskStore.doAddTask
});

export default connect(mapState, mapDispatch)(CounterTaskView);
