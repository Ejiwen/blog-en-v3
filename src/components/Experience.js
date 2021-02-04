import React, { useState } from 'react'
import ExperienceTmpl from './parts/ExperienceTmpl';
import styled from '@emotion/styled'
import headerExperiences from "../../static/images/experiencesBg.svg"

const ExperienceBttomBg = styled.div`
background:url('https://assets-global.website-files.com/5eb2825fc062423a537b975c/5eb2825fc06242394c7b9980_mask.svg') no-repeat;
background-size: cover;
height: 36px;
`

const Experience = () => {

    const experiencesArray = [
        {
          company: 'KINROSS GOLD',
          role: "Autodesk Data Analyst",
          periode: "Nov 2018 - Jan 2020",
          experience: [
            "Using AutoDesk vault to Provide engineering data and analysis.",
            "Experience in data analysis with the ability to understand and interpret data.",
            "Development of our internal big data solutions as well as the related data visualization suite.",
            "Experience in using databases, the SQL language, and the principles of data normalization.",
            "Collaborate with wider groups on standards and best practices for Big Data / Monitoring Software related areas"
          ],

        },
        {
          company: 'MNTIC',
          role: "Software Engineer",
          periode: "Jan 2017 - Jan 2018",
          experience: [
            "Develop highly detailed style guides using a combination of HTML, CSS, TypeScript, JavaScript and using JavaScript frameworks like Backbone and ReactJS.",
          " Working with and building RESTful API's and GraphQL.",
          "Lead and participate in new feature design and code reviews.",
          "Experience with Java development frameworks such as Spring.",
          "Fixing bugs, Suggesting improvements.",
          "Organized and reliable, attentive to detail, able to efficiently manage multiple tasks."
        ],

        },
        {
          company: 'HADMOOL',
          role: "Full Stack Developer",
          periode: "Jan 2016 - Jan 2017",
          experience: [
            'Experience with PHP/MySQL and WordPress.',
            'Proficient using web services, ajax, and JSON.',
            'Experience with web markup, including HTML5, CSS3, JavaScript.',
            'A good working knowledge of the Adobe Creative Suite (Photoshop and Illustrator in particular).',
            'Practical skills using the following tools: Gulp, WebPack, Babel.'
          ],

        }
      ];

    const [cmps, setCmps] = useState(experiencesArray[1]);

      const toggleCMP = index => { 
        setCmps(experiencesArray[index])
        }

    return (
        <div id="Experiencesy" className="experience-wrap">
          <ExperienceBttomBg className="topExpBg"></ExperienceBttomBg>
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
        <ExperienceBttomBg></ExperienceBttomBg>
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