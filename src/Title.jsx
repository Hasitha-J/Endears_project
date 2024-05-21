import React, { useState, useEffect } from 'react';
import './title.css';

const Title = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
      // Set a timer to hide the div after 5 seconds
      const timer = setTimeout(() => {
          setIsVisible(false);
      }, 50000);

      // Cleanup the timer if the component unmounts before the timer fires
      return () => clearTimeout(timer);
  }, []);


  return (
    <div className='title-container'>
       {isVisible && 
        <div className='title' >
            <p className='title-text'>
              <cap className="cap">E</cap>
              <sim className="sim">arly war</sim>
              <cap className="cap">N</cap>
              <sim className="sim">ing </sim>
              <cap className="cap">DE</cap>
              <sim className="sim">ssimination </sim>
              <cap className="cap">A</cap>
              <sim className="sim">nd info</sim>
              <cap className="cap">R</cap>
              <sim className="sim">mation </sim>
              <cap className="cap">S</cap>
              <sim className="sim">haring platform</sim>
            </p>
        </div>}
    </div>
    
    );
  };
  
  export default Title;
  