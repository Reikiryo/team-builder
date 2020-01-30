import React, { useState,useEffect } from 'react';

const Form = ({ addMember,memberToEdit,changeMember }) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    useEffect(() => {
        setMember({...memberToEdit})
    }, [memberToEdit])

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault()
        if (member.id === memberToEdit.id) {
            changeMember(member)
            setMember({ name: '', email: '', role: '0' })
        } else {
            addMember(member)
            setMember({ name: '', email: '', role: '0' })
        }
        
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                
                <input onChange={handleChanges} name='name' value={member.name} type='text' placeholder='name' />

                <input onChange={handleChanges} name='email' value={member.email} type='text' placeholder='email' />

                <select onChange={handleChanges} name='role' value={member.role}>
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