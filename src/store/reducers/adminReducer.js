import {affirmationRef, affirmationCategoryRef, categoryArray} from '../../firebase'

const reducer = (state, action) => {
    switch (action.type) {
      case 'submitAffirmation':
        affirmationCategoryRef.orderByChild("categoryName").equalTo(action.affirmationCategory).once("value",snapshot => {
          if (snapshot.exists()){
            affirmationRef.push().update({affirmation: action.affirmationText, category: action.affirmationCategory})
            .then( err => {
              if (err) {
                // The write failed...
                console.log(err)
                throw new Error();
                } else {
                // Data saved successfully!
                console.log('finished')
                }
  
            })
          } else {
            affirmationCategoryRef.push().update({categoryName: action.affirmationCategory})
            .then( err => {
              if (err) {
                // throw err
              } else {
                // data was saved
                affirmationRef.push().update({affirmation: action.affirmationText, category: action.affirmationCategory})
                .then( err => {
                  if (err) {
                    // The write failed...
                    console.log(err)
                    throw new Error();
                    } else {
                    // Data saved successfully!
                    console.log('finished')
                    }
                })
              }
            
            })
          }
        })
        return {...state}
      case 'setAffirmationCategoriesStart':
        return {...state, isAffirmationCategoryLoading: true}
      case 'setAffirmationCategoriesEnd':
        return {...state, isAffirmationCategoryLoading: false}
      case 'setAffirmationCategories':
        return {...state, affirmationCategories: action.affirmationCategories}
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