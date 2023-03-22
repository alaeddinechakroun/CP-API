import React from 'react'
import UserCards from './UserCards'

const UserList = ({listOfUsers}) => {
  return (
    <div>
      {listOfUsers.map(user => <UserCards user={user} />)}
    </div>
  )
}

export default UserList