import React, { useState, useEffect, useRef } from "react"
import anime from "animejs"
import Navbar from "./Navbar"
import styled from "@emotion/styled"
import { bgHeader } from "../../static/images/header-mr-sf.svg"

const HeaderBttomBg = styled.div`
  background: url("sectionmask3.svg") no-repeat;
  background-size: cover;
  height: 72px;
`

const Header = () => {
  useEffect(() => {
    return () => {
      const animeSlide = () => {
      anime.timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 5000
        });

      }
      animeSlide();
    }
  })

  return (
    <header>
      <Navbar />

      <div className="my-bio-container">
        <div className="my-bio">
          <div>
            <p> Hi, My name is </p>
            <h3 className="ml2">
              <span className='letter'>C</span>
              <span className='letter'>H</span>
              <span className='letter'>E</span><span className='letter'>I</span><span className='letter'>K</span><span className='letter'>H</span><span className='letter'>A</span><span className='letter'>N</span>
              <span className='letter'>Y</span><span className='letter'>&nbsp;</span><span className='letter'>E</span><span className='letter'>J</span><span className='letter'>I</span>
              <span className='letter'>W</span><span className='letter'>E</span><span className='letter'>N</span>
              </h3>
            <p className="my-bio--role">Software Engineer in San Francisco</p>
          </div>
        </div>
      </div>
      <img src={bgHeader} style={{ visibility: "hidden", height: "600px" }} />
      <HeaderBttomBg></HeaderBttomBg>

    </header>
  )
}

export default Header
