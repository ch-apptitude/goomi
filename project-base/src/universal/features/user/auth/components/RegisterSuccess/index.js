/**
*
* RegisterSuccess
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';

import HOCAuth from 'features/user/hoc/HOCAuth';
import HOCRedirect from 'features/routing/hoc/HOCRedirect';

import { UserPropTypes, USER_STATUS } from 'features/user/constants';
import Box from 'features/ui/components/Box';
import Text from 'features/ui/components/Text';
import { GreenButton } from 'features/ui/components/Button';

import messages from './messages';
import styles from './styles.scss';

const RegisterSuccess = ({ user }) => {
  const values = { email: user.email };
  return (
    <div className={styles.RegisterSuccess}>
      {user && (
        <Box>
          <Row>
            <Col xs={12}>
              <Text className={styles.RegisterSuccess__Title} domElement="h1" size="title">
                <FormattedMessage {...messages.success} />
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Text className={styles.RegisterSuccess__Body} domElement="p">
                <FormattedMessage {...messages.body} values={values} />
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={4}>
              <GreenButton
                className={styles.RegisterSuccess__Continue}
                linkTo="/register/user-infos"
                message={messages.continue}
              />
            </Col>
          </Row>
        </Box>
      )}
    </div>
  );
};

RegisterSuccess.propTypes = {
  user: UserPropTypes,
};

RegisterSuccess.defaultProps = {
  user: undefined,
};

export default HOCAuth(HOCRedirect(RegisterSuccess, USER_STATUS.LOGGED_IN));
