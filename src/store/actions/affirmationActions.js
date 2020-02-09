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
      dispatch(storeAllAffirmations(affirmations))
      dispatch(getCategories())
      if (payload.random === true) {
        dispatch(setRandomAffirmation(affirmations))
      }
    })
  }
}

const storeAllAffirmations = affirmations => {
  return {
    type: 'SET_ALL_AFFS',
    affirmations: affirmations
  }
}

const setRandomAffirmation = affirmations => {
  let randomNum = Math.floor((Math.random() * affirmations.length))
  return {
    type: 'SET_AFF',
    text: affirmations[randomNum].affirmation,
    category: affirmations[randomNum].category
  }
}

const loadAffirmationsStart = () => {
  return {
    type: 'LOAD_AFF_START'
  }
}

const loadAffirmationsEnd = () => {
  return {
    type: 'LOAD_AFF_END'
  }
}

export const getCategories = () => {
  return (dispatch, getState) => {
    let affirmationCategories = []
    dispatch(setAffirmationCategoriesStart())
    affirmationCategoryRef.once('value', snapshot => {
      for (const category in snapshot.val()) {
          affirmationCategories.push(snapshot.val()[category].categoryName)
      }
      dispatch(setAffirmationCategoriesEnd())
      dispatch(setAffirmationCategories(affirmationCategories))
    }) 
  }
}

const setAffirmationCategoriesStart = () => {
  return {
    type: 'SET_AFF_CAT_START',
    isCategoryLoading: true
  }
}

const setAffirmationCategoriesEnd = () => {
  return {
    type: 'SET_AFF_CAT_END',
    isCategoryLoading: false
  }
}

const setAffirmationCategories = categories => {
    return {
      type: 'SET_AFF_CAT',
      affirmationCategories: categories
    }
}

export const changeSameCategory = () => {
  return (dispatch, getState) => {
    let matches = getState().allAffirmations.filter( affirmation => affirmation.category === getState().currentAffirmation.category)
    let randomNum = Math.floor((Math.random() * matches.length))
    dispatch(setAffirmation({text: matches[randomNum].affirmation, category: matches[randomNum].category}))
  }
}

const setAffirmation = payload => {
  return {
    type: 'CHANGE_AFF_SAME_CAT',
    payload
  }
}