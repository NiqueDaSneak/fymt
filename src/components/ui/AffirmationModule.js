import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import { useThunkReducer } from 'react-hook-thunk-reducer'
import actions from '../../store/'
import affirmationReducer from '../../store/reducers/affirmationReducer'

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
  const initialState = {
    currentAffirmation: {
      category: '',
      text: ''
    },
    allAffirmations: [],
    isAffirmationLoading: false
  }
  
  const [state, dispatch] = useThunkReducer(affirmationReducer, initialState);

  useEffect(() => {
    dispatch(actions.affirmations.loadAffirmations({random: true}))
  }, [dispatch])

  return(
    <Container>
    <CategoryTitle>{state.currentAffirmation.category}</CategoryTitle>
    <AffirmationText>{state.currentAffirmation.text}</AffirmationText>
      <ButtonContainer>
        <Icon 
          onClick={() => props.openModal('INFO_MODAL')}
          icon='info'/>
        <Icon 
          onClick={() => props.openModal('SETTINGS_MODAL')}
          icon='change'/>
        <Icon 
          onClick={() => props.openModal('SEARCH_MODAL')}
          icon='search'/>
      </ButtonContainer>
      <ButtonContainer>
        <Icon 
          onClick={() => props.openModal('ALERTS_MODAL')}
          icon='alert'/>
        <Icon 
          onClick={() => props.openModal('SETTINGS_MODAL')}
          icon='settings'/>
        <Icon 
          onClick={() => props.openModal('SETTINGS_MODAL')}
          icon='profile'/>
      </ButtonContainer>
    </Container>
  )
}

export default AffirmationModule