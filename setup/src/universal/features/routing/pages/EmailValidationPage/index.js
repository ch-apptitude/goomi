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
import styled from 'styled-components';

import { sendConfirmEmail } from 'features/user/actions';
import Theme from 'assets/theme';

import { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';

import messages from './messages';

const ValidationResult = styled.div`
  & > *:first-child {
    margin-bottom: 30px;
  }
`;
const EmailValidationContainer = styled.div`
  height: 100%;
  width: 100%;
`;

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
    <ValidationResult>
      <Text tag="h1"  size={Theme.Metrics.title} message={messages.validationSucceed} />
      <GreenButton message={messages.continueProfileComplete} linkTo="/register/user-infos" />
    </ValidationResult>
  );
  renderFailed = () => (
    <ValidationResult>
      <Text tag="h1" size={Theme.Metrics.title} message={messages[this.state.failed]} />
      <GreenButton message={messages.continueProfileComplete} linkTo="/register/user-infos" />
    </ValidationResult>
  );
  renderLoading = () => (
    <div>
      <Text tag="h1" size={Theme.Metrics.title} message={messages.validationInProgress} />
    </div>
  );

  render() {
    const { intl } = this.context;
    const { succeed, failed, loading } = this.state;
    return (
      <EmailValidationContainer>
        <Helmet title={intl.formatMessage(messages.emailValidationPage)} />
        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <Box>
              {succeed && this.renderSucceed()}
              {failed && this.renderFailed()}
              {loading && this.renderLoading()}
            </Box>
          </Col>
        </Row>
      </EmailValidationContainer>
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
