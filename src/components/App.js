
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  // make s state
  const [isLoging, setIsLoggin] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}

      {isLoging ? <h4>You are logged in</h4> :

        <div className="form">
          <div> UserName : <input type="text" placeholder="Username" /> </div>
          <div> Password : <input type="text" placeholder="Password" /> </div>
          <div> <button onClick={() => setIsLoggin(true)}>Submit</button> </div>
        </div>

      }

    </div>
  )
}

export default App
