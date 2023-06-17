import React from 'react'
import './hero.css'
import {BsArrowRightShort} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='bg-dark-b-gradient hero-h-100 pt-5'>
       <div className='d-flex text-light h-100vh justify-content-around mx-5 px-5 align-items-center'>
            <div className='left w-50'>
                <h1 className='fs-4rem'>
                   I am a Frontend Develeoper
                  </h1>
                  <p className='text-gary mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum consectetur corrupti, veniam eaque in aliquam officia dolorem tempore dignissimos?
                  </p>
                  <div className="btn btn-gradient text-white px-4 py-2 fs-5 mt-3">Resume <span className='hero-arrow d-inline-block'><BsArrowRightShort/></span>  </div>
            </div>
            <div className='right '>
                <div className="img img-box">
              <img src="./images/img_1.png" className='img-box' alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Hero