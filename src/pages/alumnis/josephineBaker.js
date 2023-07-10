import Head from "next/head";
import Navbar from "/components/Navbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { createClient } from "contentful"
import UserCard from "../../../components/UserCard";

const JosephineBakerStyle = styled.div`
padding: 0 100px;

h1{
    text-align: center;
}
    table {  
        margin-top: 60px;

            width:100%;
            border:1px solid $color-form-highlight;
            border-collapse: collapse;
        thead{
            background-color: #22534f;   
            padding: 20px;
            margin-bottom: 20px;

        }
        th, td {
        padding: 20px 30px;
        text-align:left;
        }
        
    }

`

export async function getStaticProps() {
    //Récupérer les données contentful pour les afficher côté client
  
    const client = createClient({
      //connexion au compte contentful
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'directory' })

    return {
        props: {
            users: res.items
        }
    }
}
export default function JosephineBaker({ users }) {
    // const {name, firstname, businessSector, slug } = user.fields
    console.log(users)
    return(
        <JosephineBakerStyle>
        <>
            <Head>
                <title>Promotion Joséphine Baker | Sciences Po Saint-Germain-en-Laye </title> 
                <meta name = "viewport" content = "initial-scale=1.0, width=device-width" />
            </Head> 

            <Navbar />
            
            <h1>Promotion Josephine Baker, 2022</h1>

                <table className="users-informations">
                <thead>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Secteur d'activité</th>
                        <th>Nom de promotion et année</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                    {users.map(directory =>(
                            <UserCard key={directory.sys.id} directory={directory}/>
                        ))}
                     </tbody>
                </table>
            
        </>
        </JosephineBakerStyle>
    )
}
