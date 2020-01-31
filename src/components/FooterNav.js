import React from 'react'
import styled from 'styled-components'
import Images from '../assets/imgs'

const Container = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  &:nth-of-type(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`
const iconSelector = (props) => {
  if (props.settings) return Images.settings
  if (props.search) return Images.search
  if (props.alert) return Images.alert
}

const Icon = styled.img.attrs(props => ({
  src: iconSelector(props)
}))`
  width: 10vw;
`

const FooterNav = (props) => {
  return(
    <Container>
      <IconContainer onClick={() => props.openModal('SETTINGS_MODAL')}><Icon settings/></IconContainer>
      <IconContainer onClick={() => props.openModal('SEARCH_MODAL')}><Icon search/></IconContainer>
      <IconContainer onClick={() => props.openModal('ALERTS_MODAL')}><Icon alert/></IconContainer>
    </Container>
  )
}

export default FooterNav