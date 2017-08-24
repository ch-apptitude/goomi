/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({className}) => <svg className={className}/>;

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo;
