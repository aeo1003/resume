import React, { useContext } from 'react'

import Mail from './img/mail-svgrepo-com.svg'
import Home from './img/home-svgrepo-com.svg'
import Phone from './img/phone-svgrepo-com.svg'
// import World from './img/world-svgrepo-com.svg'


import { datosContexto } from './contexto/Contexto'
import Ficha from './Ficha'

function Datos2() {
    const {miJson} = useContext(datosContexto)

    return (
    <>  
        <div id='personal' className='tarjetaDatos'>
            <div className='datosPersonales'>
                <h1>Angel Escribano</h1>
                <h2>Desarrollador FrontEnd</h2> 

                <div className='cajaEnlaces'>
                    <div>
                        <img alt="" src={Mail} />
                        <a href="mailto:aeo1003@gmail.com">aeo1003@gmail.com</a>
                    </div>
                    <div>
                        <img alt="" src={Phone} />
                        <a href="tel:+34 661732768">+34 661732768</a>
                    </div>
                    <div>
                        <img alt="" src={Home} />
                        Gijón, Asturias
                    </div>
                </div>      
            </div>
        </div>
        
       
        <div  id='formacion'  className='miFormacion'>
            <h1>Formación</h1>                
            <ul>
                <li>Idiomas : español (nativo), inglés (fluido) </li>
                <li>EGB-BUP-COU-Selectividad.</li>
                <li>2 años FP-II Informática de Gestión.</li>
                <li>1 año Computer Science Degree - Cambridge University of East Anglia.</li>
                <li>Diferentes cursos online y bootcamps.</li>
            </ul>
        </div>

        <div className='misSkills'>                                                
            <div>
                    <h1>Lenguajes</h1>

                    <dt>JavaScript</dt>
                    <dt>C#</dt>
                    <dt>Python</dt>
                    <dt>HTML</dt>
                    <dt>CSS</dt>                    
                    <dt>PHP</dt>
            </div>   
        
            <div>
                    <h1>Librerías</h1>
                <dt>
                    <dl>React</dl>                    
                    <dl>jQuery</dl>                    
                </dt>

            </div>                                   
        </div>


        <div  id='experiencia'  className='miExperiencia'>                
            <h1>
                Experiencia
            </h1>

            {miJson.map(d=>           
            <Ficha key={d.empresa} puesto={d.puesto} empresa={d.empresa} fechas={d.fechas} datos={d.datos}/>            
            )}

        </div>




        {/*        
        <div className='todo'>
            <section>
                <article className='cajaDatos'>
                    <h1 className='nombre'>Angel Escribano</h1>
                    <h2 className='subtitulo'>Front-End Developer</h2>  
                            
                    <div className='iconos'>                            
                        
                        <h5><img width="20" alt="" src={Mail} style={{marginRight:'15px'}}/> 
                            <a href="mailto:aeo1003@gmail.com">
                                aeo1003@gmail.com
                            </a> </h5>
                        
                            <h5><img width="20" alt="" src={Phone} style={{marginRight:'15px'}}/>                                 
                            <a href='tel:+34 661 732 768' >
                                    +34 661 732 768
                            </a> </h5>
                        
                            <h5><img width="20" alt="" src={Home} style={{marginRight:'15px'}} />  
                            Gijón, Asturias </h5>
                                                
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
                    
                    <div  style={{marginLeft:'var(--margen-izquierdo)'}} className='tituloSkills'>                                                
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
        */}
    </>
  )
}

export default Datos2