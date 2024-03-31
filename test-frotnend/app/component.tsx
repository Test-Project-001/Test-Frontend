'use client'

import axios from "axios";
import { useEffect, useState } from "react";
// import getConfig from 'next/config';
// const { publicRuntimeConfig: configEnv } = getConfig();

const ComponentExample = () => {
  const [backendMsg, setBackendMsg] = useState("No msg");
  const [backData, setBackData] = useState("No data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${process.env.NEXT_PUBLIC_BACKEND_BASE_ROUTE}`); // Assuming your Express backend server is running on the same host
        setBackendMsg(response.data); // Output the response from the backend
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOnclick = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${process.env.NEXT_PUBLIC_BACKEND_BASE_ROUTE}/data`); // Assuming your Express backend server is running on the same host
    setBackData(response.data);
  };

  return (
    <div>
      <h1>{backendMsg}</h1>
      <button onClick={handleOnclick}>Click here</button>
      <h1>{backData.toString()}</h1>
    </div>
  );
};


export default ComponentExample;