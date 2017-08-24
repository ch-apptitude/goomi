/**
*
* RegisterSuccess
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import HOCAuth from 'features/user/hoc/HOCAuth';
import HOCRedirect from 'features/routing/hoc/HOCRedirect';

import { UserPropTypes, USER_STATUS } from 'features/user/constants';
import Box from 'features/common_ui/components/Box';
import Text from 'features/common_ui/components/Text';
import { GreenButton } from 'features/common_ui/components/Button';
import Theme from 'assets/theme';

import messages from './messages';

const StyledRegisterSuccess = styled.div`
  height: 100%;
  width: 100%;
  .title {
    margin-bottom: 30px;
  }
  .continue {
    margin-top: 30px;
  }
`;

const RegisterSuccess = ({ user }) => (
  <StyledRegisterSuccess>
    {user && (
      <Box>
        <Row>
          <Col xs={12}>
            <Text className="title" tag="h1" size={Theme.Metrics.title} message={messages.success} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Text tag="p" message={messages.body} values={{ email: user.email }} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={4}>
            <GreenButton
              className="continue"
              linkTo="/register/user-infos"
              message={messages.continue}
            />
          </Col>
        </Row>
      </Box>
    )}
  </StyledRegisterSuccess>
);

RegisterSuccess.propTypes = {
  user: UserPropTypes,
};

RegisterSuccess.defaultProps = {
  user: undefined,
};

export default HOCAuth(HOCRedirect(RegisterSuccess, USER_STATUS.LOGGED_IN));
