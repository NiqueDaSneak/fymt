import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Images from '../../assets/imgs'

const Container = styled.div`
  height: ${props => props.fullScreen ? '100vh' : '48vh'};
  width: 100vw;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  transition: height 1s ease-in-out;
  background-image: url(${Images.background.shanghai2});
  background-position: center;
  /* position: absolute;
  overflow: hidden;
  top:0;  left:0; bottom:0;  right:0;
  background-image: ${props => `url(${props.image})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`
const Icon = styled.img.attrs(props => ({
  src: props.isExpand ? Images.expand : Images.minimize
}))`
  width: 16vw;
`

const BackgroundImageController = props => {
  const images = [Images.background.shanghai, Images.background.london, Images.background.newyork]
  // const [imageValue, setImageValue] = useState(images[0])
  // const [pageLoaded, setPageLoaded] = useState(false)

  const [isFullScreen, setFullScreen] = useState(false)
  const [isExpand, setIcon] = useState(true)
  // useEffect(() => {
  //   if (pageLoaded === false) {
  //     setImageValue(images[Math.floor(Math.random() * 3)])
  //     setPageLoaded(true)
  //   }
  // }, [pageLoaded, images]);
  const clickHandler = () => {
    setFullScreen(!isFullScreen)
    setIcon(!isExpand)
  }
  return(
    <Container fullScreen={isFullScreen}>
      <Icon isExpand={isExpand} onClick={() => clickHandler()}/>
    </Container>
    // <Container image={imageValue}>
    //   {props.children}
    // </Container>
  )
}

export default BackgroundImageController