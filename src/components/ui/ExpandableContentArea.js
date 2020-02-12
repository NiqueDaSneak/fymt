import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import actions from '../../store'
import { AffirmationContext } from '../hoc/Store'
import Images from '../../assets/imgs'

const BackgroundImage = styled.div`
  height: ${props => props.fullScreen ? '100%' : '58%'};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 1s ease-in-out;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  flex-direction: column;
`

const ContentCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
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
  width: 16vw;
  height: 16vw;
  background-color: white;
`

const ExpandableContentArea = () => {
  const [affirmationState, affirmationDispatch] = useContext(AffirmationContext)
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
      <ContentCard>
        <CategoryTitle>{affirmationState.currentAffirmation.category}</CategoryTitle>
        <AffirmationText>{affirmationState.currentAffirmation.text}</AffirmationText>
        <Icon isExpand={isExpand} onClick={() => clickHandler()}/>
      </ContentCard>
    </BackgroundImage>
  )
}

export default ExpandableContentArea