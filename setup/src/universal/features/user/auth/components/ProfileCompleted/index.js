/**
*
* ProfileCompleted
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import styled from 'styled-components';

import HOCAuth from 'features/user/hoc/HOCAuth';

import { UserPropTypes } from 'features/user/constants';
import Box from 'features/common_ui/components/Box';
import Text from 'features/common_ui/components/Text';
import { GreenButton } from 'features/common_ui/components/Button';

import messages from './messages';

const StyledProfileCompleted = styled.div`
  height: 100%;
  width: 100%;

  .title {
    margin-bottom: 30px;
  }

  .continue {
    margin-top: 30px;
  }
`;

const ProfileCompleted = ({ user }) => (
  <StyledProfileCompleted>
    {user && (
      <div>
        <Row>
          <Col xs={12}>
            <Text className="title" tag="h1" size={Theme.Metrics.title} message={messages.title} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Text tag="p" message={messages.body} />
          </Col>
        </Row>
        <Row>
          <Col>
            <GreenButton className="continue" linkTo={'/profile'} message={messages.continue} />
          </Col>
        </Row>
      </div>
    )}
  </StyledProfileCompleted>
);

ProfileCompleted.defaultProps = {
  user: undefined,
};

ProfileCompleted.propTypes = {
  user: UserPropTypes,
};

export default HOCAuth(ProfileCompleted);
