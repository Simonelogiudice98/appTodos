import React from 'react';



export default function Header():JSX.Element{
    return(
        <header className="navbar">

            <div className="divLogo">
                <img src={require('../../assets/img/aalto_it.png')} alt="logo"/>
            </div>

        </header>
    );
}

