import React from "react";
import "./transfer-item-form.scss";
import CustomInput from "../../castom-ant-components/input-block/input-block";
import {Print, Mail, Place, DirectionsCar, Group, Schedule} from '../../svg';


const TransferItemForm = (props) => {
  return (
    <div className="transfer-item-form block-wrapper__form">
      <div className="transfer-item-form__title">
        <div className="transfer-item-form__container">
          <Place className="transfer-item-form__place"/>
          <span className="transfer-item-form__route-text">{props.title}</span>
        </div>
        <div className="transfer-item-form__container">
          <span className="transfer-item-form__travel-policy-text transfer-item-form__travel-policy-text--color">Тревел-политика</span>
          <Print className="transfer-item-form__print"/>
          <Mail className="transfer-item-form__mail"/>
        </div>
      </div>
      <div className="transfer-item-form__body">
        <div className="transfer-item-form__top-row">
          <span className="transfer-item-form__container">
            <DirectionsCar className="transfer-item-form__icon"/>
            Минивен (iWay)
          </span>
          <span className="transfer-item-form__container">
            <Schedule className="transfer-item-form__icon"/>
            2 часа 20 мин в пути
          </span>
          <span className="transfer-item-form__container">
            <Group className="transfer-item-form__icon"/>
            2 взрослых, 1 ребенок
          </span>
        </div>
        <div className="transfer-item-form__hr"></div>
        <div className="transfer-item-form__bottom-row transfer-item-form__bottom-row--media-hide">
          <a className="transfer-item-form__container">Условия отмены и изменений</a>
          <span className="transfer-item-form__container transfer-item-form__container--cost-text">8 460 ₽</span>
          <button className="transfer-item-form__button">Забронировать</button>
        </div>
        <div className="transfer-item-form__bottom-row transfer-item-form__bottom-row--media-show">
          <span className="transfer-item-form__container transfer-item-form__container--cost-text">8 460 ₽</span>
          <a className="transfer-item-form__container">Условия отмены и изменений</a>
          <button className="transfer-item-form__button">Забронировать</button>
        </div>
      </div>
    </div>
  );
}


export default TransferItemForm;
