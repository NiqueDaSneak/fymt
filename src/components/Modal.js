import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'
import SettingsModal from './SettingsModal'
import AlertsModal from './AlertsModal'
import SearchModal from './SearchModal'
import InfoModal from './InfoModal'

const ContentShade = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #00000066;
  opacity: ${ props => props.visible ? '1' : '0'};
  transition: all .4s ease-in-out;
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: grayscale(1);
`
const Modal = (props) => {
  return(
    <Portal>
      <ContentShade 
        onClick={() => props.close()} 
        visible={props.open} />
      <SettingsModal active={props.modalType === 'SETTINGS_MODAL'} />  
      <AlertsModal active={props.modalType === 'ALERTS_MODAL'} />  
      <SearchModal active={props.modalType === 'SEARCH_MODAL'} />  
      <InfoModal active={props.modalType === 'INFO_MODAL'} />  
    </Portal>
  )
}

export default Modal