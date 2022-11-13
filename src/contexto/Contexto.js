import React from 'react'
import {createContext,useState} from 'react';

export const datosContexto = createContext();

export const DatosJson = ({ children }) => {
    
    const esJson = [  
        {
            puesto: 'Desarrollador Fullstack',
            empresa: 'Proyecto personal',
            fechas: 'Marzo 2021- ahora',
            datos:  ['Desarrollo de proyecto empresarial.','NodeJS, JavaScript, React, Python.']                             
        },
        {
            puesto: 'Desarrollador FrontEnd',
            empresa: 'ENEO Technologies',
            fechas: 'Julio 2020-Febrero 2021',
            datos: ['Desarrollo de software de ciberseguridad - IPS/IDS. Proyecto RedBorder.',
            'Análisis de tráfico de red (sflow) y detección de amenazas en tiempo real con Snort.',
            'Uso de diferentes lenguajes y herramientas: HTML, CSS, JS, Python, Bash scripting, RegEx, todo en un entorno Linux CentOs',
            'Software en la parte Big Data : Kafka, Chef, Logstash']
        },
        {
            puesto: 'Desarrollador FrontEnd / SysAdmin / Soporte',
            empresa: 'Atos',
            fechas: 'Enero 2017-Enero 2020',
            datos: ['Desarrollo de software en Seat de software para control de inventario; Backend:  MySQL y PHP. Frontend: HTML, JavaScript, jQuery y Bootstrap.',
            'Administración de sistemas Windows Server en Acciona,Cepsa y Axa. He estado involucrado en diferentes proyectos de administación de sistemas :administración de Active Directory, configuración y administración de SCCM, security policies, scripting en Powershell...',
            'Soporte técnico L2 en Honda y Acciona']
        },
        {
            puesto: 'IT Manager',
            empresa: 'Club la Costa, Hotels and Resorts',
            fechas: 'Enero 2004-Enero 2015',
            datos: ['Responsable del departamento de IT para las Islas Canarias ',
            'A cargo de un equipo responsable del desarrollo de todo tipo de proyectos: infraestructuras de datos, soporte a usuario, desarrollo de software, administración de sistemas Windows Server... ']
        },
        {
            puesto: 'IT Manager',
            empresa: 'Sykes Enterprises',
            fechas: 'Mayo 2002-Noviembre 2003',
            datos: ['Responsable de equipo para diseño e implementación de red en call center de más de 200 agentes.',
            'Gestión de servidores Windows y Linux','Administración de sistemas de marcación predictiva']
        },
        {
            puesto: 'Soporte L3',
            empresa: 'Thomson Holidays',
            fechas: 'Enero 2000-Marzo 2002',
            datos: ['Soporte on call/on site de servidores Windows NT- Europa, África y América',
            'Gestión de AD y políticas de seguridad']
        }
    ]

    const enJson = [       
        {
            puesto: 'Fullstack Developer',
            empresa: 'Personal project',
            fechas: 'March 2021- now',
            datos:  ['Development of my personal project','NodeJS, JavaScript, React, Python.']                             
        },
        {
            puesto: 'FrontEnd Developer',
            empresa: 'ENEO Technologies',
            fechas: 'July 2020 - February 2021',
            datos: ['Development of cybersecurity software - IPS/IDS. RedBorder project.',
            'Network traffick analysis (sflow) and real time threat detection against SNORT database',
            'Working with different languages and tools: HTML, CSS, JS, Python, Bash scripting, RegEx, all in a Linux CentOS environment ',
            'Big Data software : Kafka, Chef, Logstash']
        },
        {
            puesto: 'FrontEnd Developer / SysAdmin / Support',
            empresa: 'Atos',
            fechas: 'January 2017-January 2020',
            datos: ['Inventory tracking software development at Seat; Backend:  MySQL y PHP. Frontend: HTML, JavaScript, jQuery and Bootstrap.',
            'Windows Server sysadmin at Acciona,Cepsa and Axa. I\'ve been involved in several system administration projects : AD administration, SCCM administration and configuration, security policies, owershell scripting...',
            'L2 technical support at Honda and Acciona']
        },
        {
            puesto: 'IT Manager',
            empresa: 'Club la Costa, Hotels and Resorts',
            fechas: 'January 2004 - January 2015',
            datos: ['Managing the IT department for the Canary Islands hub',
            'In charge of a team involved in the all kind of projects: network infrastructure, user support, software development, Windows Server administration... ']
        },
        {
            puesto: 'IT Manager',
            empresa: 'Sykes Enterprises',
            fechas: 'May 2002 - November 2003',
            datos: ['In charge of a team tasked with the design and deployment of the network in a call center with over 200 agents.',
            'Windows and Linux server administration','Predictive dialing servers administration']
        },
        {
            puesto: 'L3 support',
            empresa: 'Thomson Holidays',
            fechas: 'January 2000 - March 2002',
            datos: ['On call/on site Windows NT server support - Europa, Africa y America','AD administration and security policies']
        }
    ]


    const [miJson, setMiJson] = useState(esJson)
    const [miEnJson, setMiEnJson] = useState(enJson)
    const [language, setLanguage] = useState('es')

    return (
        <datosContexto.Provider value = {{miJson, setMiJson, miEnJson, setMiEnJson, language, setLanguage}}>
            {children}
        </datosContexto.Provider>
    )
}
