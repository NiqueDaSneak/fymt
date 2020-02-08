import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions";
import {openModal, closeModal} from './actions/modalActions'
import {loadAffirmations} from './actions/affirmationActions'

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
    loadAffirmations: loadAffirmations
  }
}

export default actions