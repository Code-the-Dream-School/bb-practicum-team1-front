import React from 'react';
import Modal from 'react-modal';

const AbstractModal = ({ modalId, className, required, modalIsOpen, children }) => {
    return (
        <Modal 
            id={ modalId } 
            className={ className }
            shouldCloseOnOverlayClick={ !required }
            shouldCloseOnEsc={ !required }
            isOpen={ modalIsOpen }
        >
            { children }
        </Modal>
    );
};

export default AbstractModal;