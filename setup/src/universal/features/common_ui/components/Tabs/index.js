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
import styled from 'styled-components';

const TabContainer = styled.div`
  .rc-tabs-nav {
    height: ${props => props.height}px;
  }

  .rc-tabs-top .rc-tabs-bar {
    border-bottom: none !important;
  }

  .rc-tabs-tab {
    line-height: 30px;
    margin-right: 5px !important;
    border-radius: 2px 2px 0 0;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};

    &.rc-tabs-tab-active {
      background-color: ${props => props.activeBackgroundColor};
      color: ${props => props.activeColor} !important;
    }
  }

  .rc-tabs-nav-container {
    background-color: ${props => props.backgroundContainerColor};
  }

  .rc-tabs-ink-bar {
    opacity: 0;
  }

  .rc-tabs-top .rc-tabs-content-animated .rc-tabs-tabpane {
    height: 100%;
  }
`;

const Tabs = ({ 
  children, 
  defaultActiveKey, 
  className, 
  backgroundContainerColor, 
  activeBackgroundColor, 
  backgroundColor, 
  activeColor, 
  color, 
  height 
}) => (
  <TabContainer 
    className={className} 
    height={height} 
    activeBackgroundColor={activeBackgroundColor} 
    backgroundContainerColor={backgroundContainerColor} 
    backgroundColor={backgroundColor}
    activeColor={activeColor}
    color={color}
  >
    <RCTabs
      defaultActiveKey={defaultActiveKey}
      renderTabContent={() => <TabContent animatedWithMargin />}
      renderTabBar={() => <ScrollableInkTabBar />}
    >
      {children}
    </RCTabs>
  </TabContainer>
);

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  defaultActiveKey: PropTypes.string,
  className: PropTypes.string,
  backgroundContainerColor: PropTypes.string, 
  activeBackgroundColor: PropTypes.string, 
  backgroundColor: PropTypes.string, 
  activeColor: PropTypes.string, 
  color: PropTypes.string, 
  height : PropTypes.number,
};

Tabs.defaultProps = {
  defaultActiveKey: '0',
  backgroundContainerColor: '#f3f1f0', 
  activeBackgroundColor: 'white', 
  backgroundColor: '#e6e2e0', 
  activeColor: '#545352', 
  color: '#e6e2e0', 
  height: 45,
};

export default Tabs;
