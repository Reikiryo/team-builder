import React from 'react';

const Card = ({ member }) => {
    const roleSet = role => {
        //const h4 = document.querySelector('#h4')
        if (role === '1') {
            return 'UI Dev'
        } else if (role === '2') {
            return 'FE Dev'
        } else if (role === '3') {
            return 'Backend Dev'
        }
        console.log('HELLOWORLD')
    }
    return (  
        <div>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h4 id='h4'>{roleSet}</h4>
        </div>
    );
}
 
export default Card;