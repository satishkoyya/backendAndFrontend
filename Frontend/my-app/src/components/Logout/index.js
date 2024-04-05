import "./index.css"

import React from 'react';

import axios from 'axios';
 function Logout  () {
  


   
  
  const handleLogout = async () => {
    
    try {
      const response = await axios.post('http://localhost:8081/logout', {
        token :"sato" ,
        username:"hello" 
      } )
      console.log(response.data);
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button className='button' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;