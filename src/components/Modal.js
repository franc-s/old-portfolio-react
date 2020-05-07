import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const SimpleModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay">


        <div className="modal-close">
        <IconButton  >
          <CloseIcon   onClick={() => setShow(false)} className="closeIcon"/>
          </IconButton>
        </div>


        <h1> {children} </h1>



    </div>
  )

  return content
}

export default SimpleModal
