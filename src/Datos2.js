import React, { useContext } from 'react'
import './App.css'
import Mail from './img/mail-icon.png'
import Home from './img/home-icon.png'
import Phone from './img/phone-icon.png'
import Spain from './img/spain.png'
import UK from './img/uk.png'
import myCV from './contexto/CV-Frontend.pdf'
import myCVen from './contexto/CV-Frontend-en.pdf'


import { datosContexto } from './contexto/Contexto'
import Ficha from './Ficha'

function Datos2() {

    const {miJson,miEnJson,language, setLanguage} = useContext(datosContexto)
   
    const educ = ['Idiomas : español (nativo), inglés (fluido)','EGB-BUP-COU-Selectividad.','2 años FP-II Informática de Gestión.',
'1 año Computer Science Degree - Cambridge University of East Anglia.','Microsoft - MCSE','Diferentes cursos online y bootcamps.' ]
    const educEn = ['Languages : Spanish (native), English (fluent)','Computer Science B-Tech.',
'1 year Computer Science Degree - Cambridge University of East Anglia.','Microsoft - MCSE','Several online courses and bootcamps.' ]


    return (
    <>  
        <div id="datos2">
        <div id='personal' className='tarjetaDatos'>
            <div className='datosPersonales'>
                <h1>Angel Escribano</h1>
                {language === 'es'     
                    ? <h2>Desarrollador FrontEnd</h2>
                    : <h2>FrontEnd Developer</h2>
                }
{/*
                {language === 'es' 
                ? <button id='pdf' className='descargaPDF' onClick={() => exportPDF()}>DESCARGA EL PDF</button>
                : <button id='pdf' className='descargaPDF' onClick={() => exportPDF()}>PDF DOWNLOAD</button>
                }
            */}

                {language === 'es' 
                ? <a className='pdf' href={myCV} download="CV_Frontend"><button className='botonpdf'> Descarga el PDF </button></a>
                : <a className='pdf' href={myCVen} download="CV_Frontend_English"> <button className='botonpdf'> Download the PDF </button> </a>
                }

            </div>

            <div className='cajaEnlaces'>                
                <div>
                    <img className='icon' alt="" src={Mail} />
                    <a href="mailto:aeo1003@gmail.com">aeo1003@gmail.com</a>
                </div>
                <div>
                    <img className='icon' alt="" src={Phone} />
                    <a href="tel:+34 661732768">+34 661732768</a>
                </div>
                <div>
                    <img className='icon' alt="" src={Home} />
                    Gijón, Asturias
                </div>
                <div className='flags'>
                    <img alt='spanish flag' src={Spain} onClick={()=>setLanguage('es')} />
                    <img alt='uk flag' src={UK} onClick={()=>setLanguage('en')} />
                </div>                
            </div>      
        

        </div>
       
       

        <article className='cajaFormacion'>

            <div className='miFormacion'>
                {language === 'es'                
                    ? <p>Formación</p>
                    : <p>Education</p>
                }
                <ul> 
                    { language === 'es'
                        ? educ.map((e,index)=>(<li key={index}>{e}</li>))
                        : educEn.map((e,index)=>(<li key={index}>{e}</li>))
                    }
                </ul>                
            </div>
            
            <div className='lang'>
                <div>                    
                    {language === 'es'                
                        ? <p>Lenguajes</p>
                        : <p>Languages</p>
                    }
                    <ul> 
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>                    
                        <li>PHP</li>
                    </ul>
                </div>

                <div>
                    {language === 'es'                
                        ? <p>Librerías</p>
                        : <p>Libraries</p>
                    }
                    <ul>
                        <li>React</li>                    
                        <li>jQuery</li>                                   
                        <li>NodeJs</li>                    
                        <li>ExpressJs</li>                                   
                    </ul>
                </div>
            </div>
            
        </article>

        


        <div  id='experiencia'  className='miExperiencia'>
        {language === 'es'                
            ? <h1>Experiencia Laboral</h1>
            : <h1>Work Experience</h1>
        }
            
            {language === 'es' 
                ? miJson.map(d=><Ficha className='ficha' key={d.empresa} puesto={d.puesto} empresa={d.empresa} fechas={d.fechas} datos={d.datos}/>)
                : miEnJson.map(d=><Ficha key={d.empresa} puesto={d.puesto} empresa={d.empresa} fechas={d.fechas} datos={d.datos}/>)            
            }

        </div>

    </div>


    </>
  )
}

export default Datos2