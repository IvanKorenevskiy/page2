import React from "react";
import "./footer.scss";
import {Facebook, Instagram, Mastercard, ReedMackay, Twetter, Visa, Vk} from '../svg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top-row">
        <ul className="footer__nav-container nav-container">
          <li className="footer__nav-item">
            <div className="footer__service-name">Авиа и ЖД билеты</div>
            <span className="footer__phone-number">+7 (495) 723-72-27, доб. 4104<br/></span>
            <a className="footer__post-address" href="!#">office@uts24.ru</a>
          </li>
          <li className="footer__nav-item">
            <div className="footer__service-name">Наземные услуги</div>
            <span className="footer__phone-number">+7 (495) 723-72-27, доб. 4435<br/></span>
            <a className="footer__post-address" href="!#">office@uts24.ru</a>
          </li>
          <li className="footer__nav-item">
            <div className="footer__service-name">Бесплатно по России</div>
            <span className="footer__phone-number">8 800 707-07-24<br/></span>
            <a className="footer__post-address" href="!#">info@uts24.ru</a>
          </li>
        </ul>
        <div className="footer__card-container">
          <div className="footer__card-item">
            <Visa className="footer__visa-logo"/>
            <Mastercard className="footer__mastercard-logo"/>
          </div>
          <div className="footer__payment-security"><a href="!#">О безопасности платежей</a></div>
        </div>
      </div>
      <div className="footer__line"/>
      <div className="footer__logo-container">
        <Facebook className="footer__soshial-logo"/>
        <Twetter className="footer__soshial-logo"/>
        <Vk className="footer__soshial-logo"/>
        <Instagram className="footer__soshial-logo"/>
        <ReedMackay className="footer__reed-mackay-logo"/>
      </div>
      <div className="footer__line"/>
      <div className="footer__bottom-container">
        <div className="footer__bottom-element">© UTS24, 2011—2019</div>
        <div className="footer__bottom-element"><a href="!#">Политика конфиденциальности</a></div>
      </div>
    </div>
  );
}


export default Footer;
