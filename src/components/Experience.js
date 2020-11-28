import React, { useState } from 'react'

const Experience = () => {

    const [cmps, setCmps] = useState([
        {
          company: 'Kinross Gold Corporation',
          experience: "- Provided engineering data and analysis - Organizing data in a way that serves the company benefits better.- Provides access to the data in useful ways.",
          open: true
        },
        {
          company: 'MNTIC (Mntic.fr)',
          experience: '- Worked on technical problems for E-deal CRM.',
          open: false
        },
        {
          company: 'Hadmool',
          experience: 'Used: HTML/CSS, Javascript, PHP/MySQL,Wordpress.',
          open: false
        }
      ]);


      const toggleCMP = index => {
        
        setCmps(cmps.map((cmp,i) => {

            if(i===index) {
                cmp.open = !cmp.open
            } else {
                cmp.open = false
            }
            console.log("test")
            return cmp

        }))
        
        
      }

    return (
        <div className="experience">
            <div className="experience__menu">
                <ul>
                   {
                       cmps.map((cmp,i) => (
                       <li onClick={() => toggleCMP(i)} key={i}>{cmp.company}</li>
                       ))
                   }
                </ul>
            </div>

            <div className="experience__content">
                {
                    cmps.map((cmp,i) => (
                        <div className={cmp.open ? "" : "hidePanel"} key={i}>
                            {cmp.experience}
                        </div>
                    ))
                }
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