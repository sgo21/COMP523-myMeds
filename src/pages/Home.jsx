
import React, { useState } from 'react';
import Header from '../components/Header.jsx'
import {db} from '../firebase'
import '../css/Home.css';
import NavbarContainer from '../components/NavbarContainer'

const Home = () => {



    const [name, setName] = useState("");

    const handleSubmit =(e) => {
      e.preventDefault();
  
      db.collection('user').add({
        name:name,
      })
      .then(() => {
        alert('Got It');
      })
      .catch(error => {
        alert(error.mesage);
      })
  
    };


    return (
    <div className='home'>
      <div>
          <NavbarContainer/>
      </div>  
      <div class="submit">
        <form onSubmit={handleSubmit}>
          <label> Username</label>
          <input 
          placeholder='Hello'
          value={name} 
          onChange={(e) => setName(e.target.value)}/> 
          
    
          <button type='submit'>Submit</button>
        </form>
      </div>
      </div>

    
    )
}

export default Home;