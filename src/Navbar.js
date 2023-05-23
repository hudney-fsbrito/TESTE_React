import React from "react";
import Foto from "./assets/fone-embaçado.svg"


function Navbar(props) {
    return (
        <nav className='navbar '>

            <img className="Foto d-inline-block" src={Foto} alt="" />

            <button className="navbar-toggler  bg-primary btn-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list "></i>
            </button>

            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                <div className="d-flex justify-content-end ">
                    <ul className="Menu-descricao navbar-nav ">
                        <li >
                            <a href="#sobre">About</a>
                        </li>
                        <li >
                            <a href="#projeto">Project</a>
                        </li>
                        <li >
                            <a href="#contato">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            
            {/* <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

          <div className="container-fluid">

            <a className="navbar-brand" href="#">Navbar</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>
        
      </div> */}
        </nav>
    )
}

export default Navbar;