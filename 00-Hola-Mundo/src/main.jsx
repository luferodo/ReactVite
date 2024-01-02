import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

//es el div root del html en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'))

// // creo el componente que es una funcion que retorna un elemento
// const Button = ({text}) => {
//     return(
//         <button>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
//         </svg>

//             {text}
//         </button>
//     )
// }

root.render(
    // <React.Fragment>
    //    <Button text="Thi is Boton"/>
    // </React.Fragment>
    <App />

)
