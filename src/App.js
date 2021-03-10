import React, { useState } from 'react';
import {db} from './firebase'

function App() {
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
    <form onSubmit={handleSubmit}>
      <label> Name</label>
      <input 
      placeholder='Hello'
      value={name} 
      onChange={(e) => setName(e.target.value)}/> 
      

      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
