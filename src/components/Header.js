import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
//react hash router
export default function HomeHeader(){
    return (
        <nav className="header">
            <div className="header__top">
                <Link className="header__button" to="logowanie">Zaloguj</Link>
                <Link className="header__button" to="rejestracja">Załóż Konto</Link>
            </div>
            <ul className="header__bottom">
                <li className="header__menu-item" tabIndex={0}>
                    <ScrollLink
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Start
                    </ScrollLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <ScrollLink
                        activeClass="active"
                        to="threeCol"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O co chodzi?
                    </ScrollLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <ScrollLink
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        O nas
                    </ScrollLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <ScrollLink
                        activeClass="active"
                        to="help"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Fundacje i organizacje
                    </ScrollLink>
                </li>
                <li className="header__menu-item" tabIndex={0}>
                    <ScrollLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Kontakt
                    </ScrollLink>
                </li>
            </ul>
        </nav>


    )

}