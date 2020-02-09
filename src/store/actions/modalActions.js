export const openModal = (modalType, modalData) => {
  return {
    type: 'OPEN_MODAL', 
    modalType: modalType,
    modalData: modalData
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL', 
  }
}