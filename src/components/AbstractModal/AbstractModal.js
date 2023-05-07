import React from 'react';
import Modal from 'react-modal';

const AbstractModal = ({ modalId, className, modalIsOpen, onModalClose, children }) => {
    return (
        <div className='abstract-modal-container'>
        <Modal 
            style={{ 
                content: {
                    // top: '50%',
                    // left: '50%',
                    // right: 'auto',
                    // bottom: 'auto',
                    // transform: 'translate(-50%, -50%)',
                    width: '65%', 
                    height: '15%', 
                    margin: '10rem 5rem', 
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '1rem',
                    boxShadow: '2px 5px 5px rgb(0,0,128)',
                    backgroung: 'white',
                    opacity: '1',
                    letterSpacing: '5px',
                    fontWeight: '700',
                }, 
                overlay: { 
                    opacity: '0.7',
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
                    style={{ color: 'blue', fontSize: '1.8rem', borderRadius: '1rem' }}>{'\u2718'}</button>
            </div>
            { children }
        </Modal>
        </div>
    );
};

export default AbstractModal;