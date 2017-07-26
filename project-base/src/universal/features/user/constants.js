import PropTypes from 'prop-types';

const UserPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthdate: PropTypes.instanceOf(Date),
  email: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
});

const USER_STATUS = {
  LOADING: 'LOADING',
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT',
  PROFILE_COMPLETE: 'PROFILE_COMPLETE',
  VERIFIED: 'VERIFIED',
};

export { UserPropTypes, USER_STATUS };
