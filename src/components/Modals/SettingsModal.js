import React, { useState, useContext } from 'react'
import styled, {keyframes, css} from 'styled-components'
import Images from '../../assets/imgs'
import SoundToggle from '../ui/SoundToggle'
import Switch from '../ui/Switch'
import Sound from 'react-sound'
import { GlobalContext } from '../hoc/Store'
import actions from '../../store/'

const Container = styled.div`
  height: 40%;
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-50%;'};
  left: 0;
  transition: all .6s ease-in-out;
  z-index: 2;
  border-radius: 30% 30% 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10%;
  p {
    font-weight: 600;
  }
`

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const HeaderIcon = styled.img.attrs(props => ({
  src: Images.settings
}))`
  width: 10vw;
  animation: ${props => props.isLoading ? css`${loadingAnimation} 1s linear 0s infinite normal` : null};
  /* animation-name: ${loadingAnimation};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal; */
`

const SettingsModal = props => {
  // const [soundActive, setSoundActive] = useState(false)
  const [state, dispatch] = useContext(GlobalContext)

  const switchHandler = status => {
    dispatch(actions.toggleSoundActive(status))
    dispatch(actions.setWhichMp3())
  }

  return(
    <Container active={props.active}>
      <HeaderIcon isLoading={state.soundIsLoading}/>
      <p>Toggle Sound</p>
      <Switch onChange={status => switchHandler(status)}/>
      <p>Choose A Sound Option</p>
      <SoundToggle activeAudio={state.whichMp3Active} setMp3={val => dispatch(actions.setWhichMp3(val))}/>
      <Sound
        url={'ocean.mp3'}
        playStatus={state.whichMp3Active === 'ocean' && state.soundActive === true ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={0 /* in milliseconds */}
        // onLoading={() => console.log('loading' + state.soundActive)}
        // onPlaying={() => console.log('playing' + state.soundActive)}
        onFinishedPlaying={e => console.log(e)} />
      <Sound
        url={'forest.mp3'}
        playStatus={state.whichMp3Active === 'forest' && state.soundActive === true ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={0}
        // onLoading={() => dispatch(setSoundIsLoading(true))}
        // onPlaying={() => dispatch(setSoundIsLoading(false))}
        onFinishedPlaying={e => console.log(e)} />
    </Container>
  )
}

export default SettingsModal