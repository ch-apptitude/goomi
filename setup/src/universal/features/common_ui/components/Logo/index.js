/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Text from 'features/common_ui/components/Text';

const StyledText = styled(Text)`
    margin: 10px 0;
`;

export const Logo = ({ className }) => (
  <StyledText tag="h1" color={Theme.Colors.grey_dark} size={20} className={className} message="GOOMI" />
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
