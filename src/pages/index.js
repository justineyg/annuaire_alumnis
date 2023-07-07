import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from "styled-components";
import Link from 'next/link';
import { device } from './_app';


export const Homepage = styled.div `

display: flex;
flex-direction :column;
align-items: center;
text-align: center;
justify-content: center;
height: 100vh;


h1{
  margin-bottom: 50px;
}

  .button__homepage{
    background-color: #21534f;
    
    padding: 20px 50px;
    border-radius: 5px;
    border: 1px solid #21534f;
    font-weight: bold;
    
    &:not(last-child){
      margin-bottom: 20px;
      width: 500px;
    }
    }
  }


  

`

export default function Home() {
    return ( 
      <>
        <Head>
        <title>Annuaire Alumni | Sciences Po Saint-Germain-en-Laye </title> 
        <meta name = "viewport"
        content = "initial-scale=1.0, width=device-width" />
        </Head> 
        <Homepage>
        <h1> Vous êtes : </h1> 
        <div className = 'btn__section' >
        <p className = 'button__homepage' >
        <Link className = 'btn' href = "/professional" > Un professionnel</Link> 
        </p> 
        <p className = 'button__homepage'>
        <Link className = 'btn' href = "/" > Un Alumni</Link> 
        </p> 
        <p className = 'button__homepage'>
        <Link className = 'btn' href = "/login" > Un étudiant</Link> 
        </p> 
        </div> 
        </Homepage>
        </>
    )
}