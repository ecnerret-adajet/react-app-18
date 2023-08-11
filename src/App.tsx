import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {


    // built in class in modern browser
    const controller = new AbortController();

    axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`, { signal: controller.signal })
    .then((res) => setUsers(res.data))
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message)
    });

    // clean up function for cancelling the request
    return () => controller.abort();
        
  }, []);

  return (
    <>
      { error &&  <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
