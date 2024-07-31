import React from "react";
import MyPDF from '/public/Training Manual_Draft_10.10.2022.pdf';


const Modal2 = ({ isOpen2, onClose2 }) => {
    if (!isOpen2) return null;
    return (
        <div
            onClick={onClose2}
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
                style={{
                        background: "white",
                        color: "black",
                        height: "auto",
                        minHeight: "30vh",
                        width: "80%",
                        maxWidth: "540px",
                        margin: "auto",
                        padding: "2%",
                        border: "2px solid #000",
                        borderRadius: "1.5rem",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        
                    }}
            >
            
          <p 
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
                Download user manual
            
          </p>
          </div>
            
        </div>
    );
};
 
export default Modal2;