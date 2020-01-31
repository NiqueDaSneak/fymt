import React, {useReducer} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import FooterNav from './components/FooterNav'
import Modal from './components/Modal';
import Images from './assets/imgs';

const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; }
  html { height: 100%; width: 100%; background-color: green;}
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const Window = styled.div`
  height: 100%;
  padding-top: 30%;
  width: 100%;
`

const AffirmationText = styled.p`
  width: 90%;
  margin-left: 5%;
  text-align: center;
  font-size: 16pt;
`

const InfoIcon = styled.img.attrs(props => ({
  src: Images.question
}))`
  width: 10%;
  margin-left: 45%;
  margin-top: 8%;
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
      <Window>
        <AffirmationText>This is the affirmation statement; more text for the longest possbile version.</AffirmationText>
        <InfoIcon onClick={() => dispatch({type: 'openModal', modalType: 'INFO_MODAL'})}/>
        <FooterNav openModal={(type) => dispatch({type: 'openModal', modalType: type})} />
      </Window>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
