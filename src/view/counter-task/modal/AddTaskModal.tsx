import { Modal } from 'antd/lib';
import { Component } from 'react';

interface IAddTaskModalProps {
  isModalVisible: boolean;
  onAddTaskConfirm?: any;
  onCancelModal: any;
}

class AddTaskModal extends Component<IAddTaskModalProps, any> {
  render() {
    const { isModalVisible, onAddTaskConfirm, onCancelModal } = this.props;

    return (
        <Modal title="Add Task" visible={isModalVisible} onOk={onAddTaskConfirm} onCancel={onCancelModal}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    );
  }
}

export default AddTaskModal;
