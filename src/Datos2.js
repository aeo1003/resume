import React, { useContext } from 'react'

import Mail from './img/mail-svgrepo-com.svg'
import Home from './img/home-svgrepo-com.svg'
import Phone from './img/phone-svgrepo-com.svg'
import World from './img/world-svgrepo-com.svg'


import { datosContexto } from './contexto/Contexto'
import Ficha from './Ficha'

function Datos2() {
    const {miJson} = useContext(datosContexto)

    return (
    <>  
        <div className='todo'>
            <section>
                <article className='cajaDatos'>
                    <div className='nombre'>Angel Escribano</div>
                    <div className='subtitulo'>Front-End Developer</div>  
                            
                    <div className='iconos'>                            
                        
                        <div><img width="20" alt="" src={Mail} style={{marginRight:'15px'}}/> 
                            <a href="mailto:aeo1003@gmail.com">
                                aeo1003@gmail.com
                            </a> </div>
                        
                            <div><img width="20" alt="" src={Phone} style={{marginRight:'15px'}}/>                                 
                            <a href='tel:+34 661 732 768' >
                                    +34 661 732 768
                            </a> </div>
                        
                            <div><img width="20" alt="" src={Home} style={{marginRight:'15px'}} />  
                            Gijón, Asturias </div>
                        
                            <div><img width="20" alt="" src={World} style={{marginRight:'15px'}} />                             
                            LinkdIn</div>                                        
                    </div>
                </article>

                <article className='mySkills'>

                    <div className='tituloSkills'>
                        Formación
                    </div>
                    
                    <dt className='formacion'>
                        <dl>Idiomas : español (nativo), inglés (fluido) </dl>
                        <dl>EGB-BUP-COU-Selectividad.</dl>
                        <dl>2 años FP-II Informática de Gestión.</dl>
                        <dl>1 año Computer Science Degree - Cambridge University of East Anglia.</dl>
                        <dl>Diferentes cursos online y bootcamps.</dl>
                    </dt>
                    
                    <div  className='tituloSkills'>                                                
                        <div>
                                Lenguajes                        
                            <dt>
                                <dl>JavaScript</dl>
                                <dl>C#</dl>
                                <dl>Python</dl>
                                <dl>HTML</dl>
                                <dl>CSS</dl>                    
                                <dl>PHP</dl>                    
                            </dt>
                        </div>   
                    
                        <div>
                                Librerías                       
                            <dt>
                                <dl>React</dl>
                                <dl>jQuery</dl>
                            </dt>
                        </div>                                   
                    </div>
                
                </article>
            </section> 



            <section>
                <article className='experiencia'>                
                    <div className='titulo'>
                            EXPERIENCIA LABORAL
                    </div>

                    {miJson.map(d=>           
                    <Ficha key={d.empresa} puesto={d.puesto} empresa={d.empresa} fechas={d.fechas} datos={d.datos}/>            
                    )}

                </article>
            </section>
        </div>
    </>
  )
}

export default Datos2