import React from 'react'

export const Child = ({name, addMessage, setMsg}) => {

    const sendMessage=()=>{
        addMessage('Es es el msj del HIJO!');
    }

    const changeMessage=()=>{
        setMsg('He enviado otro mensaje!');
    }

  return (
    <div>
        <hr />
        Child - {name}
        <div>
            <button onClick={sendMessage}>
                Enviar Msj
            </button>
        </div>
        <br />
        <div>
            <button onClick={changeMessage}>
                Impimir Mensaje
            </button>
        </div>
    </div>
  )
}
