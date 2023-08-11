import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      setUsers(response.data)
    })

  },[]);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default App