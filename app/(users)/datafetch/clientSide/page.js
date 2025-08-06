"use client";

import { useEffect, useState } from "react";

const DataFetch = () => {
  const [userInfo, setUserInfo] = useState([]);
  const fetchData = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    setUserInfo(data);
    // console.log(userInfo);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Data Fetch Page</h1>
      <h2>User List</h2>
      {userInfo.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};
export default DataFetch;
