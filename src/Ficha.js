import React from 'react'
import Calendar from './img/calendar-svgrepo-com.svg'

function Ficha(props) {
  return (
    <div style={{marginTop:'30px'}}>
        <h3 className='miPuesto'>{props.puesto}</h3>
        <h4 className='miEmpresa'>{props.empresa}</h4>
        <h5 className='miFecha'><img alt="" src={Calendar}/>{props.fechas}</h5>
        <dt>{props.datos.map((d,index)=> (<dl  className='miTrabajo' key={index}> {d} </dl>))}</dt>
    </div>
  )
}

export default Ficha