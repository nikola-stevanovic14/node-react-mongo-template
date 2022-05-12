import React  from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import './ModalStyle.css'
import InfoIcon from '@mui/icons-material/Info';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      height: '30%',
      display: 'flex',
      flexDirection: 'column',
      padding: 'unset'
    },
};

const InfoModal = ({isOpen, handleClose, title, message}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
          <div className='modal-header'>
            <h3 style={{flex: "1 1", textAlign: "center", fontWeight: "500"}}>{title}</h3>
            <span style={{paddingTop: "4px", margin: "auto"}}><InfoIcon color="disabled"/></span>
          </div>
          <div className='modal-body'>
            <h3 style={{textAlign: "center", fontWeight: "400"}}>{message}</h3>
          </div>
          <div className='modal-footer'>
            <Button variant="contained" onClick={handleClose}>Okay</Button>  
        </div>
      </Modal>
    </div>
  );
}

export default InfoModal;
