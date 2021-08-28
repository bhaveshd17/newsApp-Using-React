import React, { Component } from 'react'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom-fixed">
                    <div className="container-fluid">
                        <a className="navbar-brand m-0 p-0 ms-5" id="nav-logo" href="/" >
                        <img src="https://res.cloudinary.com/dovpwi9ea/image/upload/v1630085186/newapp_logo_til0wx.png" alt="..." width="50" height="50"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-2" style={{width: '120px'}} href="/">entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">general</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">science</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="/">sports</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="/">technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
          
        )
    }
}

export default Navbar
