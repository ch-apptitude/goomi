/**
*
* Box
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import Media from 'assets/theme/media';

const Box = styled(({
  borderTop, 
  padding, 
  smPadding, 
  mdPadding, 
  lgPadding, 
  children,
}) => 
  <Grid>{children}</Grid>
)`
  box-sizing: border-box;
  width: 100%;
  display: inline-block;
  background-color: white;
  ${props => props.borderTop && `border-top: solid 1px #efecea;`}
  
  ${Media.xs`
    padding: ${props => Array.isArray(props.padding) ? props.padding.map(pad => `${pad}px`).join(' ') : `${props.padding}px`};
  `}
  ${Media.sm`
    padding: ${props => Array.isArray(props.smPadding) ? props.smPadding.map(pad => `${pad}px`).join(' ') : `${props.smPadding}px`};
  `}
    ${Media.md`
    padding: ${props => Array.isArray(props.mdPadding) ? props.padding.map(pad => `${pad}px`).join(' ') : `${props.mdPadding}px`};
  `}
    ${Media.lg`
    padding: ${props => Array.isArray(props.lgPadding) ? props.padding.map(pad => `${pad}px`).join(' ') : `${props.lgPadding}px`};
  `}
`;

Box.passProps = false;

Box.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  smPadding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  mdPadding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  lgPadding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
};


const DefaultBox = (props) => <Box {...props} padding={5} smPadding={10} mdPadding={20} lgPadding={30} />

export default DefaultBox;

export {
  Box
};
