import React, {useContext} from 'react';
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import BackgroundImageController from '../components/hoc/BackgroundImageController'
import Header from '../components/ui/Header'
import Carosel from '../components/ui/Carosel';
import {AffirmationContext} from '../components/hoc/Store'

const MainApp = () => {
  const [state, dispatch] = useContext(AffirmationContext)
  return (
    <>
      <Modal
        close={() => dispatch(actions.modal.close())}
        open={state.modalOpen} 
        modalType={state.modalType}
        modalData={state.modalData} />
      <BackgroundImageController>
      <Header />
      <Carosel openModal={(modalType, modalData) => dispatch(actions.modal.open(modalType, modalData))} />
      </BackgroundImageController>
    </>
  )
}

export default MainApp;