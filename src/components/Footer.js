import React from "react";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

export default function Footer(){
    return (
        <section className="footer">
            <p className="footer__text footer__item">Copyright by MK</p>
            <div className="footer__icons footer__item">
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaFacebookSquare className="footer__icon"/></a>
                <a  href="https://www.instagram.com/" rel="noreferrer" target="_blank"><FaInstagram className="footer__icon"/></a>
            </div>
        </section>
    )
}