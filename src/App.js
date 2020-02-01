import React, { useState } from 'react'
import Container from './components/container'
import TeamForm from './components/teamForm'
import TeamButton from './components/button'
import styled from 'styled-components'

const TeamDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

function App() {
  const [teams, setTeams] = useState([
    {
      id: 0,
      name: 'Team Name',
      color: '#3366FF'
    }
  ])
  const addTeam = team => {
    const newTeam = {
      id: teams.length,
      name: team.name,
      color: team.color
    }
    setTeams([...teams, newTeam])
  }
  const deleteTeam = team => {
    const arr = [...teams]
    let count = 0
    arr.splice(team.id, 1)
    arr.forEach(team => {
      team.id = count
      count++
    })
    setTeams(arr)
  }
  let count = -1

  return (
    <div className="App">
      <TeamForm addTeam={addTeam} />

      {teams.map(team => {
        count++
        return <Container
          Team={team}
          name={team.name}
          deleteTeam={deleteTeam}
          id={count}
          color={team.color}
          key={count} />
      })}
    </div>
  );
}

export default App;
