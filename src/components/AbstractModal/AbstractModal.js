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
                    width: '14%', 
                    height: '14%', 
                    margin: '30rem 65rem', 
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '1rem',
                    boxShadow: '2px 5px 5px rgb(0,0,128)',
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
                    marginBottom: '1rem',
                }}
            >
                <button 
                    type="button" 
                    onClick={() => onModalClose(false)} 
                    style={{ color: 'blue', 'font-size': '1.8rem', borderRadius: '1rem' }}>{'\u2718'}</button>
            </div>
            { children }
        </Modal>
    );
};

export default AbstractModal;