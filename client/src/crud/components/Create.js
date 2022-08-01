import React, {useCallback, useEffect, useMemo, useState} from "react";
import {post, get} from "axios";


const Create = () => {
    const [state, setState] = useState({
        name: "",
        age: null,
        email: ""
    });
    const handleName = e => {
        setState(({age, email}) => {
            return {name: e.target.value, age, email};
        });
    };
    const handleAge = e => {
        setState(({name, email}) => {
            return {name, age: e.target.value, email};
        });
    };
    const handleEmail = e => {
        setState(({age, name}) => {
            return {email: e.target.value, age, name};
        });
    };
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
                            <div className={"mt-4"}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    {console.log('redering name Input')}
                                    <input type="text" className="form-control" placeholder="Enter your name" onChange={handleName}
                                           required={true}/>
                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="name">Age</label>
                                    {console.log('redering age Input')}
                                    <input type="number" className="form-control" placeholder="Enter your age" onChange={handleAge}
                                           required={true}/>
                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="name">Email</label>
                                    {console.log('redering email Input')}
                                    <input type="email" className="form-control" placeholder="Enter your email" onChange={handleEmail}
                                           required={true}/>
                                </div>
                                <div className="form-group text-end pt-3">
                                    <button className="btn btn-primary">
                                        <i className="bi bi-plus" onClick={() => {
                                            post('localhost:5001/create', state)
                                        }}></i>Add Student
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;