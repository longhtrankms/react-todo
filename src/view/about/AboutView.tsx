import { Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch, IRootDispatch, IRootState, state } from 'store/root-store';

interface IAboutViewProps {
  count: typeof state.counterStore.count;
  updateCount: typeof dispatch.counterStore.updateCount;
}

class AboutView extends Component<IAboutViewProps, any> {
  render() {
    const { count, updateCount } = this.props;

    return (
      <>
        <h1>Count: {count}</h1>

        <Button type='primary' onClick={() => updateCount(1)}>Increase</Button>

        <Button onClick={() => updateCount(-1)}>Decrease</Button>
      </>
    );
  }
}

const mapState = (state: IRootState) => ({
  count: state.counterStore.count
});

const mapDispatch = (dispatch: IRootDispatch) => ({
  updateCount: dispatch.counterStore.updateCount
});

export default connect(mapState, mapDispatch)(AboutView);
