import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions";
import {openModal, closeModal} from './actions/modalActions'
import {loadAffirmations, getCategories, changeSameCategory} from './actions/affirmationActions'

const actions = {
  admin: {
    getAffirmationCategories: getAffirmationCategories,
    submitNewAffirmation: submitNewAffirmation
  },
  modal: {
    open: openModal,
    close: closeModal
  },
  affirmations: {
    loadAffirmations: loadAffirmations,
    getCategories: getCategories,
    changeSameCategory: changeSameCategory
  }
}

export default actions