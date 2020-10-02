import React from "react";
import "./custom-header-menu.scss";
import PropTipes from "prop-types";
import {Menu} from 'antd';
import {BurgerMenu} from '../../svg';


const {SubMenu} = Menu;

const CustomHeaderMenu = (props) => {
  return (
    <Menu className={`${props.className} custom-header-menu`}>
      <SubMenu
        title={
          <span><BurgerMenu className="custom-header-menu__logo"/></span>
        }
      >
        {props.items.map(NavItem => {
          return <Menu.Item key={NavItem.id}>{NavItem.title}</Menu.Item>
        })}
      </SubMenu>
    </Menu>
  );
}

CustomHeaderMenu.propTipes = {
  items: PropTipes.arrayOf(PropTipes.object).isRequied
}

export default CustomHeaderMenu;
