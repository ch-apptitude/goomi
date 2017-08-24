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
import styled from 'styled-components';

import Theme from 'assets/theme';
import { UserPropTypes } from 'features/user/constants';
import { sendNewConfirmEmail } from 'features/user/actions';
import HOCAuth from 'features/user/hoc/HOCAuth';

import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';

import messages from './messages';

const StyledUnverifiedEmail = styled.div`
  height: 100%;
  width: 100%;

  .links {
    margin-top: 30px;
    line-height: 1.5em;
    a {
      text-decoration-line: underline;
      display: inline;
      font-size: 1.1em;
    }
  }

  .title {
    margin-bottom: 50px;
  }
`;

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
      <StyledUnverifiedEmail>
        <Helmet title={intl.formatMessage(messages.unverifiedEmail)} />
        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3}>
            <Box>
              <Text tag="h1" size={Theme.Metrics.title} className="title" message={this.state.messageResent ? messages.checkYourMailBox : messages.unverifiedEmail} />
              <Text tag="p" message={messages.description} values={{email: user.email}} />
              <Text tag="p" className="links">
                {intl.formatHTMLMessage(messages.problemsWithEmail)}
                &nbsp;
                <Button linkTo="/profile/edit" message={messages.changeEmail} />
                &nbsp;
                {intl.formatHTMLMessage(messages.or)}
                &nbsp;
                <Button onClick={this.sendConfirmEmail} linkTo="/account/unverified-email" message={messages.resendConfirmEmail} />
              </Text>
            </Box>
          </Col>
        </Row>
      </StyledUnverifiedEmail>
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
