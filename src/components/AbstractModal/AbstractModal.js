import React from 'react';
import Modal from 'react-modal';

const AbstractModal = ({ modalId, className, modalIsOpen, onModalClose, children }) => {
    return (
        <Modal 
            style={{ 
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    width: '40%', 
                    height: '40%', 
                    margin: '0 auto', 
                    color: 'black',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                    backgroung: 'white'
                }, 
                overlay: { 
                    background: 'lightgrey', 
                } 
            }}
            id={ modalId } 
            className={ className }
            shouldCloseOnOverlayClick={ false }
            shouldCloseOnEsc={ true }
            isOpen={ modalIsOpen }
            appElement={document.getElementById('root') || undefined}
        >
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginBottom: '1rem'
                }}
            >
                <button type="button" onClick={() => onModalClose(false)}>Close</button>
            </div>
            { children }
        </Modal>
    );
};

export default AbstractModal;