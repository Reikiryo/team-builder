import React, { useState } from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`
    margin-bottom: 1%;
`

const TeamForm = ({ addTeam }) => {
    const [team, setTeam] = useState({
        name: '',
        color: '#3366FF'
    })
    const submitForm = e => {
        e.preventDefault()
        addTeam(team)
        setTeam({ name: '', color: '#3366FF' })
    }
    const handleChanges = e => {
        setTeam({ ...team, [e.target.name]: e.target.value })
    }
    return (
        <FormDiv>
            <label>
                New Team
            <form onSubmit={submitForm}>
                    <input
                        onChange={handleChanges}
                        value={team.name}
                        name='name'
                        id='team'
                        type='text'
                        placeholder='team name' />
                    <label htmlFor='color' > Color </label>
                    <input
                        value={team.color}
                        id='color'
                        name='color'
                        onChange={handleChanges}
                        type='color' />
                    <input
                        name='Submit'
                        type='submit' />
                </form>
            </label>
        </FormDiv>
    );
}

export default TeamForm;