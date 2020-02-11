import React, {useContext} from 'react';
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import BackgroundImageController from '../components/hoc/BackgroundImageController'
import Header from '../components/ui/Header'
import Carosel from '../components/ui/Carosel';
import {AffirmationContext} from '../components/hoc/Store'
import {ModalContext} from '../components/hoc/Store'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
const Image = styled.div`
  height: 48vh;
  width: 100vw;
  background-color: pink;
`

const MainApp = () => {
  // const [state, dispatch] = useContext(AffirmationContext)
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)
  const [modalState, modalDispatch] = useContext(ModalContext)

  return (
    <Container>
      <Modal
        close={() => modalDispatch(actions.modal.close())}
        open={modalState.modalOpen} 
        modalType={modalState.modalType}
        modalData={modalState.modalData} />
      <Header />
      <BackgroundImageController />
      <Carosel />
    </Container>
  )
}

export default MainApp;