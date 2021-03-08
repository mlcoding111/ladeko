import React from 'react'
import { Row, Col, Container, Button, Card } from 'react-bootstrap'

import boo from '../../img/Acceuil/SectionDisplay/BOO.jpg'
import caelie from '../../img/Acceuil/SectionDisplay/CAELIE.jpg'
import prenoms from '../../img/Acceuil/SectionDisplay/prenoms.jpg'

import CardDisplay from './CardDisplay'

import Fade from 'react-reveal/Fade';


export default function SectionDisplay() {

    const data = [
        {
            titre: "Prénoms",
            text: "Nous faisons des noms personnalisés en bois, tous coupés et peints à la main.",
            imgSrc: prenoms
        },
        {
            titre: "Échelle de croissance",
            text: "Ces toises pourront suivre vos enfants tout au long de leur croissance! Cela fait aussi un cadeau idéale et unique!",
            imgSrc: caelie
        },
        {
            titre: "Autres",
            text: "Un large choix d’objets décoratifs s’offrent à vous. Vous avez une demande spéciale mais elle ne se retrouve pas sur notre site? Envoyez nous votre projet! Tout est réalisable, ou presque!",
            imgSrc: boo
        },
    ]
    return (
        <>
            <Container>

                <Row className="d-flex justify-content-center text-center">
                    {data.map((index, i) => (
                        <Col md="10" sm="10" lg="4" className="display-wrapper">
                            <CardDisplay src={index.imgSrc} titre={index.titre} text={index.text} />
                        </Col>
                    ))}
                </Row>



                {/* <Row className="d-flex justify-content-center text-center">
                    {data.map((index, i) => (
                        <Col md="4" className="display-wrapper">
                            <img src={index.imgSrc} key={i} width="100%" />
                            <h3 className="mt-3">{index.titre}</h3>
                            <p>{index.text}</p>
                            <Button variant="dark">En savoir plus</Button>
                        </Col>
                    ))}
                </Row> */}
            </Container>
        </>
    )
}
