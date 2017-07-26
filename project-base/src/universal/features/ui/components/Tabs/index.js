/**
*
* Tabs
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RCTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import styles from './styles.scss';

const Tabs = ({ children, defaultActiveKey, small }) => (
  <div className={small && styles.Tabs_Small}>
    <RCTabs
      defaultActiveKey={defaultActiveKey}
      renderTabContent={() => <TabContent animatedWithMargin />}
      renderTabBar={() => <ScrollableInkTabBar />}
    >
      {children}
    </RCTabs>
  </div>
);

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  defaultActiveKey: PropTypes.string,
  small: PropTypes.bool,
};

Tabs.defaultProps = {
  defaultActiveKey: '0',
  small: false,
};

export default Tabs;
