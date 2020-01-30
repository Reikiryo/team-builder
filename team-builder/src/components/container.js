import React from 'react'
import Form from './forms'
import Card from './card'
import styled from 'styled-components'

const Cont = styled.div`
	background-color: #e6f7ff;
`

const Container = ({ team, addMember }) => {

    return (
		<div>
			<Form team={team} addMember={addMember}/>
			{team.map(member => (
				<Card key={member.id} member={member}/>
			))}
		</div>
    );
}
 
export default Container;