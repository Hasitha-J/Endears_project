import ShareNet from './assets/share.svg';
import AlertNet from './assets/alert.svg';
import React from "react";
import Modal from "./Modal";


const styles ={
divContainer: {
    width: '100vw',
    backgroundColor: 'white',
  
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    justifyContent:'space-evenly'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '100px',
    border: '1px solid #333',
    borderRadius: '3rem',
    margin: '10px',
    textAlign: 'center',
    fontSize: '20px',
    color: '#333',
    textDecoration: 'none',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  image: {
    marginRight: '20px'
  }
};


const ButtonComponent = () => {

  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  return (
    <div style={styles.divContainer}>
        <div style={styles.buttonContainer}>
            <p  style={styles.button} onClick={handleOpen}>
                <img  src={ShareNet} style={styles.image} />
                 ShareNet
            </p>
            <a href="https://ews.mobilise-srilanka.org/WorkflowEngine/login" style={styles.button}>
                <img src={AlertNet} style={styles.image} />
                 AlertNet
            </a>
        </div>

        <Modal isOpen={open} onClose={handleClose}>
          
      </Modal>
        
      
    </div>
    
  );
};

export default ButtonComponent;
