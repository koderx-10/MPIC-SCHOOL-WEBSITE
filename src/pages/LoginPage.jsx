import React from 'react'
import Login from '/src/authentication/Loginjsx'
import Register from '/src/authentication/Register'
import { useState } from 'react'

const LoginPage = () => {
  const [toggle, setToggle] = useState(false); 

  return (


    <div className="h-screen flex items-center justify-center bg-gray-100 ">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default LoginPage