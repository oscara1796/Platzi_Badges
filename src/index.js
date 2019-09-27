// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
//
//
// const container = document.getElementById('app');
//
// container.appendChild(element);
//
// react: análogo de document.createElement
// reactDom: análogo de appendChild
// ReactDOM.render(que, donde);

import React from 'react';
import ReactDOM from 'react-dom';
import App  from './components/App.js'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

// const jsx = <h1> Hello, Platzi Badges  from React!</h1>
// JSX es una extensión de JavaScript creada por Facebook para el uso con
// la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma
// el código generado con React a JavaScript.

// JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más
// legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.
//
// React.createElement recibe 3 argumentos:
//
// El tipo de elemento que estamos creando
// sus atributos o props
// y el children que es el contenido.
// const element = React.createElement(
//   'a',
//   {href: 'https://platzi.com'},
//   'Ir a Platzi')

// Podemos usar atributos y variables como en javascript
// const name = 'Oscar';
// const element = React.createElement('h1', {}, `Hola mi nombre es ${name}`)

// Como hacemos esto en jsx?

//Eso que esta entre llaves nos va permitir introducir variables
// O mas bien nos va a permitir introducir expresiones de javascript
//Si el valor que obtenga esas llaves es false, null, undefined , string vacio
// No se van a representar en pantalla
// const jsx = <h1>Hola soy, {___expresion_js}</h1>

// const jsx = (<div>
//   <h1>Hola soy,Oscar</h1>
//   <p>Soy ingeniero Frontend </p>
// </div>);


// Hacer esto con React.createElement es muy trabajoso

// Ejemplo:

// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1',{},'Elemento creado con createElement'),
//   React.createElement('p',{}, 'Elemento creado con createElement')
// )

const container = document.getElementById('app');


ReactDOM.render(<App/>,container);


// Los componentes en React son bloques de construcción.
// Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y
// puedes construir un website tan pequeño o tan grande como quieras.
// Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

//componentes: unidad mas básica y de la cual saldrán los elementos.
// Elementos: se crean a partir de los componentes.

// ”Componente” vs “elemento
// Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente
// serían los planos para hacer esa casa.


// Identificación de componentes
// Para identificarlos debes hacerte las siguientes preguntas:
//
// ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto
// visual y su funcionalidad
//
// ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y
// permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.
