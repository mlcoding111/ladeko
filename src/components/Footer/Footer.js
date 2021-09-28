import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>À PROPOS </h6>
                            <FontAwesomeIcon icon="check-square" />
                            <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

                            <p className="text-justify">Site web fait par MLWeb ( Michael Lacroix )</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><Link to="/" activeClass="active">Accueil</Link></li>
                                <li><Link to="/Realisations" activeClass="active" >Réalisations</Link></li>
                                <li><Link to="/prix" activeClass="active">Prix</Link></li>
                                <li><Link to="/contact" activeClass="active">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                <code> MLWeb </code>
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/Ladeko-108600243874351" target="_blank"><ion-icon name="logo-facebook" size='large'></ion-icon></a></li>
                                {/* <li><a className="twitter" href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
