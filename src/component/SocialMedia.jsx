import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {CiMail} from 'react-icons/ci'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialMedia = () => {
  const links = [
    {
      id:1,
      child:(
        <>
         <div className='px-2 py-1'>
          <span className=' d-inline-block w-73px'>LinkedIn</span>
           <AiFillLinkedin style={{fontSize:"30px"}}/></div>
        </>
      ),
      href:"https://www.linkedin.com/in/junaid-cs/",
      style:"border-top"
    },
    {
      id:2,
      child:(
        <>
         <div className='px-2 py-1'>
          <span className=' d-inline-block w-73px'>Github</span>
           <AiFillGithub style={{fontSize:"30px"}}/></div>
        </>
      ),
      href:"https://github.com/junaid-cs",
      style:""
    },
    {
      id:3,
      child:(
        <>
         <div className='px-2 py-1'>
          <span className=' d-inline-block w-73px'>Mail</span> 
          <CiMail style={{fontSize:"30px"}}/></div>
        </>
      ),
      href:"mailto:junaid7cs@gmail.com",
      style:""
    },
    {
      id:4,
      child:(
        <>
         <div className='px-2 py-1'>
          <span className=' d-inline-block w-73px'>Resume</span> 
          <BsFillPersonLinesFill style={{fontSize:"30px"}}/></div>
        </>
      ),
      href:"/Junaid.pdf",
      download:true,
      style:"border-bottom"
    },
  ]
  return (
    <div className='position-fixed d-none d-md-block top-50 z-3'>
      {
        links.map(({id,child,href,style,download})=>{
          return(
        <div key={id} className={"icon-box bg-gray text-light left-75px"+" "+style}>
        <a href={href} 
        className='px-2 py-1 d-block text-decoration-none text-white'
        download={download}
        target='blank'
        >
         {child}
          </a>
      </div>)
        })
      }
      
      </div>
  )
}

export default SocialMedia