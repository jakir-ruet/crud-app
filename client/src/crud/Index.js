import * as React from "react";

const Index = () => {
    return(
        <div className="col-md-8 offset-2 mt-5">
            <div className="card">
                <div className="card-header text-bg-primary">
                    <div className="d-flex align-middle">
                        <div className="pt-2 mt-1">
                            <span className="fw-bold">Student Table</span>
                        </div>
                        <div className="ms-auto p-1">
                            <a href="/Create" className="btn btn-warning">
                                <i className="bi bi-person-plus"></i> Create
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0 pb-0">
                    <div className="row">
                        <table className="table table-striped table-hover mb-0">
                            <thead>
                                <tr className="pt-2 pb-2">
                                    <th className="text-center align-middle">SL</th>
                                    <th className="text-center align-middle">Name</th>
                                    <th className="text-center align-middle">Age</th>
                                    <th className="text-center align-middle">Email</th>
                                    <th className="text-center align-middle">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center align-middle">1</td>
                                    <td className="align-middle">TH Ahad</td>
                                    <td className="align-middle">9</td>
                                    <td className="align-middle">tm.ahad.07@@gmail.com</td>
                                    <td className="text-center align-middle d-flex justify-content-center">
                                        <div className="p-1">
                                            <a href="/read" className="btn btn-primary">
                                                <i className="bi bi-card-checklist"></i>  Read
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href="/create" className="btn btn-primary btn-warning">
                                                <i className="bi bi-pencil-square"></i>  Edit
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href="/read" className="btn btn-primary btn-danger">
                                                <i className="bi bi-trash"></i>  Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">2</td>
                                    <td className="align-middle">TH Ahad</td>
                                    <td className="align-middle">9</td>
                                    <td className="align-middle">tm.ahad.07@@gmail.com</td>
                                    <td className="text-center align-middle d-flex justify-content-center">
                                        <div className="p-1">
                                            <a href="/read" className="btn btn-primary">
                                                <i className="bi bi-card-checklist"></i>  Read
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href="/create" className="btn btn-primary btn-warning">
                                                <i className="bi bi-pencil-square"></i>  Edit
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href={() => false} className="btn btn-primary btn-danger">
                                                <i className="bi bi-trash"></i>  Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center align-middle">3</td>
                                    <td className="align-middle">TH Ahad</td>
                                    <td className="align-middle">9</td>
                                    <td className="align-middle">tm.ahad.07@@gmail.com</td>
                                    <td className="text-center align-middle d-flex justify-content-center">
                                        <div className="p-1">
                                            <a href="/read" className="btn btn-primary">
                                                <i className="bi bi-card-checklist"></i>  Read
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href="/create" className="btn btn-primary btn-warning">
                                                <i className="bi bi-pencil-square"></i>  Edit
                                            </a>
                                        </div>
                                        <div className="p-1">
                                            <a href={() => false} className="btn btn-primary btn-danger">
                                                <i className="bi bi-trash"></i>  Delete
                                            </a>
                                        </div>
                                    </td>
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