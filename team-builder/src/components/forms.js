import React, { useState } from 'react';

const Form = ({ addMember }) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
        //console.log(member)
    }
    const submitForm = e => {
        e.preventDefault()
        addMember(member)
        setMember({ name: '', email: '', role: '0' })
    }
    return (
        <div>
            <form onSubmit={submitForm}>

                <input onChange={handleChanges} name='name' type='text' placeholder='name' />


                <input onChange={handleChanges} name='email' type='text' placeholder='email' />

                <select onChange={handleChanges} name='role' >
                    <option value='0' >Select Option</option>
                    <option value='1' >User Interface Dev</option>
                    <option value='2' >Front End Dev</option>
                    <option value='3' >Back End Dev</option>
                </select>

                <input type='submit' />

            </form>
        </div>
    );
}

export default Form;