// import React from 'react'

// Axios
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";

// URL da API
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {

  const [user, setUser] = useState<{ username: string, email: string } | null>(null);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("TOKEN:", localStorage.getItem("token"));

        console.log("REQ HEADERS:", {
          Authorization: `Bearer ${token}`
        });

        // Log the token
        console.log("Token:", token);

        const response = await axios.get(`${apiUrl}/api/home`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data.user);

      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    getUser();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4"> Bem-Vindo(a)! </h1>
      {user ? (
        <div className="text-lg text-gray-200">
          <p className='text-black'><strong> Nome: </strong> {user.username} </p>
          <p className='text-black'><strong> Email: </strong> {user.email} </p>
        </div>
      ) : (
        <p className="text-[#1d1d1d]"> Carregando as informações do usuário... </p>
      )}
    </div>
  );
}

export default Home;
