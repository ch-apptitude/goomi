/*
 *
 * hocModal
 *
 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import { createStructuredSelector } from 'reselect';

import { selectModalOpen, selectModalParams } from 'features/ui/selectors';
import { toogleModalOpen } from 'features/ui/actions';

// -------------------------------------------
// CONNECT : State & Action
// ------------------------------------------
const mapStateToProps = createStructuredSelector({
  modalOpen: selectModalOpen(),
  modalParams: selectModalParams(),
});

const mapDispatchToProps = (dispatch) => ({
  toogleModalOpen: (title, content) => dispatch(toogleModalOpen(title, content)),
});

// --------------------------------
// PROPTYPES
// -------------------------------
const propTypesActions = {
  toogleModalOpen: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  modalParams: PropTypes.object.isRequired,
};

const hocModal = compose(connect(mapStateToProps, mapDispatchToProps), setPropTypes(propTypesActions));

export default hocModal;
