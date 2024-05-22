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
              <span className="cap">E</span>
              <span className="sim">arly war</span>
              <span className="cap">N</span>
              <span className="sim">ing </span>
              <span className="cap">DE</span>
              <span className="sim">ssimination </span>
              <span className="cap">A</span>
              <span className="sim">nd info</span>
              <span className="cap">R</span>
              <span className="sim">mation </span>
              <span className="cap">S</span>
              <span className="sim">haring platform</span>
            </p>
        </div>}
    </div>
    
    );
  };
  
  export default Title;
  