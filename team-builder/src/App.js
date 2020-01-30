import React, { useState } from 'react'
import Container from './components/container'
import TeamForm from './components/teamForm'
import TeamButton from './components/button'

function App() {
  const [teams, setTeams] = useState([
    {
      id: 0,
      name: 'team1',
      color: '#e6f7ff'
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
    let countTwo = -1
  return (
    <div className="App">
      <TeamForm addTeam={addTeam} />
      {teams.map(team => {
        count++
        return  <TeamButton id={count} key={count} deleteTeam={deleteTeam} team={team} />
      })}
      {teams.map(team => {
          countTwo++
          return <Container id={countTwo} color={team.color} key={countTwo}/>
      })}
    </div>
  );
}

export default App;
