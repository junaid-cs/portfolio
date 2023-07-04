import React from 'react'
import './project.css'

const Project = () => {
    let cards = [
        {
            id:1,
            title:"Project 1",
            description:"Some quick example text to build on the card title and make.",
            demo:"./github.io",
            link:"google.com"
        },
        {
            id:2,
            title:"Project 2",
            description:"Some quick example text to build on the card title and make.",
            demo:"./github.io",
            link:"google.com"
        }
    ]
    return (
        <div className='bg-dark-b-gradient text-white h-84vh pb-5'>
            <div className="container ">
                <div className='fs-1 fw-bold'>
                    Project
                </div>
                <div className=" row">

                <div className="d-flex portfolio mt-3  flex-wrap">
                {cards.map(({id,title}) =>(
        
                    <div key={id} className="card col-md-6 col-lg-4 p-2 rounded-2 bg-gradient-gaytoblack m-2 ms-lg-0" >
                        <div className="img-container rounded-3 ">
                        <div className="img"></div>
                        </div>
                        <div className="card-body text-white">
                            <h5 className="card-title fs-4 ">Card title</h5>
                            <p className="card-text fs-6 fw-normal">Some quick example text to build on the card title and make.</p>
                           <div className="d-flex ">
                            <a href="#" className="btn btn-black">Demo</a>
                            <a href="#" className="btn btn-black ms-3">Code</a>
                           </div>
                        </div>
                    </div>
            ))}
                    
                   
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project