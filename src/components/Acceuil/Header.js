import React from 'react'

import logo from '../../img/Acceuil/logo_resize.svg'

export default function Header() {
    // Header de la page 
    return (
        <div className="prix-wrapper">
            <header>
                <img src={logo} alt="logoimg" width="50%"/>
            </header>
        </div>
    )
}
