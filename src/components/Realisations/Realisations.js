import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Realisationss(props) {
  let photos = require("../../localdb/images.json");  

  // function importAll(r) {
  //     return r.keys().map(r);
  // }

  //const imagesData = importAll(require.context('../../img/Realisation/', false, /\.(png|jpe?g|svg)$/));

  const imagesData = [
    {
      src: require("../../img/Realisation/01.jpg"),
    },
    {
      src: require("../../img/Realisation/02.jpg"),
    },
    {
      src: require("../../img/Realisation/03.jpg"),
    },
    {
      src: require("../../img/Realisation/ALEXIA.jpg"),
    },
    {
      src: require("../../img/Realisation/ALEXIS.jpg"),
    },
    {
      src: require("../../img/Realisation/ALIX.jpg"),
    },
    {
      src: require("../../img/Realisation/AMOUR1.jpg"),
    },
    {
      src: require("../../img/Realisation/AMOUR2.jpg"),
    },
    {
      src: require("../../img/Realisation/ARIA.jpg"),
    },
    {
      src: require("../../img/Realisation/ARNAUD.jpg"),
    },
    {
      src: require("../../img/Realisation/BEATRICE.jpg"),
    },
    {
      src: require("../../img/Realisation/BOO.jpg"),
    },
    {
      src: require("../../img/Realisation/BOOMER.jpg"),
    },
    {
      src: require("../../img/Realisation/BRANDON.jpg"),
    },
    {
      src: require("../../img/Realisation/CHEVREUIL.jpg"),
    },
    {
      src: require("../../img/Realisation/CAELIE.jpg"),
    },
    {
      src: require("../../img/Realisation/CORALIE.jpg"),
    },
    {
      src: require("../../img/Realisation/COULOMBE.jpg"),
    },
    {
      src: require("../../img/Realisation/Echelle de croissance.jpg"),
    },
    {
      src: require("../../img/Realisation/Echelle-edouard.jpg"),
    },
    {
      src: require("../../img/Realisation/Echelle-Lea.jpg"),
    },
    {
      src: require("../../img/Realisation/Echelle-Louka.jpg"),
    },
    {
      src: require("../../img/Realisation/ELIE.jpg"),
    },
    {
      src: require("../../img/Realisation/EVALIE.jpg"),
    },
    {
      src: require("../../img/Realisation/FAMILLE.jpg"),
    },
    {
      src: require("../../img/Realisation/FLORENCE.jpg"),
    },
    {
      src: require("../../img/Realisation/GIMLI.jpg"),
    },
    {
      src: require("../../img/Realisation/JACOB1.jpg"),
    },
    {
      src: require("../../img/Realisation/JACOB2.jpg"),
    },
    {
      src: require("../../img/Realisation/JADE.jpg"),
    },
    {
      src: require("../../img/Realisation/JAYDEN.jpg"),
    },
    {
      src: require("../../img/Realisation/JOYEUX NOEL.jpg"),
    },
    {
      src: require("../../img/Realisation/JOYEUX NOEL2.jpg"),
    },
    {
      src: require("../../img/Realisation/KARA.jpg"),
    },
    {
      src: require("../../img/Realisation/LAURA.jpg"),
    },
    {
      src: require("../../img/Realisation/LIAM.jpg"),
    },
    {
      src: require("../../img/Realisation/LOHAN.jpg"),
    },
    {
      src: require("../../img/Realisation/MATEO.jpg"),
    },
    {
      src: require("../../img/Realisation/MAVI.jpg"),
    },
    {
      src: require("../../img/Realisation/MIA.jpg"),
    },
    {
      src: require("../../img/Realisation/MIA2.jpg"),
    },
    {
      src: require("../../img/Realisation/NOELIE.jpg"),
    },
    {
      src: require("../../img/Realisation/NOLAN.jpg"),
    },
    {
      src: require("../../img/Realisation/NOVALIE.jpg"),
    },
    {
      src: require("../../img/Realisation/OLIVIA.jpg"),
    },
    {
      src: require("../../img/Realisation/PGS CONSTRUCTION.jpg"),
    },
    {
      src: require("../../img/Realisation/RAPHAELLE.jpg"),
    },
    {
      src: require("../../img/Realisation/ROSE ELIE.jpg"),
    },
    {
      src: require("../../img/Realisation/SOPHIA.jpg"),
    },
    {
      src: require("../../img/Realisation/CALANDRIERNOEL.jpg"),
    },
    {
      src: require("../../img/Realisation/mickeymouse.jpg"),
    },
    {
      src: require("../../img/Realisation/CHARLES.jpg"),
    },
    {
      src: require("../../img/Realisation/NATAN.jpg"),
    },
    {
      src: require("../../img/Realisation/MYLAN.jpg"),
    },
    {
      src: require("../../img/Realisation/CRISPIN.jpg"),
    },
    {
      src: require("../../img/Realisation/OLIVIER.jpg"),
    },
    {
      src: require("../../img/Realisation/MARY.jpg"),
    },
    {
      src: require("../../img/Realisation/ARTHUR.jpg"),
    },
    {
      src: require("../../img/Realisation/NOAH.jpg"),
    },
    {
      src: require("../../img/Realisation/ELRIK.jpg"),
    },
    {
      src: require("../../img/Realisation/EMILIE.jpg"),
    },
    {
      src: require("../../img/Realisation/BASTIEN.jpg"),
    },
    {
      src: require("../../img/Realisation/JAKE.jpg"),
    },
    {
      src: require("../../img/Realisation/LOUAM.jpg"),
    },
    {
      src: require("../../img/Realisation/ARNAUD2.jpg"),
    },
    {
      src: require("../../img/Realisation/FXR.jpg"),
    },
    {
      src: require("../../img/Realisation/POLARIS.jpg"),
    },
    {
      src: require("../../img/Realisation/MOM.jpg"),
    },
    {
      src: require("../../img/Realisation/MAYLIANE.jpg"),
    },
    {
      src: require("../../img/Realisation/LEA.jpg"),
    },
    {
      src: require("../../img/Realisation/AMELY.jpg"),
    },
    {
      src: require("../../img/Realisation/ZOE.jpg"),
    },
    {
      src: require("../../img/Realisation/MILWAKE.jpg"),
    },
    {
      src: require("../../img/Realisation/NOUAN.jpg"),
    },
    {
      src: require("../../img/Realisation/MAELIE.jpg"),
    },
    {
      src: require("../../img/Realisation/JACOB3.jpg"),
    },
    {
      src: require("../../img/Realisation/ECHELLE.jpg"),
    },
    {
      src: require("../../img/Realisation/MILA.jpg"),
    },
    {
      src: require("../../img/Realisation/JACOB4.jpg"),
    },
    {
      src: require("../../img/Realisation/NOAH2.jpg"),
    },
    {
      src: require("../../img/Realisation/GABRIELLE.jpg"),
    },
    {
      src: require("../../img/Realisation/IMHERE.jpg"),
    },
    {
      src: require("../../img/Realisation/MAXENCE.jpg"),
    },
    {
      src: require("../../img/Realisation/ECHELLEAUTO.jpg"),
    },
    {
      src: require("../../img/Realisation/TROIS-DEUX.jpg"),
    },
    {
      src: require("../../img/Realisation/LUDOVICK.jpg"),
    },
    {
      src: require("../../img/Realisation/ALEXIS2.jpg"),
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="header-wrapper">
            <h1 className="my-5 text-center" id="realisation-h1">
              Mes réalisations
            </h1>
          </Col>
        </Row>
        <section id="realisation-photos">
          {imagesData.map((index, i) => (
            <Zoom>
              <img src={index.src.default} />
            </Zoom>
          ))}
        </section>
      </Container>
      <hr></hr>
    </>
  );
}
