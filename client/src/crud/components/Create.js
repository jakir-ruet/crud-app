import React, {useCallback, useEffect, useMemo, useState} from "react";
import axiosIntance from "../../AxiosIntances/axiosIntance";

const Create = () => {
    const [state, setState] = useState({
        name: "",
        age: null,
        email: ""
    });
    const [response, setResponse] = useState({
        status: null,
        stausText: null,
        data: null,
    });
    const handleCreateStudent = async () => {
        fetch('http://localhost:8080/create', {
            method: "POST",
            body: JSON.stringify(state)
        }).then(async res => console.log(await res.json()))
            .catch(err => { throw err; })
    };

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
                                    <input type="text" className="form-control" placeholder="Enter your name" onChange={handleName}
                                           required={true}/>
                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="name">Age</label>
                                    <input type="number" className="form-control" placeholder="Enter your age" onChange={handleAge}
                                           required={true}/>
                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" onChange={handleEmail}
                                           required={true}/>
                                </div>
                                <div className="form-group text-end pt-3">
                                    <button className="btn btn-primary" onClick={handleCreateStudent}>
                                        <i className="bi bi-plus" ></i>Add Student
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