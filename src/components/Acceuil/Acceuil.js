import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from './Header'
import SectionDisplay from './SectionDisplay'



export default function Acceuil() {

    
    return (
        <div className="acceuil-wrapper">
            <Header />
            <div className="container acceuil py-3">
                <Row className="d-flex justify-content-center text-center">
                    <Col md="8" lg="10" className="my-5">
                        <p id="acceuil-text">
                            Égayez votre espace avec des créations uniques faites à la main. Que ce soit pour l’arrivée d’un tout petit, offrir en cadeau, ou pour compléter le décor de votre maison!
            </p>
                    </Col>
                </Row>
                <section id="display">
                        <SectionDisplay />
                </section>


            </div>
            <section id="contact" className="mb-4">
                <div className="container d-flex justify-content-center contact-wrapper">
                    <Row className="d-flex justify-content-center text-center align-items-center p-4">
                        <Col md="12 d-flex justify-content-center">
                            <p>Contactez-nous maintenant pour passer une commande</p>
                        </Col>
                        <Col md="12">
                            <Link to="/contact"><Button variant="dark">Contactez-nous</Button></Link>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}
