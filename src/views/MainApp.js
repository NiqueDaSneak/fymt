import React, {useContext} from 'react';
import actions from '../store/'
import Modal from '../components/Modals/Modal';
import Header from '../components/ui/Header'
import {GlobalContext} from '../components/hoc/Store'
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
  const [state, dispatch] = useContext(GlobalContext)

  return (
    <Container>
      <Modal
        close={() => dispatch(actions.closeModal())}
        open={state.modalOpen} 
        modalType={state.modalType}
        modalData={state.modalData} />
      <Header />
      <ExpandableContentArea />
      <AffirmationModule />
      <MenuToggle />
    </Container>
  )
}

export default MainApp;