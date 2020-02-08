import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import {affirmationRef, affirmationCategoryRef, categoryArray} from '../../firebase'

const CategoryTitle = styled.p`
  font-size: 12pt;
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
  const [currentAffirmation, setCurrentAffirmation] = useState()
  const [allAffirmations, setAllAffirmations] = useState([])
  
  useEffect(() => {
    let affirmations = [...allAffirmations]
    affirmationRef.once('value', (snapshot) => {
      for (const affirmation in snapshot.val()) {
        // console.log(affirmations)
        affirmations.push(snapshot.val()[affirmation])
        // console.log(snapshot.val()[affirmation])
        // setAllAffirmations(affirmations)
        // affirmationCategories.push(snapshot.val()[category].categoryName)
      }
    })
    console.log(affirmations)
    // setAllAffirmations(affirmations)
    // setCurrentAffirmation(allAffirmations[0].affirmation !== undefined ? allAffirmations[0].affirmation : '')   
  }, [])

  return(
    <Container>
    <CategoryTitle>Fitness</CategoryTitle>
    <AffirmationText>{currentAffirmation}</AffirmationText>
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