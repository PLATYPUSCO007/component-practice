import React from 'react'

const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del Fénix",
    "Harry Potter y el misterio del príncipe",
    "Harry Potter y las Reliquias de la Muerte"
];

export const SecondComponent = () => {
  return (
    <div>
        <hr width="100%"/>
        <ul>
        {
            (books.length > 0) ? (
                books.map((result, index)=> <li key={index}>{result}</li> )
            ) : (
                <p>No hay Data</p>
            )
        }
        </ul>
    </div>
  )
}
