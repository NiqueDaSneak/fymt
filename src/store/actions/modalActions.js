export const openModal = modalType => {
  return {
    type: 'OPEN_MODAL', 
    modalType: modalType
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL', 
  }
}