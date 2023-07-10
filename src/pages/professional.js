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

.block_info_user{
    display: flex;
        justify-content: space-between;
}

button{    
    all: unset;
    margin-top: 2.4em;
    background: transparent;
    border: 2px solid white;
    padding: 1em 4em;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    position: relative;
    transition: all 300ms ease;
    span {
        display: inline-block;
        transition: all 300ms ease;
        z-index: 2;
    }
    &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        transition: all 300ms ease;
        opacity: 0;
    }
    &:before {
        height: 7px;
        width: 7px;
        background: transparent;
        border-right: 2px solid;
        border-top: 2px solid;
        right: 30px; top: 21px;
        transform: rotate(45deg);
    }
    &:after {
        background: white;
        height: 2px;
        width: 50px;
        left: 0;
        top: 1.55em;
        z-index: 1;
    }
    &:hover {
        span {
            transform: translateX(-10px);
        }
        &:before {
            opacity: 1;
        }
        &:after {
            width: 14px;
            opacity: 1;
            transform: translateX(175px);
        }
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

       
            <form action="" method="POST">
                <div className="block_info_user">
                    <div>
                <label for="firstname">Nom : * </label>
                    <input 
                        type="text" 
                        id="firstname" 
                        name="firstname"
                        required
                    />
                    </div>
                    <div>
                    <label for="name">Prénom : * </label>
                    <input
                        type="text"
                        id="name"
                        name="name" 
                        required
                    />
                    </div>
                </div>
                <label for="name">Nom de promotion et l'année : * </label>
                <select id="name" name="name">
                    <option value="josephineBaker">Joséphine Baker, 2022</option>
                    <option value="simoneVeil">Simon Veil, 2021</option>
                    <option value="aimeCesaire">Aimé-Césaire, 2020</option>
                    <option value="Gisèle Halimi">Gisèle Halimi, 2019</option>
                </select>

                <button type="submit">Rechercher</button>
            </form>

        </ProfessionalStyle>
        </>
    )
}
export default Professional;