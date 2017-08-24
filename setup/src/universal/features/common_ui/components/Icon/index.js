/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import Theme from 'assets/theme';

import iconList from './icon-list';

injectGlobal`
  @font-face {
    font-family: 'typicons';
    font-weight: normal;
    font-style: normal;
    src: url('assets/fonts/icon/typicons.eot');
    src: url('assets/fonts/icon/typicons.eot?#iefix') format('embedded-opentype'),
        url('assets/fonts/icon/typicons.woff') format('woff'),
        url('assets/fonts/icon/typicons.ttf') format('truetype'),
        url('assets/fonts/icon/typicons.svg#typicons') format('svg');
  }
`;

const Icon = styled.span`
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  height: 1em;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: ${props => props.color || Theme.Colors.primary};
  :before { 
    content: ${props => props.icon};
  }
`;

export const iconProps = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(iconList)).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.propTypes = iconProps;

export default Icon;
