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

const setAffirmationCategories = categories => {
    console.log('categories', categories)
    return {
      type: 'setAffirmationCategories',
      affirmationCategories: categories
    }
}

export const submitNewAffirmation = payload => {
  return (dispatch, getState) => {
    dispatch(submitNewAffirmationStart())
    affirmationCategoryRef.orderByChild("categoryName").equalTo(payload.category).once("value",snapshot => {
      // IF CATEOGRY EXISTS APPEND NEW AFFIRMATION TO IT
      if (snapshot.exists()){
        affirmationRef.push().update({affirmation: payload.text, category: payload.category})
        .then( err => {
          if (err) {
            // The write failed...
            console.log(err)
            throw new Error();
            } else {
            // Data saved successfully!
            console.log('finished')
            dispatch(submitNewAffirmationEnd())
            dispatch(getAffirmationCategories())
            }

        })
      } else {
        // ELSE CREATE NEW CATEGORY
        affirmationCategoryRef.push().update({categoryName: payload.category})
        .then( err => {
          if (err) {
            // throw err
          } else {
            // THEN ADD THE NEW AFFIRMATION
            affirmationRef.push().update({affirmation: payload.text, category: payload.category})
            .then( err => {
              if (err) {
                // The write failed...
                console.log(err)
                throw new Error();
                } else {
                // Data saved successfully!
                console.log('finished')
                dispatch(submitNewAffirmationEnd())
                dispatch(getAffirmationCategories())
                }
            })
          }
        })
      }
    })
  }
}
const submitNewAffirmationStart = () => {
  return{
    type: 'submitNewAffirmationStart',
    isLoading: true
  }
}
const submitNewAffirmationEnd = () => {
  return{
    type: 'submitNewAffirmationEnd',
    isLoading: false
  }
}