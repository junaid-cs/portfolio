import React from 'react'
import './hero.css'
import {BsArrowRightShort} from 'react-icons/bs'

const Hero = () => {
  return (
    <div id='home' className='bg-dark-b-gradient hero-h-100 pt-5'>
       <div className='d-flex  row text-light h-100vh justify-content-around px-sm-5 mx-sm-5 mx-3 me-md-0 mt-3 mt-md-auto pe-md-0 overflow-hidden align-items-center'>
            <div className='left text-center text-sm-start col-12 col-md-6'>
                <h1 className='fs-4rem text-center text-sm-start'>
                   I am a Frontend Develeoper 
                  </h1>
                  <p className='text-gary mt-3'>
                  What drives me as a frontend developer is the ability to combine my creativity and technical skills to craft seamless user interfaces.                  </p>
                <a href="./Junaid-resume.pdf" target="_blank" rel="noopener noreferrer"><div className="btn btn-gradient text-white px-4 py-2 fs-5 mt-3">Resume <span className='hero-arrow d-inline-block'><BsArrowRightShort/></span>  </div></a> 
            </div>
            <div className='right col-12 col-md-6 mt-5 mt-md-0 ps-md-5'>
                <div className="img img-box mx-auto mx-md-0 ms-md-5 ">
              <img src="./images/img_1.png" className='img-box' alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Hero