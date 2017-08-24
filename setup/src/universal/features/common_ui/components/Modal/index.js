/**
*
* Modal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReactModal from 'react-modal';
import hocModal from 'features/common_ui/hoc/hocModal';

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(50%, -50%, 0);
  height: 30px;
  width: 30px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #545352;
    color: white;
    height: 22px;
    width: 22px;
    text-align: center;
    line-height: 22px;
  }
`;

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
        <CloseButton onClick={this.closeModal}>
          <div className="inner">X</div>
        </CloseButton>
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
