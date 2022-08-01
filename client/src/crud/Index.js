import * as React from "react";
import {useMemo} from "react";

const Index = ({ data }) => {
    let createButton = useMemo(() => (
            <a href="/Create" className="btn btn-warning">
                <i className="bi bi-person-plus"></i> Create
            </a>))
    let readButton = useMemo(() => (
        <a href="/read" className="btn btn-primary">
            <i className="bi bi-card-checklist"></i>  Read
        </a>
    ))
    let editButton = useMemo(() => (
        <a href="/create" className="btn btn-primary btn-warning">
            <i className="bi bi-pencil-square"></i>  Edit
        </a>
    ), [])
    let deleteButton = useMemo(() => (
        <a href="/read" className="btn btn-primary btn-danger">
            <i className="bi bi-trash"></i>  Delete
        </a>
    ), []);
    const fields = useMemo(() => (
        <tr className="pt-2 pb-2">
            <th className="text-center align-middle">SL</th>
            <th className="text-center align-middle">Name</th>
            <th className="text-center align-middle">Age</th>
            <th className="text-center align-middle">Email</th>
            <th className="text-center align-middle">Actions</th>
        </tr>
    ))
    return (
        <div className="col-md-8 offset-2 mt-5">
            <div className="card">
                <div className="card-header text-bg-primary">
                    <div className="d-flex align-middle">
                        <div className="pt-2 mt-1">
                            <span className="fw-bold">Student Table</span>
                        </div>
                        <div className="ms-auto p-1">
                            {createButton}
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0 pb-0">
                    <div className="row">
                        <table className="table table-striped table-hover mb-0">
                            <thead>
                                {fields}
                            </thead>
                            <tbody>
                                <tr>
                                    {data.map(( {name, age, email} ) => (
                                         <>
                                             <td className="text-center align-middle">1</td>
                                             <td className="align-middle">{name}</td>
                                             <td className="align-middle">{age}</td>
                                             <td className="align-middle">{email}</td>
                                             <td className="text-center align-middle d-flex justify-content-center">
                                                 <div className="p-1">
                                                     {readButton}
                                                 </div>
                                                 <div className="p-1">
                                                     {editButton}
                                                 </div>
                                                 <div className="p-1">
                                                     {deleteButton}
                                                 </div>
                                             </td>
                                         </>
                                        )
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;