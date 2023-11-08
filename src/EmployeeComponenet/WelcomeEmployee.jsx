import { Link } from "react-router-dom";

  
  function WelcomeEmployee() {
    return (
      <div className="App">
        Welcome page 
        <h3>Employee Details <Link to="/list">Click Here</Link></h3>

      </div>
    );
  }
  export default WelcomeEmployee