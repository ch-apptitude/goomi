/*
 *
 * EmailValidationPage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';

import { sendConfirmEmail } from 'features/user/actions';

import { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';

import messages from './messages';
import styles from './styles.scss';

class EmailValidationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      succeed: false,
      failed: false,
      loading: true,
    };
  }

  componentDidMount() {
    const { token } = this.props.location.query;
    this.sendConfirmEmail(token);
  }

  validationSucceed = () => {
    this.setState({
      succeed: true,
      failed: false,
      loading: false,
    });
  };
  validationFail = (error) => {
    this.setState({
      failed: error.code,
      succeed: false,
      loading: false,
    });
  };

  sendConfirmEmail = (token) =>
    new Promise((resolve, reject) => this.props.sendConfirmEmail(token, { resolve, reject }))
      .then(this.validationSucceed)
      .catch(this.validationFail);

  renderSucceed = () => (
    <div className={styles.EmailValidationPage__Succeed}>
      <Text domElement="h1" size="title">
        {this.context.intl.formatMessage(messages.validationSucceed)}
      </Text>
      <GreenButton message={messages.continueProfileComplete} linkTo="/register/user-infos" />
    </div>
  );
  renderFailed = () => (
    <div className={styles.EmailValidationPage__Failed}>
      <Text domElement="h1" size="title">
        {this.context.intl.formatMessage(messages[this.state.failed])}
      </Text>
      <GreenButton message={messages.continueProfileComplete} linkTo="/register/user-infos" />
    </div>
  );
  renderLoading = () => (
    <div className={styles.EmailValidationPage__Loading}>
      <Text domElement="h1" size="title">
        {this.context.intl.formatMessage(messages.validationInProgress)}
      </Text>
    </div>
  );

  render() {
    const { intl } = this.context;
    const { succeed, failed, loading } = this.state;
    return (
      <div className={styles.EmailValidationPage}>
        <Helmet title={intl.formatMessage(messages.emailValidationPage)} />
        <Row className={styles.ProfilePage__ProfileForm}>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <Box>
              {succeed && this.renderSucceed()}
              {failed && this.renderFailed()}
              {loading && this.renderLoading()}
            </Box>
          </Col>
        </Row>
      </div>
    );
  }
}

EmailValidationPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendConfirmEmail: (...etc) => dispatch(sendConfirmEmail(...etc)),
});

EmailValidationPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
EmailValidationPage.propTypes = {
  sendConfirmEmail: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(EmailValidationPage);
