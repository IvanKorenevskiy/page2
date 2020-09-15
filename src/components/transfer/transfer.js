import React from "react";
import "./transfer.scss";
import CastomSelect from "./../castom-ant-components/select-block/select-block";
import BlockWrapper from "../blocks/block-wrapper";
import TransferItemForm from "../blocks/transfer-item-form/transfer-item-form";
import TransferFilterForm from "../blocks/transfer-filter-form/transfer-filter-form";
import CastomPopover from "../castom-ant-components/castom-popover/castom-popover";
import {Filterlist} from '../svg';



const Transfer = (props) => {
  return (
    <div className="transfer">
      <div className="transfer__left-side">
        <span className="transfer__filter-count">Найдено: 260 вариантов</span>
        <BlockWrapper className="transfer-booking__block">
          <TransferFilterForm/>
        </BlockWrapper>
      </div>
      <div className="transfer__right-side">
      <div className="transfer__filter-sort-container">
        <CastomSelect
          placeholder="Стоимости"
          text="Сортировать по"
          value={["Стоимости", "Другое"]}
          className="transfer__input"
        />
        <CastomPopover
          content={<TransferFilterForm/>}
          className="transfer__popover"
        >
          <Filterlist className="transfer__filter-button-icon"/>
          <span className="transfer__filter-button-text">ФИЛЬТР</span>
        </CastomPopover>
      </div>

        <BlockWrapper className="transfer-booking__block">
          <TransferItemForm title="Санкт-Петербург (аэропорт Пулково) — Москва (отель Radisson Royal)"/>
        </BlockWrapper>
        <BlockWrapper className="transfer-booking__block">
          <TransferItemForm title="Санкт-Петербург (аэропорт Пулково) — Москва (отель Radisson Royal)"/>
        </BlockWrapper>
        <BlockWrapper className="transfer-booking__block">
          <TransferItemForm title="Санкт-Петербург (аэропорт Пулково) — Москва (отель Radisson Royal)"/>
        </BlockWrapper>
      </div>
    </div>
  );
}
export default Transfer;

