import React, { useContext } from 'react'

import Mail from './img/mail-icon.png'
import Home from './img/home-icon.png'
import Phone from './img/phone-icon.png'
import Spain from './img/spain.png'
import UK from './img/uk.png'
// import World from './img/world-svgrepo-com.svg'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { datosContexto } from './contexto/Contexto'
import Ficha from './Ficha'

function Datos2() {

    const {miJson,miEnJson,language, setLanguage} = useContext(datosContexto)

    const exportPDF = () => {
        document.getElementById("pdf").style.display = 'none';
        const input = document.getElementById("datos2");
        html2canvas(input).then(canvas =>{
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            const doc = new jsPDF('p','mm');
            doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
                heightLeft -= pageHeight;
            }
            doc.save('cv.pdf')
        })        
        document.getElementById("pdf").style.display = 'flex';

        /*
        html2canvas(input, {logging: true, letterRendering: 2, useCORS: true})
            .then(canvas => {
                const imgWidth = 208;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p','mm','a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save("cv.pdf");
            })
        */
    }
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
                {language === 'es' 
                ? <button id='pdf' className='descargaPDF' onClick={() => exportPDF()}>DESCARGA EL PDF</button>
                : <button id='pdf' className='descargaPDF' onClick={() => exportPDF()}>PDF DOWNLOAD</button>
                }
            </div>

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
                <div className='flags'>
                    <img alt='spanish flag' src={Spain} onClick={()=>setLanguage('es')} />
                    <img alt='uk flag' src={UK} onClick={()=>setLanguage('en')} />
                </div>
                
            </div>      
        

        </div>
       
       
       <div className='cajaFormacion'>
                <div  id='formacion'  className='miFormacion'>
                    {language === 'es'                
                        ? <h1>Formación</h1>
                        : <h1>Education</h1>
                    }

                    {language === 'es'
                    ? educ.map((e,index)=>(<li key={index}>{e}</li>))
                    : educEn.map((e,index)=>(<li key={index}>{e}</li>))
                }

                                     
                </div>

            <div className='lang'>
                <div>                    
                    {language === 'es'                
                        ? <h1>Lenguajes</h1>
                        : <h1>Languages</h1>
                    }

                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>                    
                    <li>PHP</li>  
                </div>

                <div>
                    {language === 'es'                
                        ? <h1>Librerías</h1>
                        : <h1>Libraries</h1>
                    }

                    <li>React</li>                    
                    <li>jQuery</li>                                   
                </div>
            </div>
                

        </div>


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