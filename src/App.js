import React, {useReducer} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import FooterNav from './components/ui/FooterNav'
import Modal from './components/Modals/Modal';
import Images from './assets/imgs';
import BackgroundImageController from './components/hoc/BackgroundImageController'
import Header from './components/ui/Header'

const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; }
  html, body {
    background: black;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    min-height:100%;
    height:100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const BlurredCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff6b;
  backdrop-filter: blur(8px);
  height: 30%;
  justify-content: space-evenly;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
`

const AffirmationText = styled.p`
  text-align: center;
  font-size: 16pt;
  font-weight: 600;
  font-style: italic;
  width: 84%;
`

const InfoIcon = styled.img.attrs(props => ({
  src: Images.question
}))`
  width: 10%;
`

const App = () => {
  const initialState = {
    modalOpen: false,
    modalType: null,
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'openModal':
        return {modalOpen: true, modalType: action.modalType, modalData: action.modalData}
      case 'closeModal':
        return {modalOpen: false, modalData: action.modalData}
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyle/>
      <Modal
          close={() => dispatch({type: 'closeModal'})}
          open={state.modalOpen} 
          modalType={state.modalType}
          modalData={state.modalData} />
      <BackgroundImageController>
      <Header />
        <BlurredCard>
          <AffirmationText>This is the affirmation statement; more text for the longest possbile version.</AffirmationText>
          <InfoIcon onClick={() => dispatch({type: 'openModal', modalType: 'INFO_MODAL'})}/>
        </BlurredCard>
        <FooterNav openModal={(type) => dispatch({type: 'openModal', modalType: type})} />
      </BackgroundImageController>
    </>
  );
}

export default App;
