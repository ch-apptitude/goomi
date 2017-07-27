/**
*
* ProfileCompleted
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import moment from 'moment';

import HOCAuth from 'features/user/hoc/HOCAuth';

import { UserPropTypes } from 'features/user/constants';
import Box from 'features/ui/components/Box';
import Text from 'features/ui/components/Text';
import { GreenButton } from 'features/ui/components/Button';

import messages from './messages';
import styles from './styles.scss';

const ProfileCompleted = ({ user }) => (
  <div className={styles.ProfileCompleted}>
    {user && (
      <Box>
        <Row>
          <Col xs={12}>
            <Text className={styles.ProfileCompleted__Title} domElement="h1" size="title">
              <FormattedMessage {...messages.title} />
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Text className={styles.ProfileCompleted__Body} domElement="p">
              <FormattedMessage {...messages.body} />
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <GreenButton className={styles.ProfileCompleted__Continue} linkTo={'/profile'} message={messages.continue} />
          </Col>
        </Row>
      </Box>
    )}
  </div>
);

ProfileCompleted.defaultProps = {
  user: undefined,
};

ProfileCompleted.propTypes = {
  user: UserPropTypes,
};

export default HOCAuth(ProfileCompleted);
