import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className="contact-wrapper text-center" id="contact-page">
            <Row className="contact-row">
                <Col md="12">
                    <h6>Vous voulez passer une commande?</h6>
                    <h6>Vous avez des questions ?</h6>
                    <hr></hr>

                    {/* <h4 className="mt-5">Contactez nous !</h4> */}
                    <p className="my-5 font-weight-bold">fanny@ladeko.ca</p>
                    
                    <button type="button" id="contact-btn" class="btn btn-dark"><a href = "mailto: fanny@ladeko.ca">Contactez-nous</a></button>
                   
                </Col>

            </Row>
            {/* <span id="extra-info">*Site en développement, formulaire a venir*</span> */}
        </div>
    )
}
