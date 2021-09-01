import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = ()=>{
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom-fixed">
                    <div className="container-fluid">
                        <Link className="navbar-brand m-0 p-0 ms-5" id="nav-logo" to="/" >
                        <img id="logo" src="https://res.cloudinary.com/dovpwi9ea/image/upload/v1630085186/newapp_logo_til0wx.png" alt="..." wid-="50" height="50"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item ms-5">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
          
        )
}

export default Navbar
