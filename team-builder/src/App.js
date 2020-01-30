import React, { useState } from 'react';
import Container from './components/container'

const Team = [
  {id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "Leader"}
]

function App() {
  const [team, setTeam] = useState([
    {id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "Leader"}
  ])
  const addMember = member => {
    const newMember = {
      id: team.length,
      name: '',
      email: '',
      role: ''
    }
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
      <Container team={team} addMember={addMember}  />
    </div>
  );
}

export default App;
