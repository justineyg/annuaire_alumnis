import Head from "next/head";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';


const Search = styled.div`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;


    search{
    display: flex;



}

label{
    margin-bottom: 20px;

}
input{
    padding: 10px 20px;
    width: 400px;
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 1.1rem;
}

button{
    all: unset;
    padding: 10px;

}

`

function Homepage(){

    const [datas, setDatas] = useState([]);
    return(
        <>
        <Head>
            <title>Page d'accueil |  Annuaire</title>
        </Head>
        <Navbar />
        <Search>
        <div className="search__section">
            <div className="search">
                <div className="searching__bar">
                    <label name="searching">Rechercher</label>
                    <div>
                    <input 
                        type="text" 
                        className="searchBar" 
                        id="searchBar" 
                        placeholder="Rechercher : Prénom, nom, secteur d'activité"
                        width={600}
                    />
                    <button type="submit"><FontAwesomeIcon icon={solid("magnifying-glass")} /></button>
                    </div>
                    
                </div> 
            </div>
            
            
            <div className="search_results">
                <div className="search_result">Résultats :</div>

            </div>
        </div>
        </Search>
        </>
    );
}

export default Homepage;