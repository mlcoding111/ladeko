import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function PrixCard(props) {

    const { text, src, titre, info } = props;

    if (!info) {
        return <h1>Still loading</h1>
    } else {
        return (
            <div>
                <Card className="py-5 d-flex flex-column text-center mx-auto">
                    <Card.Img variant="top" src={src} />
                    <Card.Body className="d-flex flex-column text-center mx-auto">
                        <Card.Title>
                            <h3>{titre}</h3>
                            </Card.Title>
                        <Card.Text>
                            <table className="w-100">
                                <tr>
                                    <th>
                                        Diamètre
                                    </th>
                                    <th>
                                        Prix de base
                                    </th>
                                    <th>
                                        <span className="text-white">Invisible</span>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        {info[0].diametre.map((index, i) => (
                                            <p>{index}</p>
                                        ))}
                                    </td>
                                    <td>
                                        {info[0].prixDeBase.map((index, i) => (
                                            <p>{index}</p>
                                        ))}
                                    </td>
                                    <td>
                                        +3.00$/lettre ou chiffre
                                    </td>
                                </tr>
                            </table>
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
