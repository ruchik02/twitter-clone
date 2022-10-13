import React from 'react'
import SignIn from './SigninModal'
import Modal from "react-modal";
const Modals = ({modalIsOpen, setIsOpen}) => {

  return (
    <>
<Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} >
<SignIn/>
</Modal>
    
    </>
  )
}

export default Modals