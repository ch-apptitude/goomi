/**
*
* RoundedIcon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Icon, { iconProps } from 'features/common_ui/components/Icon';

const Rounded = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props.backgroundColor};
  color: ${props => props.color};
  box-sizing: border-box;
  position: relative;
`;

const StyledIcon = Icon.extends`
  font-size: ${props => `calc(${props.size}px - ${Math.abs(props.size / 2)}px;`}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RoundedIcon = ({ size, color, backgroundColor, className, black, icon }) => {
  return (
    <Rounded className={className} size={size} backgroundColor={backgroundColor}>
      <StyledIcon icon={icon} color={color} size={size}/>
    </Rounded>
  );
};

RoundedIcon.propTypes = {
  ...iconProps,
  size: PropTypes.number,
  black: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.oneOf(['white', 'grey', 'green', 'orange']),
};

RoundedIcon.defaultProps = {
  size: 130,
  color: Theme.Colors.primary,
  backgroundColor: 'rgba(230, 227, 225, 0.5)',
};

export default RoundedIcon;
