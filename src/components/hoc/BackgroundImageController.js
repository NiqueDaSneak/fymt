import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  top:0;  left:0; bottom:0;  right:0;
  background-image: ${props => `url(${props.image})`};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
`
const BackgroundImageController = props => {
  const images = [Images.background.shanghai, Images.background.london, Images.background.newyork]
  const [imageValue, setImageValue] = useState(images[0])
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    if (pageLoaded === false) {
      setImageValue(images[Math.floor(Math.random() * 3)])
      setPageLoaded(true)
    }
  }, [pageLoaded, images]);

  return(
    <Container image={imageValue}>
      {props.children}
    </Container>
  )
}

export default BackgroundImageController