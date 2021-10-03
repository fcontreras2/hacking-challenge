# Hacking Challenge 2021

El presente repositorio contiene el código fuente del Hacking Challenge Rimac. Aplicando las condiciones establecidas en el reto mediante el Figma.

Ingresa al siguiente enlace para ver el resultado de prueba: [https://fcontreras-hacking-challenge.netlify.app/](https://fcontreras-hacking-challenge.netlify.app/)

## Datos de prueba

```
  Usuario 1:
    - Tipo documento: DNI
    - Documento: 12345678
    - Placa: ABC-123

  Usuario 2:
    - Tipo documento: DNI
    - Documento: 87654321
    - Placa: ABC-456
  
  Usuario 3:
    - Tipo documento: CE
    - Documento: 1234567890
    - Placa: 123-ABC

```


## Tecnologías usadas

- React 17 ([create-react-app](http://create-react-app.dev/)) 
- Typescript
- Estilos: Sass (Scss)
- State: (Context)
- Navegación: [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- Formularios: [react-hook-form](https://react-hook-form.com/) / [yup](https://github.com/jquense/yup)
- Peticiones Http: [Axios](https://github.com/axios/axios)
- Backend Mock: https://my-json-server.typicode.com/ 
  - [Archivo JSON](https://github.com/fcontreras2/hacking-challenge/blob/main/db.json)



## Inicio del proyecto

Luego de descarga el proyecto debe descarga las dependencias necesarias para que el proyecto funcione. Ejecutar en la consola el siguiente comando:

` npm install`

**Ejecutar el proyecto**

Luego de haber descargado las dependencias ejercutar lo siente:

` npm start`

El proyecto se ejecutará en la ruta: `http://localhost:3000`


## Organización de proyecto

El proyecto está basado en la configuración de [Create React App](https://create-react-app.dev/). Sin embargo, se ha explicará la organizado de los archivos y carpetas:


### Components

Son los componentes de la aplicación que pueden ser reutilizados en las distintas vistas. Tambien los componentes que se encuentre en esta carpeta no son dependientes del negocio, lo que implica que puede ser reutilizado en otros proyectos.

- Button
- Form (Input, Error, Checkbox, Select)
- Spinner
- Switch

### Pages
La carpeta contiene las paginas del proyecto. En cada archivo contiene la lógica del negocio por vista

- Home
- LoadData
- Congratulations

### Provides

Contendrá los distintos contextos de la aplicación. Para este proyecto solo se tiene el contexto `Order` el cual manejará el estado de los datos de la aplicación

### Services

Representa la capa de conexión con servicios externos mediante http. Actualmente solo se tiene el servicio `useFetch` que nos permitirá conectar con el `Backend Mock`. Ahora si el proyecto requeriría algún tipo de conexión con un servicio externo debe estar colocado en dicha carpeta.

### Shared

Contiene Componentes, Hooks o cualquier otro elemento que puede ser compartido las distintas vistas del proyecto actual. A diferencia los componentes de la carpeta `components`, los componentes acá implementados son compartidos en las distintas vistas del proyecto pero su lógica de negocio está atado al proyecto actual.

  - *ListenerProvider*: Permite la actualización del localstorage mediante la modificación del Context Order.
  - *RouteOutler*: Verificará si existe la información necesaria para poder ingresa a la vista.

