import React from "react";
import "./swiper-container.scss";
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PropTipes from "prop-types";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CustomSwiper = (props) => {
  return (
    <Swiper
      className={`${props.className} custom-swiper`}
      slidesPerView={'auto'}
      spaceBetween={4.4}
      navigation
    >
      {props.items.map(NavItem => {
        return (
          <SwiperSlide key={NavItem.id}>
            <a className="swiper-slide__link">{NavItem.title}</a>
          </SwiperSlide>)
      })}
    </Swiper>
  );
}

CustomSwiper.propTipes = {
  items: PropTipes.arrayOf(PropTipes.object).isRequied
}

export default CustomSwiper;
