# OSINTfromEverywhere
## Navegación y Búsqueda de Usuarios con React Native

Este repositorio contiene una implementación básica de navegación en una aplicación móvil desarrollada con React Native, con la funcionalidad de búsqueda y visualización de datos obtenidos de la API pública "randomuser.me". La aplicación permite a los usuarios buscar y filtrar resultados en tiempo real, mostrando una lista de usuarios con información personal.

### Funcionalidad Clave

1. **Búsqueda y Filtrado de Usuarios:**
   - La aplicación cuenta con una barra de búsqueda (`TextInput`) que permite a los usuarios ingresar una consulta para filtrar los resultados en tiempo real.
   - Al modificar el contenido del campo de búsqueda, se invoca la función `handleSearch`, que filtra los datos completos en función de la consulta ingresada y actualiza la lista de usuarios mostrados (`data`) con los resultados filtrados.

2. **Obtención de Datos desde "randomuser.me":**
   - El componente utiliza el ciclo de vida de React (`useEffect`) para realizar una llamada a la API de "randomuser.me" cuando el componente es montado (`[]` como segundo argumento).
   - Los datos obtenidos de la API se almacenan en los estados `data` y `fullData`, lo que permite mantener una copia de los datos originales sin filtrar.

3. **Interfaz de Usuario (UI):**
   - La interfaz de usuario incluye una barra de búsqueda (`TextInput`) y un botón de búsqueda (`TouchableOpacity`) representado por el icono de una lupa.
   - Los datos de los usuarios se presentan en una lista (`FlatList`) donde cada elemento muestra información relevante, como nombres, edad, correo electrónico, ubicación, etc. Esta información se obtiene del estado `data`.

### Instalación y Uso

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```
git clone https://github.com/Chillis-Associates/OSINTFromEverywhere.git
```

2. Accede a la carpeta del proyecto:

```
cd nombre-del-repositorio o carpeta donde se guardo
```

3. Instala las dependencias necesarias con npm o yarn:

```
npm install
```

o

```
yarn install
```

4. Ejecuta la aplicación en tu dispositivo o emulador:

```
npm start
```

o

```
yarn start
```

La aplicación se abrirá en tu dispositivo o emulador, y podrás buscar y visualizar datos de usuarios obtenidos de la API pública "randomuser.me". Ingresa una consulta en la barra de búsqueda para filtrar los resultados en tiempo real y encontrar usuarios específicos.

Este código proporciona una base funcional para la búsqueda y visualización de datos de usuarios en una aplicación móvil con React Native. Siéntete libre de personalizar y expandir esta implementación según las necesidades específicas de tu proyecto. ¡Esperamos que esta aplicación te resulte útil en tus desarrollos móviles!
