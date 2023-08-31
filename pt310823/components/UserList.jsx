import React, {useEffect, useState} from 'react'
import axios from 'axios'




const UserList = () => {

    
  const [datosAPI, setDatosAPI] = useState([])

  useEffect(() => {
    llamadaAPI()
  }, [])
  
  const llamadaAPI = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url).then(response=>console.log(response.data))
    .catch(error => console.log('Error al obtener los datos:', error));
  }

  return (
    <div>UserList</div>
  )
}

export default UserList