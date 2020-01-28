import React from 'react'
import styled from 'styled-components'
import Images from '../assets/imgs'
import Switch from './Switch'
import IntervalChooser from './IntervalChooser'
import TimeChooser from './TimeChooser'
const Container = styled.div`
  height: 40%;
  width: 100%;
  background-color: red;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-40%;'};
  left: 0;
  transition: all 1s ease-in-out;
  z-index: 2;
  border-radius: 30% 30% 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderIcon = styled.img.attrs(props => ({
  src: Images.alert
}))`
  width: 10vw;
`
const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const SingleToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const DateTimeContainer = styled.div``

const AlertsModal = props => {
  return(
    <Container active={props.active}>
      <HeaderIcon/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum mi in diam ultricies pretium. Praesent sed dictum justo. In ac ex nec sapien eleifend vestibulum non ut tellus.</p>
      <ToggleContainer>
        <SingleToggle>
          <p>Set An Interval</p>
          <Switch />
          <IntervalChooser />
        </SingleToggle>
        <SingleToggle>
          <p>Set A Specific Time</p>
          <Switch />
          <TimeChooser />
        </SingleToggle>
      </ToggleContainer>
    </Container>
  )
}

export default AlertsModal