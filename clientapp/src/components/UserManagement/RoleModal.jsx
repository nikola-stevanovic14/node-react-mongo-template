import React, {useState} from 'react';
import Modal from 'react-modal';
import Select from 'react-select'
import { IoClose } from "react-icons/io5";
import {getAllRoles} from '../../constants/roles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Modals/ModalStyle.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      padding: 'unset'
    },
};

const cancleBtnTheme = createTheme({
  palette: {
    neutral: {
      main: '#EEE',
      contrastText: '#fff',
    },
  },
});

const RoleModal = ({isOpen, handleClose, handleRolesChanged, userId, userName, currentRoles}) => {
  const allRoles = getAllRoles();

  const [initialUserRoles] = useState(currentRoles && currentRoles.length > 0 ? allRoles.filter(x=>x.value === currentRoles[0]) : []);
  const [userRoles, setUserRoles] = useState(currentRoles && currentRoles.length > 0 ? allRoles.filter(x=>x.value === currentRoles[0]) : []);
  const [allowSave, setAllowSave] = useState(false);

  const handleSelectChange = (values) => {
      const valuesArray = values ? [values] : []; 
      setUserRoles(valuesArray);
      let areEqual = false;
      if (initialUserRoles.length === valuesArray.length) {
          areEqual = initialUserRoles.map(x=> {return x.value}).every(element => {
            if (valuesArray.map(x=> {return x.value}).includes(element)) {
              return true;
            }
            return false;
          });
      }
      setAllowSave(!areEqual);
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
          <div className='modal-header' style={{padding: "20px 20px 0px 20px"}}>
            <h3 style={{flex: "1 1", textAlign: "center", fontWeight: "500"}}>User: {userName}</h3>
            <IoClose onClick={handleClose} size="18" style={{marginLeft:"auto", cursor:"pointer"}} />
          </div>
          <div className='modal-body'>
            <Select 
                options={allRoles}
                value={userRoles}
                onChange={handleSelectChange}
                isClearable={true}
            />
          </div>
          <div className='modal-footer' style={{padding: "20px 20px 20px 20px"}}>
            <ThemeProvider theme={cancleBtnTheme}>
              <Button color="neutral" variant="contained" onClick={handleClose} sx={{marginRight: "10px", backgroundColor: "#64748B"}}>Cancel</Button>
            </ThemeProvider>
            <Button disabled={!allowSave} variant="contained" sx={{marginLeft: "10px"}} onClick={() => handleRolesChanged(userId, userRoles.map(x=> {return x.value}))} >Save Changes</Button>  
        </div>
      </Modal>
    </div>
  );
}

export default RoleModal;
