import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TeamButton = ({ team, deleteTeam, color }) => {
    const Button = styled.button`
    background-color: ${color};
    margin-bottom: 1%;
    `
    const TeamDiv = styled.div`
    margin-right: 1%;
    `
    return (
        <TeamDiv>
            <Button>{team.name}</Button>
        </TeamDiv>
    );
}

export default TeamButton;