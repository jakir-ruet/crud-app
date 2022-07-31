import React, {useMemo} from "react";
import '../scss/main.scss';

const Table = ({ data }) => {
    let index = 1;
    const createButton = useMemo(() => <>
        <button className={"create"}>Create</button>
    </>, [])
    const tablefields = useMemo(() => <>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </>, []);
    const buttons = useMemo(() => {
        // noinspection BadExpressionStatementJS
        return <>
            <button className={"edit"}>Edit</button>
            <button className={"delete"}>Delete</button>
        </>

    }, []);
    return <>
        {/*<button className={"deleteSelected"}>Delete➖</button>*/}
        <big>
            {createButton}
        </big>
        <table>
            {tablefields}
            {data.map(({ name, age, email }) => {
                return <>
                    <tr>
                        <th>{index++}</th>
                        <th>{name}</th>
                        <th>{age}</th>
                        <th>{email}</th>
                        <th>
                            {buttons}
                        </th>
                    </tr>
                </>
            })}
        </table>
    </>
}
export default Table;