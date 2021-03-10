// import React, { useState } from 'react';
// import NavbarContainer from './components/NavbarContainer.jsx'
// import Header from './components/Header.jsx'
// import {db} from './firebase'
// import './App.css';


// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit =(e) => {
//     e.preventDefault();

//     db.collection('user').add({
//       name:name,
//     })
//     .then(() => {
//       alert('Got It');
//     })
//     .catch(error => {
//       alert(error.mesage);
//     })

//   };

  

//   return (
//     <div className="App">
//         <Header/>
//         <NavbarContainer/>

//     <form onSubmit={handleSubmit}>
//       <label> Username</label>
//       <input 
//       placeholder='Hello'
//       value={name} 
//       onChange={(e) => setName(e.target.value)}/> 
      

//       <button type='submit'>Submit</button>
//     </form>

//     </div>
//   );
// }


// export default App;

import NavbarContainer from './components/NavbarContainer.jsx'
import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavbarContainer/>
    </div>
  );
}

export default App;
