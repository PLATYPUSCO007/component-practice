import React from 'react'

const nombre = 'Ines';
const repo = 'https://profile234.com';

const estudiante = {
    name: 'Ricardo',
    lastname: 'Enciso',
    mobile: '3196881008',
    linkedinProfile: 'https://profile234.com'
}

export const MyComponent = () => {
  return (
    <>
        <hr width="100%"/>
        <p>Mi Texto en componente 1</p>
        <h2>Temas de React</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicacion</li>
        </ul>
        <h2>Datos del docente</h2>
        <p>Nombre: {nombre }</p>
        <p>Repositorio:</p>
        <p>{repo}</p>
        <hr width="100%"/>
        <h2>Datos del estudiante</h2>
        <p>Nombre: {estudiante.name}</p>
        <p>Apellido: {estudiante.lastname}</p>
        <p>Tel: {estudiante.mobile}</p>
        <p>Perfil LinkeDin: {estudiante.linkedinProfile}</p>
    </>
  )
}
