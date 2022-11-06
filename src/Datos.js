import React from 'react'
import Calendar from './img/calendar-svgrepo-com.svg'
import Mail from './img/mail-svgrepo-com.svg'
import Home from './img/home-svgrepo-com.svg'
import Phone from './img/phone-svgrepo-com.svg'
import World from './img/world-svgrepo-com.svg'


function Datos() {
  return (
    <>
    <div className='todo'>
        <section className='general'>
            <article className='cajaDatos'>

                <div className='nombre'>Angel Escribano</div>
                <div className='subtitulo'>Front-End Developer</div>  
                        <div className='iconos'>
                            <div className='prueba'>
                                <img width="20" alt="" src={Mail} /> 
                                <a href="mailto:johndoe@fakeemail.com">
                                    aeo1003@gmail.com
                                </a>
                            </div>

                            <div className='prueba'>
                                <img width="20" alt="" src={Phone} />                                 
                                   <a href='tel:+34 661 732 768' >
                                        +34 661 732 768
                                   </a>                                
                            </div>

                            <div className='prueba'>
                                <img width="20" alt="" src={Home} /> 
                                <div>
                                    Gijón, Asturias
                                </div>
                            </div>

                            <div className='prueba'>
                                <img width="20" alt="" src={World} /> 
                                <div>
                                    LinkdIn
                                </div>
                            </div>
                        </div>
            </article>

            <article className='mySkills'>
                <div className='tituloSkills'>
                    Formación
                </div>

                <dt className='formacion'>
                    <dl>Idiomas : español (nativo), ingés (fluido) </dl>
                    <dl>EGB-BUP-COU-Selectividad.</dl>
                    <dl>2 años FP-II Informática de Gestion.</dl>
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
                            Libraries                       
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
                    <div>EXPERIENCIA LABORAL</div>
                </div>
                <p></p>
                <div className='subtitulo'>
                    <div className='puesto'>Front-End Developer</div>
                    <div className='empresa'>ENEO Technologies</div>
                    <div className='fecha'><img alt="" src={Calendar} />
                        <div>Julio 2020-Febrero 2021</div>
                    </div>   

                    <ul>
                        <li>Desarrollo de software de ciberseguridad - IPS/IDS. Proyecto RedBorder.</li>
                        <li>Análisis de tráfico de red (sflow) y detección de amenazas en tiempo real con Snort.</li>
                        <li>Uso de diferentes lenguajes y herramientas: HTML, CSS, JS, Python, Bash scripting, RegEx, todo en un entorno Linux CentOs</li>                        
                        <li>Software en la parte Big Data : Kafka, Chef, Logstash</li>                                
                    </ul>
                </div>


                <div className='subtitulo'>
                    <div className='puesto'>Front-End Developer / SysAdmin / Soporte</div>
                    <div className='empresa'>Atos</div>
                    <div className='fecha'><img alt="" src={Calendar} />
                        <div>Enero 2017-Enero 2020</div>
                    </div>              

                    <ul>                        
                        <li>Desarrollo de software en Seat de software para control de 
                            inventario; Backend:  MySQL y PHP. Frontend: HTML, JavaScript, jQuery y Bootstrap. </li>
                        <li>Administración de sistemas Windows Server en Acciona,Cepsa y Axa.
                            He estado involucrado en diferentes proyectos de administación de sistemas : 
                            administración de Active Directory, configuración y administración de SCCM, security policies, scripting en Powershell...</li>
                        <li>Soporte técnico L2 en Honda y Acciona</li>                        
                    </ul>
                </div>

                <div className='subtitulo'>
                    <div className='puesto'>IT Manager</div>
                    <div className='empresa'>Club La Costa Hotels and Resorts</div>
                    <div className='fecha'><img alt="" src={Calendar} />
                        <div>Enero 2004-Enero 2015</div>
                    </div>              

                    <ul>                        
                        <li>Responsable del departamento de IT para las Islas Canarias </li>
                        <li>A cargo de un equipo responsable del desarrollo de todo tipo de proyectos: infraestructuras de datos, 
                        soporte a usuario, desarrollo de software, administración de sistemas Windows Server... </li>                      
                    </ul>
                </div>


                <div className='subtitulo'>
                    <div className='puesto'>IT Manager</div>
                    <div className='empresa'>Sykes Enterprises</div>
                    <div className='fecha'><img alt="" src={Calendar} />
                        <div>Mayo 2002-Noviembre 2003</div>
                    </div>              

                    <ul>                        
                        <li>Responsable de equipo para diseño e implementación de red en call center de más de 200 agentes.</li>
                        <li>Gestión de servidores Windows y Linux</li>    
                        <li>Administración de sistemas de marcación predictiva</li>                   
                    </ul>
                </div>
        
                <div className='subtitulo'>
                    <div className='puesto'>Soporte L3</div>
                    <div className='empresa'>Thomson Holidays</div>
                    <div className='fecha'><img alt="" src={Calendar} />
                        <div>Enero 2000-Marzo 2002</div>
                    </div>              

                    <ul>                        
                        <li>Soporte on call/on site de servidores Windows NT- Europa, África y América</li>
                        <li>Gestión de AD y políticas de seguridad</li>                            
                    </ul>
                </div>

            </article>
        </section>
    </div>
    </>
  )
}

export default Datos