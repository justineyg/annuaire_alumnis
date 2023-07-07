import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from "styled-components";
import Link from 'next/link';
import { device } from './_app';
import Image from 'next/image';
import exemple from '../public/exemple.jpg';
import alumni from "../public/alumni.webp";

export const Login = styled.section`
display: flex;
height: 100vh;

section{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 100px;
}
.right__section{
    
    @media ${device.desktop} {
        background-color: #fff;
        width: 50%;
    }

    
    input{
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        width: 500px;
        margin-bottom: 20px
    }
    button[type="submit"]{
        background-color: #21534f;
        padding: 15px 20px;
        border: 1px solid #21534f;
        font-weight: bold;
    }

}

}
    .left__section{
        background-color: rgba(33,83,79,0.8);
        ;
        p{
            line-height: 1.8;
        }

    }


`
function Connexion() {
    return(
        <>
        <Head>
          <title>Connexion | Annuaire Alumni</title>
        </Head>
        <Login>
            <section className="left__section">
                <div style={{
                    zIndex: -1,
                    position: 'fixed',
                    width: "50vw",
                    height: "100%",

                }}>
            <Image 
                    alt='Les diplômés'
                    src="/diplomes.webp"                
                    fill
                    style={{
                        objectFit: 'cover',
                        
                        
                    }}
                />
            </div>
            <div>
                <h2>Bonjour,<br />et bienvenue sur l'annuaire des alumnis </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </section>
                
            <section className="right__section">
                <h2>Identifiez-vous</h2>
                <form>
                    <input type="email" name="email" id="email" placeholder="Email"></input>
                    <input type="password" name="password" id="password" placeholder="Mot de passe"></input>
                    <button type="submit">Se connecter</button>
                </form> 
            </section>
        </Login>
        </>
    );
}

export default Connexion;