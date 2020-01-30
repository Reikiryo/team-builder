import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 30%;
    margin: 2%;
    padding: 2%;
    border: 1px solid black;
`
const Button = styled.button`
    width: 20%;
    background-color: black;
    color: white;
`
const Card = ({ member, editMember }) => {
    const roleSet = role => {
        if (role === '1') {
            return 'UI Dev'
        } else if (role === '2') {
            return 'FE Dev'
        } else if (role === '3') {
            return 'BE Dev'
        }
    }
    return (
        <CardDiv>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h4 id='h4'>{roleSet(member.role)}</h4>
            <Button onClick={e => { editMember(member) }}>Edit</Button>
        </CardDiv>
    );
}

export default Card;