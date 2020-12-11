import React, { useState } from 'react'
import ExperienceTmpl from './parts/ExperienceTmpl';
import headerExperiences from "../../static/images/experiencesBg.svg"

const Experience = () => {

    const experiencesArray = [
        {
          company: 'KINROSS GOLD',
          role: "Autodesk Data Analyst",
          periode: "Nov 2018 - Jan 2020",
          experience: [
            "Provided engineering data and analysis.",
            "Organizing data in a way that serves the company benefits better.",
            "Provides access to the data in useful ways."
          ],

        },
        {
          company: 'MNTIC',
          role: "Software Engineer",
          periode: "Jan 2017 - Jan 2018",
          experience: [
            "Worked on technical problems for E-deal CRM customers (become Efficy CRM later).",
          "Used: Java/Java EE, JavaScript/Ajax/ JQuery , JSON /Webservices, HTML/CSS",
          "SQL,XML, Server-side debugging, Browser debugging, experience troubleshooting cross-browser compatibility issues ..."
        ],

        },
        {
          company: 'Hadmool',
          role: "Full Stack Developer",
          periode: "Jan 2016 - Jan 2017",
          experience: ['Used: HTML/CSS, Javascript, PHP/MySQL,Wordpress.','Used: HTML/CSS, Javascript, PHP/MySQL,Wordpress.','Used: HTML/CSS, Javascript, PHP/MySQL,Wordpress.'],

        }
      ];

    const [cmps, setCmps] = useState(experiencesArray[0]);

      const toggleCMP = index => { 
        setCmps(experiencesArray[index])
        }

    return (
        <div className="experience-wrap">
        <div className="experience">
            <div className="experience__header">
            
            <img src={headerExperiences} /> <h3> Experiences </h3>
        </div>
        <div className="experience__body">
            <div className="menu">
                <ul>
                   {
                       experiencesArray.map((cmp,i) => (
                       <li onClick={() => toggleCMP(i)} key={i}>{cmp.company}</li>
                       ))
                   }
                </ul>
            </div>

            <div className="content">              
               <ExperienceTmpl {...cmps} /> 
            </div>
        </div>
        </div>
        </div>
    )
}

export default Experience;


/*

<div className="kinross">
            Kinross Gold Corporation - Contract
            Dates Employed (Nov 2018 – Jan 2020)
            - Provided engineering data and analysis.
            - Organizing data in a way that serves the company benefits better.
            - Provides access to the data in useful ways.
            </div>
            <div className="mntic">
            Software Engineer
            MNTIC (Mntic.fr) Full-time
            Dates Employed Jan 2017 – Jan 2018
            Employment Duration1 yr 1 mo
            LocationNouakchott, Mauritanie
            - Worked on technical problems for E-deal CRM customers (become Efficy CRM later).
            - Used: Java/Java EE, JavaScript/Ajax/ JQuery , JSON /Webservices, HTML/CSS (Native and SASS), SQL,XML, Server-side debugging, Browser debugging, experience troubleshooting cross-browser compatibility issues ...
            </div>
            <div className="hadmool">
            Full Stack Web Developer
            Hadmool Freelance
            Dates EmployedJan 2016 – Jan 2017
            Employment Duration1 yr 1 mo
            LocationDammam, Province de l'Est, Arabie saoudite
            Used: HTML/CSS, Javascript, PHP/MySQL,Wordpress, Adobe
            illustrator
            </div>

*/