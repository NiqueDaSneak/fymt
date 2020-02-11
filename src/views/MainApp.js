import React, {useContext} from 'react';
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import BackgroundImageController from '../components/hoc/BackgroundImageController'
import Header from '../components/ui/Header'
import Carosel from '../components/ui/Carosel';
import {AffirmationContext} from '../components/hoc/Store'
import {ModalContext} from '../components/hoc/Store'
const MainApp = () => {
  // const [state, dispatch] = useContext(AffirmationContext)
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)
  const [modalState, modalDispatch] = useContext(ModalContext)

  return (
    <>
      {/* <ModalStore> */}
        <Modal
          close={() => modalDispatch(actions.modal.close())}
          open={modalState.modalOpen} 
          modalType={modalState.modalType}
          modalData={modalState.modalData} />
        <BackgroundImageController>
        <Header />
          <Carosel />
        </BackgroundImageController>
      {/* </ModalStore> */}
    </>
  )
}

export default MainApp;