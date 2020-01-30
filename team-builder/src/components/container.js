import React, { useState } from 'react'
import Form from './forms'
import Card from './card'
import styled from 'styled-components'


const Container = ({ color }) => {
	const Cont = styled.div`
	background-color: ${color};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`
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
	  const deleteMember = member => {
		const arr = [...team]
		let count = 0
		arr.splice(member.id, 1)
		arr.forEach(member => {
		  member.id = count
		  count++
		})
		setTeam(arr)
	  }

	return (
		<div>
			<Form
				changeMember={changeMember}
				memberToEdit={memberToEdit}
				team={team}
				addMember={addMember} />
			<Cont>
				{team.map(member => (
					<Card
						deleteMember={deleteMember}
						editMember={editMember}
						key={member.id}
						member={member} />
				))}
			</Cont>
		</div>
	);
}

export default Container;