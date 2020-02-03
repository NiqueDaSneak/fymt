import React, { useState } from 'react'
import styled from 'styled-components'
import { useSwipeable, Swipeable } from 'react-swipeable'

const Container = styled.div`
  /* width: 100%;
  height: 40%; */
  /* background-color: ${props => props.color}; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Module = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: ${props => props.color};
`

const Dots = styled.div`
  width: 17vw;
  height: 3vh;
  background-color: green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 14px 14px 0 0;
  span {
    width: 13%;
    height: 38%;
    background-color: grey;
    display: inline-block;
    border-radius: 10px;
}
`

const colorMap = ['green', 'red', 'blue','pink']

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
  
  const handlers = useSwipeable({ 
    // onSwiped: (eventData) => toggleBackground(index)
    onSwipedRight: increment,     // Fired after RIGHT swipe: 
    onSwipedLeft: decrement,      // Fired after LEFT swipe
  })

  return(
    <Container>
      <Dots>
        <span></span>
        <span></span>
        <span></span>
      </Dots>
      <Module color={color} {...handlers}>
        
      </Module>
    </Container>
  )
}

export default Carosel