import React from 'react'
import Modal from './Modal.js'



function DeleteBadgeModal(props){
  if(!props.isOpen){
    return null
  }

  return(
    <Modal
      isOpen={props.isOpen}
      onClose={props.onCloseModal}>
        <div className="DeleteBadgeModal">
          <h1>Are you sure?</h1>
          <p>You are about to delete this badge.</p>
        </div>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
          <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
        </div>
    </Modal>
  )
}


export default DeleteBadgeModal
