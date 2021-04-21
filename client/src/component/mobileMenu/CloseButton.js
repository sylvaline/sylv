import React from 'react'

function CloseButton({closeMenu}) {
  return (
    <div className="toogle_button_close">
      <button onClick={closeMenu}>close</button>
    </div>
  ) 
}

export default CloseButton
