import React, { useState } from 'react'
import Form from './forms'
import Card from './card'
import styled from 'styled-components'


const Container = ({ Team, color, deleteTeam, name }) => {
	const Cont = styled.div`
	background-color: ${color};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	`
	const X = styled.button`
    background-color: red;
	margin-left: 90%;
	height: 2%;
`
	const [team, setTeam] = useState([
		{ id: 0, name: "Team Member", email: "MemberEmail@gmail.com", role: "1" }
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
				<h1>{name}</h1>
				<X onClick={e => { deleteTeam(Team) }}>X</X>
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