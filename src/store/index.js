import { getAffirmationCategories, submitNewAffirmation } from "./actions/adminActions";
import {openModal, closeModal} from './actions/modalActions'

const actions = {
  admin: {
    getAffirmationCategories: getAffirmationCategories,
    submitNewAffirmation: submitNewAffirmation
  },
  modal: {
    open: openModal,
    close: closeModal
  }
}

export default actions