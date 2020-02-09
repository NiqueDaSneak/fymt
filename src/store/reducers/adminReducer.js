import {affirmationRef, affirmationCategoryRef, categoryArray} from '../../firebase'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_AFF_CAT_START':
      return {...state, isAffirmationCategoryLoading: true}
    case 'SET_AFF_CAT_END':
      return {...state, isAffirmationCategoryLoading: false}
    case 'SET_AFF_CAT':
      return {...state, affirmationCategories: action.affirmationCategories}
    case 'SUBMIT_NEW_AFF_START':
      return {...state, newAffirmationIsLoading: action.isLoading}
    case 'SUBMIT_NEW_AFF_END':
      return {...state, newAffirmationIsLoading: action.isLoading}
    default:
      throw new Error();
  }
}
  
export default reducer