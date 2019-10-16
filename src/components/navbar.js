import React, { useState} from 'react';

export default function Navbar() {
    return (
        <div className="navbar has-shadow">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <p className="tile">Easy Todo</p>
                </div>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field has-addons">
                            <p className="control is-expanded">
                                <input type="text" className="input"/>
                            </p>
                            <p className="control">
                                <button className="button is-info has-text-weight-bold">
                                    Add Todo
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
