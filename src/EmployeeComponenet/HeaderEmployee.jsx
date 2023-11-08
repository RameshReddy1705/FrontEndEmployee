import { Link } from "react-router-dom";

function HeaderEmployee() {
    return (
      <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
          <div className="row">
              <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">Reddy</a>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav">
                          <li className="nav-item fs-5">Home</li>
                          <li className="nav-item fs-5">List</li>
                          {/* <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Ramesh">Home</Link></li>
                          <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li> */}
                      </ul>
                  </div>
                  <ul className="navbar-nav">
                          <li className="nav-item fs-5">LogIn</li>
                          <li className="nav-item fs-5">LogOut</li>
                     
                      
                  </ul>
              </nav>
          </div>
      </div>
  </header>
    );
  }
  
  export default HeaderEmployee;