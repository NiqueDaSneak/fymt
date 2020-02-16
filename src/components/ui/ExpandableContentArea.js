import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import actions from '../../store'
import { GlobalContext } from '../hoc/Store'
import Images from '../../assets/imgs'

const BackgroundImage = styled.div`
  height: ${props => props.fullScreen ? '100%' : '20%'};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  flex-direction: column;
`

const ContentCard = styled.div`
  background-color: #ffffff6b;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${props => props.fullScreen ? '20%' : '100%'};
  transition: height 1s ease-in-out;
  padding-top: 4%;
  padding-bottom: 4%;
`

const CategoryTitle = styled.p`
  font-size: 12pt;
  transition: all 4s ease-in-out;
`

const AffirmationText = styled.p`
  font-weight: 600;
  font-weight: 600;
  font-style: italic;
  font-size: 16pt;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 10%;
`

const Icon = styled.img.attrs(props => ({
  src: props.isExpand ? Images.expand : Images.minimize
}))`
  width: 10vw;
  height: 10vw;
`

const ExpandableContentArea = () => {
  const [affirmationState, affirmationDispatch] = useContext(GlobalContext)
  const images = [Images.background.shanghai, Images.background.london, Images.background.newyork]
  const [imageValue, setImageValue] = useState(images[0])
  const [pageLoaded, setPageLoaded] = useState(false)
  const [isExpand, setIcon] = useState(true)

  useEffect(() => {
    if (pageLoaded === false) {
      setImageValue(images[Math.floor(Math.random() * 3)])
      setPageLoaded(true)
    }
  }, [pageLoaded, images])

  const clickHandler = () => {
    affirmationDispatch(actions.affirmations.toggleFullScreen())
    setIcon(!isExpand)
  }

  return(
    <BackgroundImage image={imageValue} fullScreen={affirmationState.fullScreen}>
      <ContentCard fullScreen={affirmationState.fullScreen}>
        <CategoryTitle>{affirmationState.currentAffirmation.category}</CategoryTitle>
        <AffirmationText>{affirmationState.currentAffirmation.text}</AffirmationText>
        <Icon isExpand={isExpand} onClick={() => clickHandler()}/>
      </ContentCard>
    </BackgroundImage>
  )
}

export default ExpandableContentArea