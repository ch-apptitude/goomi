/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Button from 'features/common_ui/components/Button';
import HOCAuth from 'features/user/hoc/HOCAuth';
import { UserPropTypes } from 'features/user/constants';

import messages from './messages';

const StyledProfilePage = styled(Row)`height: 100%;`;

const StyledProfileNavigtion = styled(Row)`
  width: 100%;
  background-color: #545251;
  position: absolute;
  top: 0;
  left: 0.5rem;
  height: 50px;

  .links {
    display: initial;
  }

  .link {
    display: inline-block;
    padding: 14.5px 12px;
    color: #9d9a98;

    &:first-child {
      padding-left: 0;
    }

    link-active {
      position: relative;

      *,
      > * {
        color: white;
      }

      &:after {
        content: '';
        background-color: orange;
        height: 4px;
        width: 90%;
        display: block;
        bottom: -2px;
        margin: auto;
        position: absolute;
      }
    }
  }
`;

const ProfileNavigtion = () => (
  <StyledProfileNavigtion>
    <Col xs={12} sm={10} smOffset={1}>
      <Col xs={12} sm={2} smOffset={1} className="links">
        <Button linkTo={'/profile'} className="link" message={messages.parameters} activeClassName="link-active" />
      </Col>
    </Col>
  </StyledProfileNavigtion>
);

ProfileNavigtion.propTypes = {
  user: UserPropTypes.isRequired,
};

const ProfilePage = ({ params, location, children, user }, { intl }) => (
  <StyledProfilePage>
    <Helmet title={intl.formatMessage(messages.profile)} />
    <Col xs={12} sm={10} smOffset={1}>
      {!!user && <ProfileNavigtion user={user} />}
      {children}
    </Col>
  </StyledProfilePage>
);

ProfilePage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ProfilePage.propTypes = {
  user: UserPropTypes,
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  location: PropTypes.object,
};

ProfilePage.defaultProps = {
  user: undefined,
  params: { id: undefined },
};

export default HOCAuth(ProfilePage, true);
