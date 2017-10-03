/**
*
* Icon
*
*/
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import Theme from 'assets/theme';

import iconList from './icon-list';

import typiconsEot from 'assets/fonts/icon/typicons.eot';
import typiconsWoff from 'assets/fonts/icon/typicons.woff';
import typiconsTtf from 'assets/fonts/icon/typicons.ttf';
import typiconsSvg from 'assets/fonts/icon/typicons.svg';

injectGlobal`
  @font-face {
    font-family: 'typicons';
    font-weight: normal;
    font-style: normal;
    src: url(${typiconsEot});
    src: url(${typiconsEot}?#iefix) format('embedded-opentype'),
        url(${typiconsWoff}) format('woff'),
        url(${typiconsTtf}) format('truetype'),
        url(${typiconsSvg}#typicons) format('svg');
  }
`;

const IconStyled = styled.span`
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  position: relative;
  width: 1em;
  height: 1em;
  font-size: 1em;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: ${props => props.color || Theme.Colors.primary};

  &::before {
    content: ${props => `'${iconList[props.icon]}'`};
  }
`;

IconStyled.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconList)).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconStyled;
