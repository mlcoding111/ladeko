import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
export default function CardDisplay(props) {

    const { text, src, titre } = props;
    return (
        <Fade>
            <Card className="d-flex text-center align-items-center">
                <Card.Img variant="top" src={src} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title><h3>{titre}</h3></Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Link to="/prix" className="mt-auto"><Button variant="dark">En savoir plus</Button></Link>
                </Card.Body>
            </Card>

            {/* <img src={index.imgSrc} key={i} width="100%" />
            <h3 className="mt-3">{index.titre}</h3>
            <p>{index.text}</p>
            <Button variant="dark">En savoir plus</Button> */}

        </Fade>
    )
}
