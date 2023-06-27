import React from 'react'
import './experience.css'

const Experience = () => {
    let cards = [
        {
            id:1,
            title:"Experience 1",
            description:"Some quick example text to build on the card title and make.",
            demo:"./github.io",
            link:"google.com"
        },
        {
            id:2,
            title:"Experience 2",
            description:"Some quick example text to build on the card title and make.",
            demo:"./github.io",
            link:"google.com"
        }
    ]
    return (
        <div className='bg-gradient-gaytoblack text-white h-84vh '>
            <div className="container ">
                <div className='fs-1 fw-bold'>
                    Experience
                </div>
                <div className=" row">

                <div className="d-flex portfolio mt-3  flex-wrap">
                {cards.map(({id,title}) =>(
        
                    <div key={id} className="card col-md-6 col-lg-4 p-2 rounded-2 bg-gradient-gaytoblack m-2 ms-lg-0" >
                        <div className="img-container rounded-3 ">
                        <div className="img"></div>
                        </div>
                    </div>
            ))}
                    
                   
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience