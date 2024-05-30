import React from "react";
import Popup from 'reactjs-popup';
import work1 from './assets/workshop1.jpg';
import work2 from './assets/workshop2.jpg';
import closeButton from './assets/close.svg';

const styles = {


  divContainer: {
    width: '100vw',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    padding: '0', 
  },
  newsContainer: {
    backgroundColor: 'white',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center', // Center the visible cards
    overflowX: 'auto', // Allow horizontal scrolling
    padding: '50px 0px', // Add margin to separate the news cards 
  },

  card: {
    margin: '0 30px', // Add margin for spacing between cards
    width: '200px',
    height: '150px',
    backgroundColor: '#333',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
  },
  title: {
    color: '#333',
    fontSize: '20px',
    padding: '0 20px',
    // margin: '0',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  content:{
    height: '80vh',
    heightMax: '50px',
    widthMax: '1280px',
    width: '70vw',
    backgroundColor: 'white',
    borderRadius: '2rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.9)',
    color: '#333',
    fontSize: '15px',
    padding: '0 20px',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  button: {
    position: 'absolute',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    bottom: '10px', 
    left: '50%',
    transform: 'translateX(-50%)', 
  },
  image:{
    height: '100%',
    // width: '100%',
    // objectFit: 'scale-down',
    borderRadius: '10px',
  },
   modal: {
    overflowY: 'auto', // Enable vertical scrolling
    // maxHeight: '80vh', // Set a maximum height for the modal to limit the scrolling area
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
};

const News = () => {
  return (
    <div style={styles.divContainer} id="news">
      <p style={styles.title}>NEWS</p>
      <div style={styles.newsContainer} >
      <Popup trigger=
                {<div style={styles.card}>Introduction of project's objectives and scope</div>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content' style={styles.content}>
                              <img src ={closeButton} alt="Close" style={styles.closeButton} onClick={() => close()}/>
                                <h2>Introduction of project's objectives and scope</h2>
                                <p>23.06.2023</p>
                             <p>On June 23, 2023, IWMI conducted a workshop at Solis Hotel Matara to introduce the project of Climate Information Sharing and Early Warning Platform to Matara District which was developed as part of the "Project to Strengthen the Process and Capacity of Climate Information Sharing for the Implementation of the National Adaptation Plan of Sri Lanka." The workshop was held from 9:00 am to 5:00 pm and was attended by 50 officers, including the District Secretary, Matara, other officials from the Matara district secretariat, district engineers, and officials from the District Disaster Management Unit, NBRO, RDA, UDA, Central Environmental Authority, Meteorological Department, LUPPD, Department of Agrarian Development, Department of Fisheries and Aquatic Resources, Survey Department, Police, Sri Lanka Navy, and other relevant organizations.</p>
                            <img src={work1} alt="workshop images 1" style={styles.image}/>
                            <div>
                                <button onClick=
                                    {() => close()} style={styles.button}>
                                        Close
                                </button>
                            </div>
                            </div>
                            
                        </div>
                    )
                }
            </Popup>
            <Popup trigger=
                {<div style={styles.card}>Demonstration of the ENDEARS system</div>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content' style={styles.content}>
                            <img src ={closeButton} alt="Close" style={styles.closeButton} onClick={() => close()}/>
                            <h2>Demonstration of the Early Warning Dissemination System and Climate Information Sharing Platform (ENDEARS - Matara)</h2>
                                <p>05.04.2024 </p>
                                <p>IWMI organized a workshop on April 5, 2024, at Solis Hotel Matara, aiming to provide training on the Climate Information Sharing and Early Warning Platform. This platform is a component of the "Project to Enhance the Process and Capacity of Climate Information Sharing for the Implementation of the National Adaptation Plan of Sri Lanka." The workshop, which ran from 9:00 am to 5:00 pm, saw the participation of 50 officials, including the District Secretary of Matara, various officials from the Matara district secretariat, district engineers, and representatives from organizations such as the District Disaster Management Unit, NBRO, RDA, UDA, Central Environmental Authority, Meteorological Department, LUPPD, Department of Agrarian Development, Department of Fisheries and Aquatic Resources, Survey Department, Police, Sri Lanka Navy, and other pertinent entities.</p>
                                <img src={work2} alt="workshop images 2" style={styles.image}/>
                                <div>
                                <button onClick=
                                    {() => close()} style={styles.button}>
                                        Close
                                </button>
                            </div>
                            </div>
                            
                        </div>
                    )
                }
            </Popup>
        
      </div>
    </div>
  );
};

export default News;