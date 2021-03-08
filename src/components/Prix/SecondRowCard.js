import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SecondRowCard(props) {

    const { text, src, titre, content } = props;

    if (!content) {
        return <h1>Still loading</h1>
    } else {
        return (
            <div>
                asdasds
                <Card className="py-5 h-100">
                    <Card.Img variant="top" src={src} />
                    <Card.Body className="d-flex flex-column text-center mx-auto h-100">
                        <Card.Title><h3>{titre}</h3></Card.Title>
                        <Card.Text>
                            {content}
                        </Card.Text>
                    </Card.Body>
                </Card>


                {/* <img src={index.imgSrc} key={i} width="100%" />
            <h3 className="mt-3">{index.titre}</h3>
            <p>{index.text}</p>
            <Button variant="dark">En savoir plus</Button> */}

            </div >
        )
    }



}
