# PruebaTecnica310823

**Tarea 1: Configuración Inicial**

Crea un nuevo proyecto React utilizando la herramienta de línea de comandos de React.
<code>npx create-next-app name-app</code>
Instala el paquete axios para manejar las solicitudes HTTP.
<code>npm i axios</code> 
¡¡¡Importante importar axios en el componente!!!

```javascript
import axios from 'axios'
```

**Tarea 2: Llamada API y Mostrar Datos**

Crea un componente funcional llamado UserList.jsx
Agrega un estado utilizando useState para almacenar la lista de usuarios.
Utiliza el efecto useEffect para realizar una solicitud GET a la URL https://jsonplaceholder.typicode.com/users al montar el componente.
```javascript
  useEffect(() => {
    llamadaAPI()
  }, [])
  
  const llamadaAPI = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url).then(response=>console.log(response.data)) //CAMBIAR CONSOLELOG POR LA VARIABLE DE ESTADO
    .catch(error => console.log('Error al obtener los datos:', error));
  }
```
Almacena los datos de usuarios en el estado.
```javascript
  const [datosAPI, setDatosAPI] = useState([])

  useEffect(() => {
    llamadaAPI()
  }, [])
  
  const llamadaAPI = () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url).then(response=>setDatosAPI(response.data))
    .catch(error => console.log('Error al obtener los datos:', error));
  }
```
Renderiza la lista de usuarios en una lista utilizando elementos <ul> y <li>.
```javascript
// Crear const para recorrer el array de datos que nos llegan y poder sacar solo el nombre y email.
  const listaUsuarios = datosAPI.map((elementoActual)=>{
    return(
        <>
        <ul key={elementoActual.id}>
            <li style={{backgroundColor: "lightgreen"}}>
                {elementoActual.name} {elementoActual.email} 
                <UserModal datosUsuario={elementoActual}></UserModal>
            </li>
        </ul>
        </>
    )
  })
// llamar en el return a la const listaUsuarios
  return (
    <>
    <div>UserList</div>
    {listaUsuarios}
    </>
  )
  ```
Muestra solo el nombre y el correo electrónico de cada usuario.

**Tarea 3: Uso de Modal**

Instala el paquete react-modal.
--> Entrar en ANT --> development --> usage whit Next
<code> npm install antd --save </code>
Crea un componente funcional llamado UserModal.
*¡¡Importante cambiar el nombre de App por el nombre del componente tanto en la función como al exportar abajo. 
¡¡ e importar componente donde vaya  a ser usado
Dentro de UserModal, utiliza useState para manejar el estado de si el modal está abierto o cerrado.
--> El propio modal ya tiene esta función asi que directamente se reutiliza (está hecho)
Crea un botón "Detalles" junto a cada usuario en la lista.
--> añadimos el modal dentro del return de <ul> <li>

```javascript
  const listaUsuarios = datosAPI.map((elementoActual)=>{
    return(
        <>
        <ul key={elementoActual.id}>
            <li style={{backgroundColor: "lightgreen"}}>
                {elementoActual.name} {elementoActual.email} 
                <UserModal datosUsuario={elementoActual}></UserModal>
            </li>
        </ul>
        </>
    )
  })
```
Al hacer clic en el botón "Detalles", abre el modal y muestra más información sobre el usuario, como nombre, correo electrónico, teléfono, etc.
Agrega un botón "Cerrar" dentro del modal para cerrarlo.


**Tarea 4: Uso de Props en Componentes**

Crea un nuevo componente funcional llamado UserInfo.
¡¡importar!!
Pasa los datos de un usuario como props al componente UserInfo desde el componente UserModal.
```javascript
// en componente UserModal
<UserInfo datosUsuario={datosUsuario} ></UserInfo>

//en componente UserInfo:
const UserInfo = ({datosUsuario}) => {
  return
```
Dentro del componente UserInfo, muestra los detalles del usuario utilizando las props recibidas.

**Tarea 5 (Bono): Estilos con CSS**

Agrega estilos para mejorar la apariencia de la lista de usuarios y el modal.
Estiliza los elementos de la lista (<li>) para que tengan un fondo claro y un borde.
```javascript
 <li style={{backgroundColor: "lightgreen"}}>
                {elementoActual.name} {elementoActual.email} 
                <UserModal datosUsuario={elementoActual}></UserModal>
            </li>
```
Estiliza el modal para que tenga un fondo blanco y aparezca centrado en la pantalla.
