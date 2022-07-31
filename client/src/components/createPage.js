import React from "react";

const CreatePage = () => {
    return <>
        <form>
            <div>
                <label>Name</label>
                <input type={'text'}/>
            </div>
            <div>
                <label>Age</label>
                <input type={'number'}/>
            </div>
            <div>
                <label>Email</label>
                <input type={'email'}/>
            </div>
        </form>
    </>
}
export default CreatePage;