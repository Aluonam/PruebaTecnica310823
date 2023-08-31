import React from 'react'

const UserInfo = ({datosUsuario}) => {
  return (
    <>
    <div style={{color:"blue"}}>
        <p>{datosUsuario.username}</p>
        <p>{datosUsuario.address.street}</p>
        <p>{datosUsuario.phone}</p>
        <button onClick={()=>{handleCancel()}}></button>
    </div>
    </>
  )
}

export default UserInfo