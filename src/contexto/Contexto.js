import React from 'react'
import {createContext,useState} from 'react';

export const datosContexto = createContext();

export const DatosJson = ({ children }) => {
    
    const tempJson = [
        {
            puesto: 'FullStack Developer',
            empresa: 'Proyecto personal',
            fechas: 'Marzo 2021- ahora',
            datos: ['Desarrolo de proyecto empresarial','nodeJS, JavaScript, React, Python']
        },
        {
            puesto: 'FrontEnd Developer',
            empresa: 'ENEO Technologies',
            fechas: 'Julio 2020-Febrero 2021',
            datos: ['Desarrollo de software de ciberseguridad - IPS/IDS. Proyecto RedBorder.',
            'Análisis de tráfico de red (sflow) y detección de amenazas en tiempo real con Snort.',
            'Uso de diferentes lenguajes y herramientas: HTML, CSS, JS, Python, Bash scripting, RegEx, todo en un entorno Linux CentOs',
            'Software en la parte Big Data : Kafka, Chef, Logstash']
        },
        {
            puesto: 'FrontEnd Developer / SysAdmin / Soporte',
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
            datos: ['RSoporte on call/on site de servidores Windows NT- Europa, África y América',
            'Gestión de AD y políticas de seguridad']
        }        
    ]

    const [miJson, setMiJson] = useState(tempJson)

    return (
        <datosContexto.Provider value = {{miJson, setMiJson}}>
            {children}
        </datosContexto.Provider>
    )
}
