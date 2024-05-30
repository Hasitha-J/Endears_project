import ShareNet from './assets/share.svg';
import AlertNet from './assets/alert.svg';

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
  return (
    <div style={styles.divContainer}>
        <div style={styles.buttonContainer}>
            <a href="https://matara.mobilise-srilanka.org/webapp/" style={styles.button}>
                <img src={ShareNet}  style={styles.image} />
                 ShareNet
            </a>
            <a href="https://ews.mobilise-srilanka.org/WorkflowEngine/login" style={styles.button}>
                <img src={AlertNet} style={styles.image} />
                 AlertNet
            </a>
        </div>
    </div>
    
  );
};

export default ButtonComponent;
