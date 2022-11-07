import React from 'react'
import Calendar from './img/calendar-svgrepo-com.svg'

function Ficha(props) {
  return (
    <div>
        <p></p>
        <div className='puesto'>{props.puesto}</div>
        <div className='empresa'>{props.empresa}</div>
        <div className='fecha'><img alt="" src={Calendar} width='20px' />{props.fechas}</div>
        <ul>{props.datos.map((d,index)=> (<li  className='trabajo' key={index}> {d} </li>))}</ul>
    </div>
  )
}

export default Ficha