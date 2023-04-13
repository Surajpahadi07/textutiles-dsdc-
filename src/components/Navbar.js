// type rfc for creating components such as Navbar.js component
import React from 'react';

export default function Navbar(props) {

    return (
        <div >
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    {/* props.title  */}
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* props on titleFirst */}
                                <a className="nav-link active" aria-current="page" href="/">{props.titleFirst}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                            <input onClick={props.handleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        </div >

                    </div>
                </div>
            </nav>
        </div>
    )
}


                        // after code
// git add .
// git commit -m ""
// git push origin main  
