/**
*
* RoundedNumber
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import Theme from 'assets/theme';

const Rounded = styled.div`
  border-radius: 50%;
  text-align: center;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.size/2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px; 
  lineHeight: ${props => props.size}px;
`;

const RoundedNumber = ({ value, size, color, backgroundColor }) => (
  <div className={className} color={color} backgroundColor={backgroundColor}>
    <FormattedNumber value={value} />
  </div>
);

RoundedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

RoundedNumber.defaultProps = {
  size: 22,
  color: Theme.Colors.primary,
  backgroundColor: "transparent",
};

export default RoundedNumber;
