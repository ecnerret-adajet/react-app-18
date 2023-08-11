import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {


    // built in class in modern browser
    const controller = new AbortController();

    setLoading(true);
    axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`, { signal: controller.signal })
    .then((res) => {
      setUsers(res.data)
      setLoading(false);
    })
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message)
      setLoading(false);
    })
    // .finally(() => { // after the then or catch is executed, run the code once, not working with string mode is on
    //   setLoading(false);
    // });

    // clean up function for cancelling the request
    return () => controller.abort();
        
  }, []);

  return (
    <>
      { error &&  <p className="text-danger">{error}</p>}
      { loading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
