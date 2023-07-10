import Head from "next/head";
import Navbar from "/components/Navbar";
import styled from "styled-components";

const ProfessionalStyle = styled.div`
padding: 0 100px;
.header_block p{
        line-height: 1.5;
}
.link{
    text-decoration : underline;
    font-weight: bold;
}
form{
    margin-top: 50px;
    
}


}
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
        <div className="header_block">
        <h1>Rechercher un diplômé</h1>
        <p>Lancer une recherche à partir d'un prénom et d'un nom.</p>
        <p>Si le résultat est nul et que vous êtes diplômé(e), merci de <a className="link" href="https://sciencespo-alumni.fr/contact">nous contacter</a> pour mettre à jour vos informations.</p>
        </div>

        <div>
            <form action="" method="POST">
                <label for="firstname">Nom : * </label>
                <input 
                    type="text" 
                    id="firstname" 
                    name="firstname"
                    required
                />

                <label for="name">Prénom : * </label>
                <input
                    type="text"
                    id="name"
                    name="name" 
                    required
                />

                <label for="name">Nom de promotion et l'année : * </label>
                <select id="name" name="name">
                    <option value="josephineBaker">Joséphine Baker, 2022</option>
                    <option value="simoneVeil">Simon Veil, 2021</option>
                    <option value="aimeCesaire">Aimé-Césaire, 2020</option>
                    <option value="Gisèle Halimi">Gisèle Halimi, 2019</option>
                </select>

                <button type="submit">Rechercher</button>
            </form>
        </div>
        </ProfessionalStyle>
        </>
    )
}
export default Professional;