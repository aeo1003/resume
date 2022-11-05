import React from 'react'
import burger from './img/menu-svgrepo-com.svg'

function MyHeader() {
  return (
    <> 
    <nav className='header'>
        <a href="http://localhost:3000/1">Uno</a>
        <a href="http://localhost:3000/2">Dos</a>
        <a href="http://localhost:3000/3">Tres</a>
        <img alt="" src={burger} />
    </nav> 
        
    </>
  )
}

export default MyHeader