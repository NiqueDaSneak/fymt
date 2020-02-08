import {affirmationRef, affirmationCategoryRef, categoryArray} from '../../firebase'

const reducer = (state, action) => {
  switch (action.type) {
    case 'submitAffirmation':
      return {...state}
    case 'setAffirmationCategoriesStart':
      return {...state, isAffirmationCategoryLoading: true}
    case 'setAffirmationCategoriesEnd':
      return {...state, isAffirmationCategoryLoading: false}
    case 'setAffirmationCategories':
      return {...state, affirmationCategories: action.affirmationCategories}
    case 'submitNewAffirmationStart':
      return {...state, newAffirmationIsLoading: action.isLoading}
    case 'submitNewAffirmationEnd':
      return {...state, newAffirmationIsLoading: action.isLoading}
    default:
      throw new Error();
  }
}
  
export default reducer