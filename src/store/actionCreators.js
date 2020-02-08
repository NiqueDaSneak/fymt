import {affirmationRef, affirmationCategoryRef, categoryArray} from '../firebase'

// case 'getAffirmationCategories':
        // console.log('fired')
        // let affirmationCategories = []
        //   affirmationCategoryRef.once('value', function(snapshot) {
        //     for (const category in snapshot.val()) {
        //       affirmationCategories.push(snapshot.val()[category].categoryName)
        //     }
        //   })        
        //   console.log('affirmationCategories', affirmationCategories)
        // return {...state, affirmationCategories}

export const getAffirmationCategories = () => {
    // dispatch({type: 'test'})
    // console.log('in action creator')
    return (dispatch, getState) => {
      dispatch(setAffirmationCategoriesStart())
      let affirmationCategories = []
        affirmationCategoryRef.once('value', snapshot => {
          for (const category in snapshot.val()) {
              affirmationCategories.push(snapshot.val()[category].categoryName)
          }
          console.log('affirmation categories in action', affirmationCategories)
          dispatch(setAffirmationCategoriesEnd())
          dispatch(setAffirmationCategories(affirmationCategories))
        }) 
        
    //   const { count } = getState();
   
    //   if (count % 2 !== 0) {
        // dispatch();
        // dispatch(test())
    //   }
    }
  }

const setAffirmationCategoriesStart = () => {
  return {
    type: 'setAffirmationCategoriesStart',
    isAffirmationCategoryLoading: true
  }
}

const setAffirmationCategoriesEnd = () => {
  return {
    type: 'setAffirmationCategoriesEnd',
    isAffirmationCategoryLoading: false
  }
}

function setAffirmationCategories(categories) {
    console.log('categories', categories)
    return {
      type: 'setAffirmationCategories',
      affirmationCategories: categories
    }
}