import React from "react";
import "./castom-header-menu.scss";
import PropTipes from "prop-types";
import {Menu} from 'antd';
import {BurgerMenu} from '../../svg';


const {SubMenu} = Menu;

const CastomHeaderMenu = (props) => {
  return (
    <Menu className={`${props.className} castom-header-menu`}>
      <SubMenu
        title={
          <span><BurgerMenu className="castom-header-menu__logo"/></span>
        }
      >
        {props.items.map(NavItem => {
          return <Menu.Item key={NavItem.id}>{NavItem.title}</Menu.Item>
        })}
      </SubMenu>
    </Menu>
  );
}

CastomHeaderMenu.propTipes = {
  items: PropTipes.arrayOf(PropTipes.object).isRequied
}

export default CastomHeaderMenu;
