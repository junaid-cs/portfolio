import React, { useState } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import './nav.css';

const Nav = () => {
    const links=[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about us"
        },
        {
            id:3,
            link:"project"
        },
        {
            id:4,
            link:"skill"
        },
        {
            id:5,
            link:"contact us"
        },
    ];
    const [toggler,setToggler]=useState(false);
  return (
    <nav className="navbar position-fixed w-100 navbar-expand-md bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand ff-junaid fs-2 px-3 fw-600" href="#">Junaid</a>

    <div className=" d-none d-md-flex" id="">
      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
            {links.map(({id,link}) =>(
        <li key={id} className="nav-item mx-2 ">
                <a  className="nav-link active text-capitalize text-gray" aria-current="page" href="#">{link}</a>
               
        </li>
            ))}
      </ul>
    </div>
    <button onClick={()=>{setToggler(!toggler); }} className="navbar-toggler border-0 text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    {toggler ? <FaTimes style={{fontSize:'25px'}}/> :<FaBars style={{fontSize:'25px'}}/>}
    </button>

    {toggler && (
        <div className="navbar-collapse" id="navbarTogglerDemo02">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            {links.map(({id,link}) =>(
        <li key={id} className="nav-item">
                <a  className="nav-link active text-capitalize text-gray" aria-current="page" href="#">{link}</a>
               
        </li>
            ))}
      </ul>
    </div>
        )}
  </div>
</nav>
  )
}

export default Nav