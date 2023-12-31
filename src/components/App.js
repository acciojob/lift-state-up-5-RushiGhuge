
import React, { useState } from "react";
import './../styles/App.css';
// import { set } from "cypress/types/lodash";

const App = () => {

  // make s state
  const [isLoging, setIsLoggin] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1> 
      {/* 'Parent Component' */}
      {isLoging ? <p>You are logged in!</p> :

        <form onSubmit={(e) => {
          e.preventDefault();
          setIsLoggin(true);
        }} className="form">
          
          <div> UserName : <input type="text" placeholder="Username" /> </div>
          <div> Password : <input type="text" placeholder="Password" /> </div>
          <div> <button type="submit">Submit</button> </div>
        </form>

      }

    </div>
  )
}

export default App
