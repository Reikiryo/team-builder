import React from 'react'
import Form from './forms'
import Card from './card'
import styled from 'styled-components'

const Cont = styled.div`
	background-color: #e6f7ff;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`
const Container = ({ team,addMember,editMember,memberToEdit,changeMember }) => {

    return (
		<div>
			<Form changeMember={changeMember} memberToEdit={memberToEdit} team={team} addMember={addMember}/>
			<Cont>
			{team.map(member => (
				<Card editMember={editMember} key={member.id} member={member}/>
			))}
			</Cont>
		</div>
    );
}
 
export default Container;