import React from "react";
import MyPDF from '/public/User_Manual _endears_Draft.pdf';


const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const containerStyle = {
        background: "white",
        color: "black",
        height: "auto",
        width: "80%",
        maxWidth: "240px",
        margin: "auto",
        padding: "2%",
        border: "2px solid #000",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
    };
    
    const responsiveContainerStyle = {
        ...containerStyle,
        '@media (max-width: 600px)': {
            width: '90%',
            padding: '4%',
        },
    };
 
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                
            }}
        >
            <div 
                style={responsiveContainerStyle}
            >
                
          <p><a
          style={{
            textDecoration: "none",
            border: "1px solid #333",
            padding: "10px",
            paddingInline: "20px",
            borderRadius: "2rem",
            margin: "10px",
            color: "white",
            display: "inline-block",
            backgroundColor: "#333"
        }}
        
        href="https://matara.mobilise-srilanka.org/webapp/">
            Proceed to ShareNet
            </a></p>
          <p>
            <a href={MyPDF} download="User_Manual_ShareNet_Draft.pdf"
            style={{
                textDecoration: "none",
                border: "1px solid #000",
                padding: "10px",
                paddingInline: "20px",
                borderRadius: "2rem",
                margin: "10px",
                color: "black",
                display: "inline-block"
            }}
            > 
                Download user manual for ShareNet
            </a>
          </p>
          </div>
            
        </div>
    );
};
 
export default Modal;
