/*
 *
 * UnverifiedEmail
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';

import { UserPropTypes } from 'features/user/constants';
import { sendNewConfirmEmail } from 'features/user/actions';
import HOCAuth from 'features/user/hoc/HOCAuth';

import Text from 'features/ui/components/Text';
import Box from 'features/ui/components/Box';

import messages from './messages';
import styles from './styles.scss';

class UnverifiedEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageResent: false,
    };
  }

  sendConfirmEmail = () =>
    new Promise((resolve, reject) => this.props.sendNewConfirmEmail({ resolve, reject })).then(() =>
      this.setState({ messageResent: true }),
    );

  render() {
    const { user } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.UnverifiedEmail}>
        <Helmet title={intl.formatMessage(messages.unverifiedEmail)} />
        <Row className={styles.ProfilePage__ProfileForm}>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <Box>
              <Text domElement="h1" size="title" className={styles.UnverifiedEmail__Title}>
                {intl.formatMessage(this.state.messageResent ? messages.checkYourMailBox : messages.unverifiedEmail)}
              </Text>
              <Text domElement="p" size="text">
                {intl.formatMessage(messages.description, { email: user.email })}
              </Text>
              <Text domElement="p" size="text" className={styles.UnverifiedEmail__Links}>
                {intl.formatHTMLMessage(messages.problemsWithEmail)}
                &nbsp;
                <Link to="/profile/edit">{intl.formatMessage(messages.changeEmail)}</Link>
                &nbsp;
                {intl.formatHTMLMessage(messages.or)}
                &nbsp;
                <Link onClick={this.sendConfirmEmail} to="/account/unverified-email">
                  {intl.formatMessage(messages.resendConfirmEmail)}
                </Link>.
              </Text>
            </Box>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendNewConfirmEmail: (...etc) => dispatch(sendNewConfirmEmail(...etc)),
});

UnverifiedEmail.contextTypes = {
  intl: PropTypes.object.isRequired,
};
UnverifiedEmail.propTypes = {
  user: UserPropTypes.isRequired,
  sendNewConfirmEmail: PropTypes.func.isRequired,
};

export default HOCAuth(connect(null, mapDispatchToProps)(UnverifiedEmail), true);
