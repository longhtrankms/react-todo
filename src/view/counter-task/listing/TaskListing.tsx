import { List } from 'antd';
import { Component } from 'react';

interface ITask {
  id: number;
  title: string;
  time: string;
}

interface ITaskListing {
  tasks: ITask[];
}

class TaskListing extends Component<ITaskListing, any> {
  render() {
    const { tasks } = this.props;

    return (
      <>
        <List
          dataSource={tasks}
          renderItem={(task) => (
            <div className="flex align-center">
              <h2>{task?.id}</h2>

              <div className='p-medium'>
                <h3>{task?.title}</h3>
                <p>{task?.time}</p>
              </div>
            </div>
          )}
        />
      </>
    );
  }
}

export default TaskListing;
