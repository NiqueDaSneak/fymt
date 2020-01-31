import { useEffect } from 'react'
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root')
const el = document.createElement("div")

const Portal = ({ children }) => {  
  useEffect(() => {    
      modalRoot.appendChild(el);  
  }, []);   
  // useEffect(() => {    
  //     return () => modalRoot.removeChild(el); 
  // });   
  return createPortal(children, el);
}

export default Portal