import React, { useState } from 'react';
import Container from './components/container'

const Team = [
  { id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "Leader" }
]

function App() {
  const [team, setTeam] = useState([
    { id: 0, name: "Josiah Bailey", email: "josiahbailey101@yahoo.com", role: "2" }
  ])
  const [memberToEdit, setEdit] = useState()

  const editMember = member => {
    setEdit(member)
  }
  const changeMember = member => {
    const newMember = {
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role
    }
    const arr = [...team]
    arr[newMember.id] = newMember
    setTeam(arr)
  }
  const addMember = member => {
    const newMember = {
      id: team.length,
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
      <Container
        changeMember={changeMember}
        editMember={editMember}
        memberToEdit={memberToEdit}
        team={team}
        addMember={addMember} />
    </div>
  );
}

export default App;
