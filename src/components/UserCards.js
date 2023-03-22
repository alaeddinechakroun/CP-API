import React from 'react'
import './UserCards.css'
const UserCards = ({ user }) => {
    return (
        <div className='List'>
           
            <p>
                {user.name}
                 <br/>
                {user.email}
                <br/>
                {user.phone}
                <hr></hr>
            </p>
        </div>
    )
}

export default UserCards