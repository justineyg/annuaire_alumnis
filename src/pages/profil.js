import Head from "next/head";
import styles from '../styles/Home.module.css';
import styled from "styled-components";
import Navbar from "../components/Navbar";

const ProfilStyle = styled.section`
padding: 20px;
    h1 {
        text-align: center;
    }
    label{
        color: #7A7A7A;
    }
    input{
        margin-bottom: 20px;
    }
    .two__column{
        display: flex;
        
        
    }

`
function Profil() {
    return (
        <>

        <Head>
        <title>Annuaire Alumni | Profil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Navbar />
        <ProfilStyle>
        <h1>Mon profil</h1>
        <div>
            <form action="">
                <div className="two__column">
                <label>Nom</label>
                <input name="firstname" id="firstname" placeholder="Durant"></input>

                <label>Prénom</label>
                <input name="prenom"></input>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email"></input>
                    <input type="password" name="password" id="password" placeholder="Mot de passe"></input>
                </div>
                <div>
                <label>Biographie</label>
                <textarea placeholder="Ayant un parcours..."></textarea>
                </div>
                <div>
                <label>Secteur d'activité</label>
                <input type="text" placeholder="Attaché territorial" ></input>
                </div>
                <label>Promotion année et nom</label>
                <select name="promotion_year" id="promotion_year">
                    <option value="2010">2010 - Aimée Césaire</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018 - Joséphine Baker</option>
                    <option value="2090">2019</option>
                    <option value="2020">2020</option>
                </select>
                    <div className="Button">
                    <button type="submit">Modifier</button>
                    <button type="submit">Prévisualiser</button>
                    </div>
            </form>
        </div>
        </ProfilStyle>
        </>
    );
}

export default Profil;