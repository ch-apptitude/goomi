/**
*
* Modal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';
import hocModal from 'features/common_ui/hoc/hocModal';

import styles from './styles.scss';

const modalStyles = {
  overlay: { backgroundColor: 'rgba(84, 83, 82, 0.5)', overflow: 'auto' },
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '2px',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    overflow: 'visible',
  },
};

class Modal extends React.Component {
  closeModal = () => this.props.toogleModalOpen();

  render() {
    const { modalOpen, modalParams } = this.props;
    return (
      <ReactModal isOpen={modalOpen} onRequestClose={this.closeModal} style={modalStyles} contentLabel={modalParams.title || ''}>
        <button className={styles.Modal__CloseButton} onClick={this.closeModal}>
          <div className={styles.Modal__CloseButton__Inner}>X</div>
        </button>
        {modalParams.content}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  toogleModalOpen: PropTypes.func.isRequired,
  modalParams: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  }).isRequired,
};

export default hocModal(Modal);
