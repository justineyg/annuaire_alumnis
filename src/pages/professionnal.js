import Head from "next/head";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfessionalStyle = styled.div`
padding: 0 100px;
`

function Professional() {
    return(
        <>
         <Head>
            <title>Rechercher un diplômé | Sciences Po Saint-Germain-en-Laye </title> 
            <meta name = "viewport" content = "initial-scale=1.0, width=device-width" />
        </Head> 

        <ProfessionalStyle>
        <Navbar />

        <h1>Rechercher un diplômé</h1>
        <p>Lancer une recherche à partir d'un prénom et d'un nom.<br/>
        Pour une recherche plus avancée, veuillez-vous connecter.<br/>
        Si le résultat est nul et que vous êtes diplômé(e), merci de nous contacter pour mettre à jour vos informations.
        </p>
        </ProfessionalStyle>
        </>
    )
}
export default Professional;