import { Button, Col, Divider, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch, IRootDispatch, IRootState, state } from 'src/stores/rematch/root-store';

interface ICounterTaskViewProps {
  count: typeof state.counterStore.count;
  updateCount: typeof dispatch.counterStore.updateCount;
  tasks: typeof state.taskStore.tasks;
  setTasks: typeof dispatch.taskStore.setTasks;
  doFetchAllTasks: typeof dispatch.taskStore.doFetchAllTasks;
}

interface ICounterTaskState {
  cartItem: number;
}

class CounterTaskView extends Component<ICounterTaskViewProps, ICounterTaskState> {
  state = {
    cartItem: 0,
  };

  private _updateCartItem = (amount: number) => {
    this.setState({ cartItem: this.state.cartItem + amount });
  };

  componentDidMount = async () => {
    await this.props.doFetchAllTasks();
  };

  render() {
    const { count, updateCount, tasks } = this.props;

    return (
      <>
        <h1>Tasks</h1>
        <pre>{JSON.stringify(tasks, null, 2)}</pre>

        <Divider />

        <h1>Counter: {count}</h1>
        <Button type="primary" onClick={() => updateCount(1)}>
          Increase
        </Button>
        <Button onClick={() => updateCount(-1)}>Decrease</Button>

        <Divider />

        <h1>Cart item: {this.state.cartItem}</h1>
        <Button type="primary" onClick={() => this._updateCartItem(1)}>
          Add
        </Button>
        <Button onClick={() => this._updateCartItem(-1)}>Remove</Button>
      </>
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
  doFetchAllTasks: dispatch.taskStore.doFetchAllTasks
});

export default connect(
  mapState,
  mapDispatch
)(CounterTaskView);
