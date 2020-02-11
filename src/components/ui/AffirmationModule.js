import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import actions from '../../store/'
import {AffirmationContext, ModalContext} from '../hoc/Store'

const CategoryTitle = styled.p`
  font-size: 12pt;
  transition: all 4s ease-in-out;
`

const Container = styled.div`
  height: 36vh;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const AffirmationText = styled.p`
  text-align: center;
  width: 90%;
  font-weight: 600;
  font-style: italic;
  font-size: 16pt;
  height: 10vh;
`

const Icon = styled.img.attrs(props => ({
  src: Images[props.icon]
}))`
  width: 10vw;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5vh;
`

const AffirmationModule = (props) => {
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)
  const [modalState, modalDispatch] = useContext(ModalContext)

  useEffect(() => {
    affirmationDispatch(actions.affirmations.loadAffirmations({random: true}))
  }, [affirmationDispatch])
  
  return(
    <Container>
      <CategoryTitle>{affirmationState.currentAffirmation.category}</CategoryTitle>
      <AffirmationText>{affirmationState.currentAffirmation.text}</AffirmationText>
        <ButtonContainer>
          <Icon 
            onClick={() => modalDispatch(actions.modal.open('INFO_MODAL'))}
            icon='info'/>
          <Icon 
            onClick={() => affirmationDispatch(actions.affirmations.changeSameCategory())}
            icon='change'/>
          <Icon 
            onClick={() => modalDispatch(actions.modal.open('SEARCH_MODAL', affirmationState.allCategories))}
            icon='search'/>
        </ButtonContainer>
        <ButtonContainer>
          <Icon 
            onClick={() => modalDispatch(actions.modal.open('ALERTS_MODAL'))}
            icon='alert'/>
          <Icon 
            onClick={() => modalDispatch(actions.modal.open('SETTINGS_MODAL'))}
            icon='settings'/>
          <Icon 
            onClick={() => modalDispatch(actions.modal.open('SETTINGS_MODAL'))}
            icon='profile'/>
        </ButtonContainer>
      </Container>
  )
}

export default AffirmationModule