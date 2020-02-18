import React from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'

const Container = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${props => props.active ? 'grey' : 'white'};
  transition: all 1s ease-in-out;
  &:nth-of-type(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`
const iconSelector = (props) => {
  if (props.ocean) return Images.ocean
  if (props.forest) return Images.forest
  if (props.rain) return Images.rain
}

const Icon = styled.img.attrs(props => ({
  src: iconSelector(props)
}))`
  width: 10vw;
`

const SoundToggle = (props) => {
  return(
    <Container>
      <IconContainer active={props.activeAudio === 'ocean'}onClick={() => props.setMp3('ocean')}>
        <Icon ocean/>
        <p>Ocean</p>
      </IconContainer>
      <IconContainer active={props.activeAudio === 'forest'}onClick={() => props.setMp3('forest')}>
        <Icon forest/>
        <p>Forest</p>
      </IconContainer>
      <IconContainer active={props.activeAudio === 'rain'}onClick={() => props.setMp3('rain')}>
        <Icon rain/>
        <p>Rain</p>
      </IconContainer>
    </Container>
    
  )
}

export default SoundToggle