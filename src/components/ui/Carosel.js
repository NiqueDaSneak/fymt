import React, { useState } from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import FooterNav from './FooterNav'

const Container = styled.div`
  /* width: 100%;
  height: 40%; */
  /* background-color: ${props => props.color}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`

const Module = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: ${props => props.color};
`

const Dots = styled.div`
  width: 24vw;
  /* height: 3vh;  */
  /* background-color: green; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border-radius: 14px 14px 0 0; */
  span {
    width: 4vw;
  height: 4vw;
    background-color: grey;
    display: inline-block;
    border-radius: 10px;
}
`

const colorMap = ['green', 'red', 'blue','pink']

const ModalNav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  background-color: white;
  padding-top: 4%;
  height: 2vh;
  padding-bottom: 2%;
`

const Chevron = styled.img.attrs({
  src: Images.chevron
})`
  width: 10vw;
  transform: ${props => props.left ? 'rotateY(180deg)' : null};
`

const CategoryTitle = styled.p``

const AffirmationModule = styled.div`
  height: 40vh;
  justify-content: space-around;
    background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 4%; */
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  &:nth-of-type(2) {
    /* border-left: 1px solid black;
    border-right: 1px solid black; */
  }
`

// const BlurredCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffffff6b;
//   backdrop-filter: blur(8px);
//   height: 30%;
//   justify-content: space-evenly;
//   box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
// `

const AffirmationText = styled.p`
  text-align: center;
  width: 90%;
  font-weight: 600;
  font-style: italic;
  margin-top: 4%;
  font-size: 16pt;
`

const InfoIcon = styled.img.attrs(props => ({
  src: Images.question
}))`
  width: 10%;
  margin-top: 10%;
`

const Icon = styled.img.attrs(props => ({
  src: iconSelector(props)
}))`
  width: 10vw;
  /* margin-bottom: 20%; */
  &:nth-of-type(2), &:nth-of-type(5) {
    /* margin-left: 25%;
    margin-right: 25%; */
    /* border-left: 1px solid black;
    border-right: 1px solid black; */
  }
`

const iconSelector = (props) => {
  if (props.settings) return Images.settings
  if (props.search) return Images.search
  if (props.alert) return Images.alert
}

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 10%; */
/* width: 40%; */
`

const Carosel = props => {
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState(colorMap[index])

  const toggleBackground = (index) => {
    setIndex(index + 1)
    if (index === 2) {
      setIndex(0)
    }
    setColor(colorMap[index])
  }
const increment = () => {
  setIndex(index + 1)
  if (index === 2) {
    setIndex(0)
  }
  setColor(colorMap[index])
}

  const decrement = () => {
    setIndex(index - 1)
    if (index === 0) {
      setIndex(2)
    }
    setColor(colorMap[index])
  }
  
  // const handlers = useSwipeable({ 
  //   // onSwiped: (eventData) => toggleBackground(index)
  //   onSwipedRight: increment,     // Fired after RIGHT swipe: 
  //   onSwipedLeft: decrement,      // Fired after LEFT swipe
  // })

  return(
    <Container>
      <ModalNav>
        <Chevron left />
        <Dots>
          <span></span>
          <span></span>
          <span></span>
        </Dots>
        <Chevron />
      </ModalNav>
      {/* <Module color={color}> */}
                {/* <BlurredCard> */}
          <AffirmationModule>
            <CategoryTitle>Fitness</CategoryTitle>
            <AffirmationText>This is the affirmation statement; more text for the longest possbile version.</AffirmationText>
            <InfoIcon onClick={() => dispatch({type: 'openModal', modalType: 'INFO_MODAL'})}/>
              <ButtonContainer>
                <Icon settings/>
                <Icon search/>
                <Icon alert/>
                <Icon settings/>
                <Icon search/>
                <Icon alert/>
              </ButtonContainer>
            {/* <IconContainer onClick={() => props.openModal('SETTINGS_MODAL')}><Icon settings/></IconContainer>
            <IconContainer onClick={() => props.openModal('SEARCH_MODAL')}><Icon search/></IconContainer>
            <IconContainer onClick={() => props.openModal('ALERTS_MODAL')}><Icon alert/></IconContainer> */}
          </AffirmationModule>
        {/* </BlurredCard> */}
        {/* <FooterNav openModal={(type) => dispatch({type: 'openModal', modalType: type})} /> */}
      {/* </Module> */}
    </Container>
  )
}

export default Carosel

