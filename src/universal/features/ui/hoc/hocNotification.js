/*
 *
 * hocNotification
 *
 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import { createStructuredSelector } from 'reselect';

import { selectNotifications } from 'features/ui/selectors';

const mapStateToProps = createStructuredSelector({
  notifications: selectNotifications(),
});
const sliderPropsType = setPropTypes({
  notifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
});

const hocNotification = compose(connect(mapStateToProps), sliderPropsType);

export default hocNotification;
