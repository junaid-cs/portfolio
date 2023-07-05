import React from 'react'
import './hero.css'
import {BsArrowRightShort} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='bg-dark-b-gradient hero-h-100 pt-5'>
       <div className='d-flex mt-3 mt-md-auto row text-light h-100vh justify-content-around px-sm-5 mx-sm-5 mx-3 me-md-0 pe-md-0 overflow-hidden align-items-center'>
            <div className='left text-center text-sm-start col-12 col-md-6'>
                <h1 className='fs-4rem text-center text-sm-start'>
                   I am a Frontend Develeoper
                  </h1>
                  <p className='text-gary mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum consectetur corrupti, veniam eaque in aliquam officia dolorem tempore dignissimos?
                  </p>
                  <div className="btn btn-gradient text-white px-4 py-2 fs-5 mt-3">Resume <span className='hero-arrow d-inline-block'><BsArrowRightShort/></span>  </div>
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