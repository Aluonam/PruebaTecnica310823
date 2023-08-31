import React from 'react'

const UserInfo = ({datosUsuario}) => {
  return (
    <>
        <p>{datosUsuario.username}</p>
        <p>{datosUsuario.address.street}</p>
        <p>{datosUsuario.phone}</p>
        <button onClick={()=>{handleCancel()}}></button>
    </>
  )
}

export default UserInfo