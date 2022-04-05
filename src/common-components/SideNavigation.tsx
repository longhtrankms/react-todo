import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavigation extends Component<any, any> {
  render() {
    return (
      <Menu mode="horizontal">
        <div
          className="flex"
          style={{
            gap: '1rem'
          }}
        >
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/about">About</Link>
        </div>
      </Menu>
    );
  }
}

export default SideNavigation;
