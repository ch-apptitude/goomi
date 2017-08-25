/**
*
* Footer
*
*/

import React from 'react';
import { Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const FooterContainer = styled(Row)`
  background-color: white;
`;

const Footer = () => <FooterContainer tagName="footer" />;

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
