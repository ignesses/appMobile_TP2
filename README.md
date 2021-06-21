# Trabajo Práctico 2 - IGNACIO ESSES

Crear una app de React usando create-react-app con las siguientes características:

- [x] App creada con create-react-app
- [x] Debe pedir información (fetch) a una API
- [x] Se debe mostrar de alguna manera esa información
- [x] Buen uso de hooks (uso obligatorio de useState y useEffect)
- [x] Utilizar Styled-Components para los estilos
- [x] Al menos 2 pages distintas ruteadas con React-Router
- [x] Código subido a GitHub
- [x] App deployada a Vercel
- [x] Recursos (imágenes y fonts) locales

Se entregará el código de GitHub y el link de Vercel

Características extra para poder llegar al 10:

- [ ] Animaciones en el CSS usando transitions
- [x] Buena UX/UI
- [ ] Filtrar la información de alguna manera
- [ ] Features que sumen a la app (como los favoritos que hicimos en Pokemon)
- [ ] Loaders para el request
- [x] Página de error

## APP Deployada en Vercel

Video 19/05

## Creación React App con create-react-app

https://create-react-app.dev/docs/getting-started/

```bash
npx create-react-app .
```

### Una vez creada para iniciar el desarrollo es necesario usar el siguiente comando

```bash
yarn start
```

### Agrego siguientes configuraciones para el reseteo del HTML

```css
* {
  box-sizing: border-box;
  margin: 0;
}
```

```css
body {
  text-rendering: optimizeLegibility;
}
```

### Elimino paquetes que no voy a usar

```bash
yarn remove @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
```

### Agrego 2 librerías

#### React Router

https://reactrouter.com/

```bash
yarn add react-router-dom
```

#### React Styled Components

https://styled-components.com/

```bash
yarn add styled-components
```

### Una vez bajado de git, lo primero que hay que hacer es ejecutar

```bash
yarn install
```

```bash
yarn start
```

# Extensiones

vscode-styled-components
