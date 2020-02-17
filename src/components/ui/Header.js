import React, {useContext} from 'react'
import styled, {keyframes} from 'styled-components'
import { GlobalContext } from '../hoc/Store'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  height: ${props => props.visible ? '10%' : '0%'};
  width: 20%;
  animation: ${fadeIn} 2s linear 0s 1 normal;
  /* animation-name: ${fadeIn};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal; */
  background-color: white;
  transition: height 1s ease-in-out;
  border-radius: 16px;
  background: #606564;
  box-shadow: 5px 5px 11px #414544, -5px -5px 11px #7f8584;
`

const Header = props => {
  const [affirmationState, affirmationDispatch] = useContext(GlobalContext)

  return(
    <Container visible={!affirmationState.fullScreen}></Container>
  )
}

export default Header