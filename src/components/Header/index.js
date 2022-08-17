import React from 'react'
import './Header.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
        <div className="header-logo">

        <a href="/">
            <img src="netflix_logo.png" alt="NetFlix" />
        </a>
        </div>
        <div className="header-user">
            <img src="icone_usuario.png" alt="Usuário" />
        </div>
        </header>
    )

}

