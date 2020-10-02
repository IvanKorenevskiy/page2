import React from "react";
import "./transfer-filter-form.scss";
import CustomInput from "../../castom-ant-components/input-block/input-block";
import CustomCheckBox from '../../castom-ant-components/check-box/check-box';
import CustomSlider from '../../castom-ant-components/custom-ant-slider/custom-ant-slider';
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
        <CustomSlider className="transfer-filter-form__slider"/>
        <div className="transfer-filter-form__hr transfer-filter-form__hr--first"/>
        <span className="transfer-filter-form__parameter">Транспорт</span>
        <ul className="transfer-filter-form__container">
          <CustomCheckBox className="transfer-filter-form__checkbox">Минивен</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Минибас</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Стандартный автомобиль</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Автомобиль бизнес класса</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Автомобиль VIP-класса</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Частный микроавтобус (1-4 человек)</CustomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Язык</span>
        <ul className="transfer-filter-form__container">
          <CustomCheckBox className="transfer-filter-form__checkbox">Русский</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Английский</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Китайский</CustomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Online</span>
        <ul className="transfer-filter-form__container">
          <CustomCheckBox className="transfer-filter-form__checkbox">Только online</CustomCheckBox>
        </ul>
        <div className="transfer-filter-form__hr"/>
        <span className="transfer-filter-form__parameter">Поставщик</span>
        <ul className="transfer-filter-form__container">
          <CustomCheckBox className="transfer-filter-form__checkbox">iWay</CustomCheckBox>
          <CustomCheckBox className="transfer-filter-form__checkbox">Ride</CustomCheckBox>
        </ul>
      </div>
    </div>
  );
}


export default TransferFilterForm;
