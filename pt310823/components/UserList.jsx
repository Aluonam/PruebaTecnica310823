import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserModal from './UserModal'


const UserList = () => {

    
  const [datosAPI, setDatosAPI] = useState([])

  useEffect(() => {
    llamadaAPI()
  }, [])
  
  const llamadaAPI = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url).then(response=>setDatosAPI(response.data))
    .catch(error => console.log('Error al obtener los datos:', error));
  }

  const listaUsuarios = datosAPI.map((elementoActual)=>{
    return(
        <>
        <ul key={elementoActual.id}>
            <li>{elementoActual.name} {elementoActual.email} <UserModal datosUsuario={elementoActual}></UserModal></li>
        </ul>
        </>
    )
  })

  return (
    <>
    <div>UserList</div>
    {listaUsuarios}
    </>
  )
}

export default UserList