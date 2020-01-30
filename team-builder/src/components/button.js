import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

const TeamButton = ({ team, deleteTeam }) => {
    const [color, setColor] = useState(team.color)
    useEffect(() => {
        setColor(team.color)
    }, [team])
    const Button = styled.button`
    background= ${color};
    margin-bottom: 1%;
    `
    const TeamDiv = styled.div`
    margin-right: 1%;
    `
    return (  
        <TeamDiv>
        <Button>{team.name}</Button>
        <Button onClick={deleteTeam}>X</Button>
        </TeamDiv>
    );
}
 
export default TeamButton;