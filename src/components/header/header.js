import React from "react";
import "./header.scss";
import {ArrowBack, Assignment, Mail, Switch} from '../svg';
import Image from '../img/image.png';
import CastomSwiper from "../castom-ant-components/swiper-container/swiper-container";
import CastomHeaderMenu from "../castom-ant-components/castom-header-menu/castom-header-menu";
import CastomInput from "./../castom-ant-components/input-block/input-block";
import CastomSelect from "./../castom-ant-components/select-block/select-block";
import CastomDatePicker from "./../castom-ant-components/date-block/date-block";
import CastomTimePicker from "./../castom-ant-components/time-block/time-block";
import {Button} from 'antd';


let MasOfHederNavItems = [
  {id: 1, title: "ПЕРЕЛЁТЫ"},
  {id: 2, title: "ОТЕЛИ"},
  {id: 3, title: "ЖД"},
  {id: 4, title: "ТРАНСФЕРЫ"},
  {id: 5, title: "АЭРОЭКСПРЕСС"},
  {id: 6, title: "ВИЗЫ"},
  {id: 7, title: "СТРАХОВКИ"},
  {id: 8, title: "ЛЕНИВЫЙ ЗАКАЗ"},
  {id: 9, title: "КОМАНДИРОВКИ"}
]


const Header = (props) => {
  return (
    <div className="header">
      <div className="header__top-row">
        <CastomHeaderMenu
          className="header__burger-menu"
          items={MasOfHederNavItems}
        />
        <Switch className="header__logo"/>
        <ul className="header__tools-container tools-container" scroll-left="100px">
          <a className="tools-container__item" href="#!">
            <Assignment className="tools-container__logo"/>
            <span className="tools-container__name">Заказы</span>
          </a>
          <a className="tools-container__item" href="#!">
            <Mail className="tools-container__logo"/>
            <span className="tools-container__name">Сообщения</span>
          </a>
          <a className="tools-container__item" href="#!">
            <img className="tools-container__profile-logo" src={Image}/>
            <span className="tools-container__name">Константин Константинопольский</span>
          </a>
        </ul>
      </div>
      <CastomSwiper
        className="header__nav-container"
        items={MasOfHederNavItems}
      />
      <div className="header__bottom-row header__bottom-row--media-screen-hide">
        <div className="header__column">
          <CastomInput
            placeholder="Санкт-Петербург"
            text="Откуда (город)"
            className="header__input"
          />
          <CastomInput
            placeholder="Москва"
            text="Куда (город)"
            className="header__input"
          />
          <CastomSelect
            placeholder="Местный"
            text="Язык"
            className="header__input"
            value={["Местный", "Русский", "Английский"]}
          />
        </div>
        <div className="header__column">
          <CastomInput
            placeholder="Аэропорт Пулково"
            text="Откуда (место)"
            className="header__input"
          />
          <CastomInput
            placeholder="Отель Radisson Royal"
            text="Куда (место)"
            className="header__input"
          />
          <CastomSelect
            placeholder="2 взрослых, 1 ребенок"
            text="Пассажиры"
            className="header__input"
            value={["1 взрослый", "2 взрослых", "Другое"]}
          />
        </div>
        <div className="header__column">
          <div className="header__time-date-container">
            <CastomDatePicker
              placeholder="1 янв, пн"
              text="Дата"
              className="header__input header__input--date"
            />
            <CastomTimePicker
              format='HH:mm'
              placeholder="00:00"
              text="Время"
              className="header__input header__input--time"
            />
          </div>
          <Button
            type="primary"
            shape="round"
            className="header__button"
          >
            Найти
          </Button>
        </div>
      </div>
      <div className="header__bottom-row header__bottom-row--media-screen-show">
        <div className="header__column">
          <CastomInput
            placeholder="Санкт-Петербург"
            text="Откуда (город)"
            className="header__input"
          />
          <CastomInput
            placeholder="Москва"
            text="Куда (город)"
            className="header__input"
          />
          <div className="header__time-date-container">
            <CastomDatePicker
              placeholder="1 янв, пн"
              text="Дата"
              className="header__input header__input--date"
            />
            <CastomTimePicker
              format='HH:mm'
              placeholder="00:00"
              text="Время"
              className="header__input header__input--time"
            />
          </div>
          <CastomSelect
            placeholder="2 взрослых, 1 ребенок"
            text="Пассажиры"
            className="header__input"
            value={["1 взрослый", "2 взрослых", "Другое"]}
          />
        </div>
        <div className="header__column">
          <CastomInput
            placeholder="Аэропорт Пулково"
            text="Откуда (место)"
            className="header__input"
          />
          <CastomInput
            placeholder="Отель Radisson Royal"
            text="Куда (место)"
            className="header__input"
          />
          <CastomSelect
            placeholder="Местный"
            text="Язык"
            className="header__input"
            value={["Местный", "Русский", "Английский"]}
          />
          <Button
            type="primary"
            shape="round"
            className="header__button"
          >
            Найти
          </Button>
        </div>
      </div>
      <div className="header__bottom-row header__bottom-row--mobile-show">
        <CastomInput
          placeholder="Санкт-Петербург"
          text="Откуда (город)"
          className="header__input"
        />
        <CastomInput
          placeholder="Аэропорт Пулково"
          text="Откуда (место)"
          className="header__input"
        />
        <CastomInput
          placeholder="Москва"
          text="Куда (город)"
          className="header__input"
        />
        <CastomInput
          placeholder="Отель Radisson Royal"
          text="Куда (место)"
          className="header__input"
        />
        <div className="header__time-date-container">
          <CastomDatePicker
            placeholder="1 янв, пн"
            text="Дата"
            className="header__input header__input--date"
          />
          <CastomTimePicker
            format='HH:mm'
            placeholder="00:00"
            text="Время"
            className="header__input header__input--time"
          />
        </div>
        <CastomSelect
          placeholder="Местный"
          text="Язык"
          className="header__input"
          value={["Местный", "Русский", "Английский"]}
        />
        <CastomSelect
          placeholder="2 взрослых, 1 ребенок"
          text="Пассажиры"
          className="header__input"
          value={["1 взрослый", "2 взрослых", "Другое"]}
        />
        <Button
          type="primary"
          shape="round"
          className="header__button"
        >
          Найти
        </Button>
      </div>
    </div>
  );
}
export default Header;
