import React, { useEffect, useState } from "react";
import Table from "./Table";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchedUsers = await response.json();
        setUsers(fetchedUsers);
        setLoading((state) => !state);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const column = [
    { header: "id", attribute: "id" },
    { header: "name", attribute: "name" },
    { header: "username", attribute: "username" },
    { header: "phone", attribute: "phone" },
    { header: "website", attribute: "website" },
  ];

  return (
    <>{loading ? <p>Loading...</p> : <Table column={column} data={users} />}</>
  );
}

export default Users;
