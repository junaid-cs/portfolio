import React from 'react'

const Contact = () => {
    return (
        <div className='bg-dark-b-gradient text-white h-84vh pb-5 pt-5'>
            <div className="container ">
                <div className='fs-1 fw-bold'>
                    Contact
                </div>
                <div className=" row justify-content-center text-center">
                    <div className="col-md-6 mt-5">
                        <form className=''>
                            <div class="form-floating mb-3">
                                <input type="text" className="form-control bg-transparent pt-4 text-white border-info" placeholder='Name' id="floatname" aria-describedby="emailHelp" />
                                <label for="floatname">Name</label>
                            </div>
                            <div class=" form-floating mb-3">
                                <input type="email" className="form-control bg-transparent pt-4 text-white border-info" placeholder='Email' id="floatingInput" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="mb-3">
                                <div class="form-floating">
                                    <textarea className="form-control bg-transparent pt-4 text-white border-info" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "200px"}}></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-gradient text-white px-4 py-2 fs-5 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact