import React from "react";
import Link from "next/link";
import styled from "styled-components";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   solid,
//   regular,
//   brands,
//   icon
//  } from '@fortawesome/fontawesome-svg-core/import.macro';

export const Nav = styled.div`
padding: 20px 0px;
margin-bottom: 50px;
display: flex;
justify-content: space-between;

ul{
    display: flex;
    gap: 30px;
    justify-content: flex-end;
    

}

`
function Navbar() {
    return ( 
        <>
        <Nav>
            <div className="left__section">
            
            </div>
            <div className="right__section">
    <ul>
        {/* <li><Link href="/"><FontAwesomeIcon icon={solid('home')} size='1x' /> Home</Link></li>
        <li><Link href="/profil"><FontAwesomeIcon icon={solid ('user')} size='1x' /> Profil</Link></li>
        <li><Link href="/login"><FontAwesomeIcon icon={solid('right-to-bracket')} size='1x' /> Se connecter</Link></li>*/
    }
    </ul>
    </div>
        </Nav>
        </>
    )
}

export default Navbar;