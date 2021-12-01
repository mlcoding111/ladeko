import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Boutique() {
    return (
        <>
      <Container >
        <Row>
          <Col md="12" className="header-wrapper">
            <h1 className="my-3 text-center header-wrapper" id="realisation-h1">
              Boutique
            </h1>
          </Col>
        </Row>
        <section id="boutique" className="h-100 d-flex justify-content-center align-items-center h-100">
            <Row >
                <Col md="12" className="d-flex">
                <h3>Boutique en ligne</h3>
                </Col>
            </Row>
      
        </section>
      </Container>
      <hr></hr>
    </>
    )
}
