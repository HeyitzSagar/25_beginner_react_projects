import React, { useState } from 'react'

const Button = () => {
  const [toggle, settoggle] = useState(true);
  function handlebutton() {
    settoggle(!toggle);
  }
    return (
    <div>
        <button 
        style={{background: toggle ? "red" : "Green"}}
        onClick={handlebutton}>{toggle ? "True" : "False"}</button>
    </div>
  )
}

export default Button