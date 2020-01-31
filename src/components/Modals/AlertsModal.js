import React from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'
import Switch from '../ui/Switch'
import IntervalChooser from '../ui/IntervalChooser'

const Container = styled.div`
  height: 60%;
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-60%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  border-radius: 30% 30% 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const HeaderIcon = styled.img.attrs(props => ({
  src: Images.alert
}))`
  width: 10vw;
`

const Heading = styled.p`
  width: 80%;
  text-align: justify;
`

const Label = styled.p`
  font-weight: 600;
`

const AlertsModal = props => {
  return(
    <Container active={props.active}>
      <HeaderIcon/>
      <Heading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum mi in diam ultricies pretium. Praesent sed dictum justo. In ac ex nec sapien eleifend vestibulum non ut tellus.</Heading>
      <Label>Set An Interval</Label>
      <Switch />
      <IntervalChooser />
    </Container>
  )
}

export default AlertsModal