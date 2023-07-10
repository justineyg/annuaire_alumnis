import Head from "next/head";
import Navbar from "/components/Navbar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    solid,
    regular,
    brands,
    icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { createClient } from "contentful"
import UserCard from "../../../components/UserCard";

const IndexStyle = styled.div`
padding: 0 100px;
.schoolYear{
    margin-top: 60px;
    .school{
        
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
            div{   
                background-color: var( --light-green);

                border: 1px solid #white;

                .content{
                    padding: 20px;
                    width: 550px;
                    height: 100px;
                    display: flex;
                    justify-content: space-between;
                }
            }
    }
}


`
export default function index() {
   
    return(

        <IndexStyle>
            <Head>
                <title>Les promotions | Sciences Po Saint-Germain-en-Laye </title> 
                <meta name = "viewport" content = "initial-scale=1.0, width=device-width" />
            </Head> 

            <Navbar />
            
            <h1>Les promotions</h1>
            <section className="schoolYear">
                <div className="school">
                    <div>
                        <Image
                                alt='Les diplômés'
                                src="/img/josephineBaker.webp"
                                width={550} height={300}               
                                style={{
                                    objectFit: 'cover',
                                }}
                        />
                    <div className="content">
                        <h2>
                            <Link href="alumnis/josephineBaker">Joséphine<br /> Baker</Link>
                        </h2>
                        <p>Promotion 2022</p>
                    </div>
                </div>
                <div>
                    <Image
                                alt='Les diplômés'
                                src="/img/simoneVeil.webp"
                                width={500} height={300}               
                                style={{
                                    objectFit: 'cover',
                                }}
                        />
                    <div className="content">
                        <h2>
                            <Link href="alumnis/josephineBaker">Simone <br />Veil</Link>
                        </h2>
                        <p>Promotion 2021</p>
                    </div>
                </div>

                </div>
                    <div className="school">
                        <div>
                            <Image
                                        alt='Les diplômés'
                                        src="/img/aimeCesaire.webp"
                                        width={550} height={300}              
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                />
                            <div className="content">
                                <h2>
                                    <Link href="alumnis/josephineBaker">Aimé <br />Césaire</Link>
                                </h2>
                                <p>Promotion 2020</p>
                            </div>
                        </div>
                    <div>
                <Image
                            alt='Les diplômés'
                            src="/img/giseleHalimi.webp"
                            width={550} height={300}                
                            style={{
                                objectFit: 'cover',
                            }}
                    />
                    <div className="content">
                    <h2>
                        <Link href="alumnis/josephineBaker">Gisèle <br />Halimi</Link>
                    </h2>
                    <p>Promotion 2019</p>
                    </div>
                    </div>
                </div>
            </section>
        </IndexStyle>
    )
}