import {affirmationRef, affirmationCategoryRef, categoryArray} from '../../firebase'

export const loadAffirmations = payload => {
  return (dispatch, getState) => {
    dispatch(loadAffirmationsStart())
    let affirmations = []
    affirmationRef.once('value', snapshot => {
      for (const affirmationData in snapshot.val()) {
        affirmations.push(snapshot.val()[affirmationData])
      }
      dispatch(loadAffirmationsEnd())
      if (payload.random === true) {
        dispatch(setRandomAffirmation(affirmations))
      }
    })
  }
}

const setRandomAffirmation = affirmations => {
  let randomNum = Math.floor((Math.random() * affirmations.length))
  return {
    type: 'SET_AFFIRMATION',
    text: affirmations[randomNum].affirmation,
    category: affirmations[randomNum].category
  }
}

const loadAffirmationsStart = () => {
  return {
    type: 'LOAD_AFFIRMATIONS_START'
  }
}

const loadAffirmationsEnd = () => {
  return {
    type: 'LOAD_AFFIRMATIONS_END'
  }
}