import React from 'react'
import './experience.css'

const Experience = () => {
    let cards = [
        {
            id:1,
            title:"Html",
            src:"./experience/html.png",
            style:"html-card"
        },
        {
            id:2,
            title:"CSS",
            src:"./experience/css.png",
            style:"css-card"
        },
        {
            id:3,
            title:"JavaScript",
            src:"./experience/javascript.png",
            style:"js-card"
        },
        {
            id:4,
            title:"React",
            src:"./experience/react.png",
            style:"react-card"
        },
        {
            id:5,
            title:"GitHub",
            src:"./experience/github.png",
            style:"github-card"
        }
    ]
    return (
        <div className='bg-gradient-gaytoblack experience text-white h-84v pt-5 '>
            <div className="container ">
                <div className='fs-1 fw-bold'>
                    Experience
                </div>
                <div className="row">

                <div className="d-flex justify-content-center justify-content-lg-start mx-lg-5 portfolio mt-3 mx-lg-5 gap-4  flex-wrap">
                {cards.map(({id,title,src,style}) =>(
        
                    <div key={id} className={`icon-card col-12 col-md-5 col-lg-3 p-2 rounded-2 bg-gradient-gaytoblack my-4 mx-lg-4 ms-lg-0 ${style}`}  >
                        <div className="icon-container rounded-3 ">
                            <div className="icon-img-conteiner w-25 mx-auto d-flex flex-column  align-items-center">
                        <img src={src} className='img-fluid' alt="" srcset="" />
                        <p className='mt-2'>{title}</p>
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

export default Experience