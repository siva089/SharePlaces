import React from 'react'
import UserList from "../Components/UsersList"
 const Users = () => {
     const USERS=[{id:'u1',name:'siva',image:'https://cdn.pixabay.com/photo/2019/12/02/03/26/snow-4666831__340.jpg',places:2}]
    return <UserList items={USERS} />
}

export default Users