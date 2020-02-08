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
    //   case 'getAffirmationCategories':
    //     console.log('fired')
    //     let affirmationCategories = []
    //       affirmationCategoryRef.once('value', function(snapshot) {
    //         for (const category in snapshot.val()) {
    //           affirmationCategories.push(snapshot.val()[category].categoryName)
    //         }
    //       })        
    //       console.log('affirmationCategories', affirmationCategories)
    //     return {...state, affirmationCategories}
      case 'test':
        console.log('in reducer')
        return {...state}
      default:
        throw new Error();
        }
  }
  
  export default reducer