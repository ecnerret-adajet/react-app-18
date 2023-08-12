import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // built in class in modern browser
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<User[]>(`/users`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => { // after the then or catch is executed, run the code once, not working with string mode is on
    //   setLoading(false);
    // });

    // clean up function for cancelling the request
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((item) => item.id !== user.id));

    apiClient
      .delete(`/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 100, name: "Terrence" };
    setUsers([newUser, ...users]);

    apiClient
      .post(`/users`, newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name + "!"};
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    // put === replacing the object
    // patch == replacing 1 or more of its properties

    apiClient.patch(`/users/${user.id}`, updatedUser)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    })

  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users?.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button className="btn btn-secondary mx-2" onClick={() => updateUser(user)}>Update</button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
