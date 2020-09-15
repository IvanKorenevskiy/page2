import React from "react";
import "./transfer-filter-form.scss";
import CastomInput from "../../castom-ant-components/input-block/input-block";
import CastomCheckBox from '../../castom-ant-components/check-box/check-box';
import CastomSlider from '../../castom-ant-components/castom-ant-slider/castom-ant-slider';
import {Print, Mail, Place, DirectionsCar, Group, Schedule} from '../../svg';


const TransferFilterForm = (props) => {
  return (
    <div className="transfer-filter-form block-wrapper__form">
      <div className="transfer-filter-form__title">
        <a>Сбросить фильтры</a>
      </div>
      <div className="transfer-filter-form__hr"/>
      <div className="transfer-filter-form__body">
        <span className="transfer-filter-form__parameter">Стоимость</span>
        <span className="transfer-filter-form__slider-value">0 ₽ — 80 000 ₽</span>
        <CastomSlider className="transfer-filter-form__slider"/>
        <div className="transfer-filter-form__hr transfer-filter-form__hr--first"/>
        <span className="transfer-filter-form__parameter">Транспорт</span>
        <ul className="transfer-filter-form__container">
          <CastomCheckBox className="transfer-filter-form__checkbox">Минивен</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Минибас</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Стандартный автомобиль</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Автомобиль бизнес класса</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Автомобиль VIP-класса</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Частный микроавтобус (1-4 человек)</CastomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Язык</span>
        <ul className="transfer-filter-form__container">
          <CastomCheckBox className="transfer-filter-form__checkbox">Русский</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Английский</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Китайский</CastomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Online</span>
        <ul className="transfer-filter-form__container">
          <CastomCheckBox className="transfer-filter-form__checkbox">Только online</CastomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Поставщик</span>
        <ul className="transfer-filter-form__container">
          <CastomCheckBox className="transfer-filter-form__checkbox">iWay</CastomCheckBox>
          <CastomCheckBox className="transfer-filter-form__checkbox">Ride</CastomCheckBox>
        </ul>
      </div>
    </div>
  );
}


export default TransferFilterForm;
