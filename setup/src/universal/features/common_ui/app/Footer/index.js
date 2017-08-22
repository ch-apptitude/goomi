/**
*
* Footer
*
*/

import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Logo from 'components/ui/Logo';
import Text from 'components/ui/Text';

import messages from './messages';

const FooterContainer = styled(Row)`
  background-color: white;
  padding: 0 0 70px 0;
  border-top: solid 1px #efecea;
`;

const FooterCopyright = styled(Text)`
  margin-top: 20px;
`;

const Footer = ({ intl }) => (
  <FooterContainer tagName="footer">
    <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
      <Row>
        <Col xs={6} sm={3}>
          <Logo />
          <FooterCopyright domElement="h2" size="text" color="black_light">
            Copyright {intl.formatDate(new Date(2017, 8, 1), { year: 'numeric', month: 'long' })}
          </FooterCopyright>
        </Col>
      </Row>
    </Col>
  </FooterContainer>
);

Footer.defaultProps = {};

Footer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
