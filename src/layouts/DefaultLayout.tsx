import { Component } from 'react';
import SideNavigation from '../common-components/SideNavigation';

interface IDefaultLayoutProps {
  children?: any;
}

class DefaultLayout extends Component<IDefaultLayoutProps, any> {
  render() {
    const { children } = this.props;

    return (
      <>
        <SideNavigation />

        {children}
      </>
    );
  }
}

export default DefaultLayout
