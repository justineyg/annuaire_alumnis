import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from "styled-components";
import Link from 'next/link';
import { device } from './_app';
import Image from 'next/image';

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
    text-align: center;
    input{
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        width: 500px;
        margin-bottom: 20px
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
                transform: translateX(187px);
            }
        }
    }
}

}
    .left__section{
        background-color: rgba(33,83,79,0.8);
        ;
        span{
            font-family: 'Oree';
            font-weight: bold
            font-size: 1.5rem;
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
            <section className="left__section" style={{ backgroundImage: `url('/public/img/diplomes.webp')` }}>
                <div style={{
                    zIndex: -1,
                    position: 'fixed',
                    width: "50vw",
                    height: "100%",

                }}>
            <Image 
                    alt='Les diplômés'
                    src="/img/diplomes.webp"                
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div>
                <p><span>Bonjour,<br />et bienvenue sur l'annuaire des alumnis </span></p>
            </div>
            </section>
                
            <section className="right__section">
                <h1>Identifiez-vous</h1>
                <form method='POST' action=''>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email" 
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        pattern="[a-z0-9]{1,15}"
                        placeholder="Mot de passe" 
                    />
                    <button type="submit"><Link href="/alumnis">Se connecter</Link></button>
                </form> 
            </section>
        </Login>
        </>
    );
}

export default Connexion;