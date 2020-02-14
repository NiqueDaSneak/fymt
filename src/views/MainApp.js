import React, {useContext} from 'react';
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import Header from '../components/ui/Header'
import {ModalContext} from '../components/hoc/Store'
import styled from 'styled-components'
import ExpandableContentArea from '../components/ui/ExpandableContentArea'
import MenuToggle from '../components/ui/MenuToggle'
import AffirmationModule from '../components/ui/AffirmationModule';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const MainApp = () => {
  const [modalState, modalDispatch] = useContext(ModalContext)

  return (
    <Container>
      <Modal
        close={() => modalDispatch(actions.modal.close())}
        open={modalState.modalOpen} 
        modalType={modalState.modalType}
        modalData={modalState.modalData} />
      <Header />
      <ExpandableContentArea />
      <AffirmationModule />
      <MenuToggle />
    </Container>
  )
}

export default MainApp;