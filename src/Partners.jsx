import React from 'react';
import './Patrners.css';

import logo1 from './assets/logoIWMI.png';
import logo2 from './assets/logoCCS.jpg';
import logo3 from './assets/logoTecXal.png';
import logo4 from './assets/logoSalford.png';

const styles = {
  Patrners: {
    width: '100vw',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    // display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly', // Center the visible cards
    overflowX: 'auto', // Allow horizontal scrolling
    // padding: '20px',
    // margin: '50px 0', // Add margin to separate the partner logos
  },
  createMessage: {
    marginTop: '20px',
    textAlign: 'center',
  },
  img1:{
    marginTop: '50px',
    paddingBottom: '20px',
    maxHeight: '100px',
    maxWidth: '100vw',
},

    img2:{
      padding: '20px',
    width: '150px',
    },

    img3:{
      padding: '20px',
    height: '200px',
    },

    img4:{
      padding: '0',
    height: '170px',
    }


};

function Patrners() {
  return (
    <div className="Patrners" style={styles.Patrners} id='partners'>
      <img  style={styles.img1} src={logo1} alt="iwmi_logo" />
      <img  style={styles.img2} src={logo2} alt="ccs_logo" />
      <img  style={styles.img3} src={logo3} alt="iwmi_logo" />
      <img  style={styles.img4} src={logo4} alt="ccs_logo" />
      {/* <div className="createMessage"  style={styles.createMessage}>
        <p>Created on: 15:05:2024</p>
      </div> */}
    </div>
  );
}

export default Patrners;
