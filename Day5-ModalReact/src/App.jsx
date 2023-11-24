

import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {

  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  

  return (
    
      <div className='App'>
      Front Beginners- Modal
      <div> 
        <button onClick={() => setOpenModal(true)}>Open Modal</button> 
      <button onClick={() => setOpenModal2(true)}>Open Modal2</button> 
      </div>

     
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}> 
    Conteúdo do Modal
       </Modal>

       <Modal isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}> 
    Conteúdo do Modal2
       </Modal>




      </div>



 
     
    
  )
}

export default App
