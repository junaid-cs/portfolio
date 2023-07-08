import React from 'react'
import './project.css'

const Project = () => {
    let cards = [
        {
            id:1,
            title:"Coffe Shop",
            description:"Making design using Html css and javascript",
            demo:"https://cofee-shop-1.netlify.app/",
            link:"#"
        },
        {
            id:2,
            title:"Admission System",
            description:"Live admission system simplifies application process, improving efficiency for institutions and applicants.",
            demo:"http://admission.bkuc.edu.pk/",
            link:"#"
        },
        {
            id:3,
            title:"Portfolio",
            description:"Crafted captivating portfolio site with HTML, CSS, and JS showcasing skills and achievements.",
            demo:"https://asimportfolio.netlify.app",
            link:"#"
        },
        {
            id:4,
            title:"Bus Travel",
            description:"Designed responsive bus travel template utilizing Bootstrap for enhanced user experience.",
            demo:"https://jay-travel.netlify.app",
            link:"#"
        },
        {
            id:5,
            title:"Dashboard",
            description:"Developed dynamic dashboard with multiple pages using HTML, CSS, and JS.",
            demo:"http://localhost/dashboard_project/",
            link:"#"
        },
        {
            id:6,
            title:"Money heist",
            description:"Making simple static templet using bootstrap",
            demo:".https://moneyheist-1.netlify.app/",
            link:"#"
        },
        {
            id:7,
            title:"Pizza hut",
            description:"Built React app utilizing Context API, useEffect, and useState hooks.",
            demo:"https://pizzza-hut.netlify.app/",
            link:"#"
        }
    ]
    return (
        <div id='project' className='bg-dark-b-gradient text-white h-84vh pb-5'>
            <div className="container ">
                <div className='fs-1 fw-bold'>
                    Project
                </div>
                <div className=" row">

                <div className="d-flex portfolio mt-3 justify-content-md-center justify-content-lg-start  flex-wrap">
                {cards.map(({id,title,description,demo,link}) =>(
        
                    <div key={id} className="card col-md-5 col-lg-4 p-2 rounded-2 bg-gradient-gaytoblack m-2 ms-lg-0" >
                        <div className="img-container rounded-3 ">
                        <div className="img"></div>
                        </div>
                        <div className="card-body text-white">
                            <h5 className="card-title fs-4 ">{title}</h5>
                            <p className="card-text fs-6 fw-normal">{description}</p>
                           <div className="d-flex ">
                            <a href={demo} target='blank' className="btn btn-black">Demo</a>
                            {/* <a href={link} target='blank' className="btn btn-black ms-3">Code</a> */}
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