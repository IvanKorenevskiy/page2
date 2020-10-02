import React from "react";
import "./transfer.scss";
import CustomSelect from "./../castom-ant-components/select-block/select-block";
import BlockWrapper from "../blocks/block-wrapper";
import TransferItemForm from "../blocks/transfer-item-form/transfer-item-form";
import TransferFilterForm from "../blocks/transfer-filter-form/transfer-filter-form";
import CustomPopover from "../castom-ant-components/custom-popover/custom-popover";
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
        <CustomSelect
          placeholder="Стоимости"
          text="Сортировать по"
          value={["Стоимости", "Другое"]}
          className="transfer__input"
        />
        <CustomPopover
          content={<TransferFilterForm/>}
          className="transfer__popover"
        >
          <Filterlist className="transfer__filter-button-icon"/>
          <span className="transfer__filter-button-text">ФИЛЬТР</span>
        </CustomPopover>
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

