import React, { useState,useEffect } from 'react';
import Container from './components/container'

const Team = [
  {id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "Leader"}
]

function App() {
  const [team, setTeam] = useState([
    {id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "2"}
  ])
  const addMember = member => {
    const newMember = {
      id: team.length,
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeam([...team, newMember])
  }
  useEffect(() => {
    console.log(team)
  }, [team])
  return (
    <div className="App">
      <Container team={team} addMember={addMember}  />
    </div>
  );
}

export default App;
