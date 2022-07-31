import React from "react";

const Create = () => {
    return(
        <div className="col-md-8 offset-2 mt-5">
            <div className="row">
                <div className="card p-0">
                    <div className="card-header text-bg-primary">
                        <div className="d-flex align-middle">
                            <div className="pt-2 mt-1">
                                <span className="fw-bold">Student Table</span>
                            </div>
                            <div className="ms-auto p-1">
                                <a href="/" className="btn btn-warning">
                                    <i className="bi bi-arrow-left-short"></i> Back
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name"/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="name">Age</label>
                                <input type="text" className="form-control" placeholder="Enter your age"/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="name">Name</label>
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
                            <div className="form-group text-end pt-3">
                                 <button className="btn btn-primary">
                                     <i className="bi bi-plus"></i>Add Student
                                 </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;