import React from 'react'

import { Row, Col, Container, ContainerFluid, Button } from 'react-bootstrap'
import PrixCard from './PrixCard'
import Fade from 'react-reveal/Fade';

import jade from '../../img/Prix/FLORENCE.jpg'
import florence from '../../img/Prix/JADE.jpg'
import noel from '../../img/Prix/_PGS.jpg'
import echelle from '../../img/Prix/Echelle-Lea.jpg'

import SecondRowCard from './SecondRowCard'

export default function Prix() {

    // Hard code des data de la carte


    const data = [
        {
            titre: "Prénoms sur cercle",
            text: "Nous faisons des noms personnalisés en bois, tous coupés et peints à la main.",
            imgSrc: jade,
            info: [{
                diametre: ["12 pouces", "18 pouces", "24 pouces", "30 pouces"],
                prixDeBase: ["30,00$", "40,00$", "50,00$", "60,00$"]
            }]
        },
        {
            titre: "Prénoms sur carré/rectangle",
            text: "Ces toises pourront suivre vos enfants tout au long de leur croissance! Cela fait aussi un cadeau idéale et unique!",
            imgSrc: florence,
            info: [{
                diametre: ["12x12", "12x24", "16x20", "16x36", "18x48"],
                prixDeBase: ["20,00$", , "40,00$", "45,00$", "60,00$", "75,00$"]
            }]
        }
    ]

    const dataSecondRow = [
        {
            titre: "ÉCHELLES DE CROISSANCE",
            imgSrc: echelle,
            content: "Prix : 90,00 $ et plus . Nos échelles de croissance sont faits en pin. Elles ont 52 pouces de hauteur, et doivent être installées à à 10 pouces du sol. Le prix dépend des détails des éléments à ajouter sur l’échelle. Elles sont personnalisables à 100 % ! N’hésitez pas à nous écrire pour vos idées, tout est possible ou presque!"
        },
        {
            titre: "AUTRES",
            imgSrc: noel,
            content: "Veuillez nous écrire pour vos demandes spéciales (logos, signes thématiques, adresse civique, etc,)"
        }
    ]

    const prixInfo = "Toutes nos découpes sont faites à la main, ce qui est à prendre en considération dans le prix. Nous utilisons du contreplaqué de merisier 1/2 pouce d’épaisseur, qui est un bois de qualité et durable. Toutes les créations sont munit d’un crochet pour vous permettres d’accrocher facilement votre signe en bois au mur."
    return (
        <div className="prix-wrapper ">
            <div className="container prix ">
                <header id="prix-header">
                    <Container>
                        <Row className="d-flex justify-content-center p-2 pt-5 text-center">
                            <Col md="10" lg="6" sm="12">
                                <p>{prixInfo}</p>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Row id="prix-row " className="d-flex justify-content-center text-center mx-auto">
                    {data.map((index, i) => (
                        <Col md="6" sm="12" key={i} className="prix-card-wrapper">
                            <Fade>
                                <PrixCard
                                    titre={index.titre}
                                    src={index.imgSrc}
                                    info={index.info} />
                            </Fade>
                        </Col>
                    ))}

                    {dataSecondRow.map((index, i) => (
                        <Col md="6" sm="12" key={i} className="prix-card-wrapper">
                            <Fade>
                                <SecondRowCard
                                    titre={index.titre}
                                    src={index.imgSrc}
                                    content={index.content} />
                            </Fade>
                        </Col>
                    ))}
                </Row>



            </div>

        </div>
    )
}
