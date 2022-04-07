import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNavigation extends Component<any, any> {
  render() {
    return (
      <div
        className="flex"
        style={{
          gap: '1rem'
        }}
      >
        <Link to="/tasks">Dashboard</Link>

        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default TopNavigation;
