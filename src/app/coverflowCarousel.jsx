"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CarouselCover() {
  return (
    <section className="w-[1400px] mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/carouselleft1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carouselleft2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carouselcenter.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carouselright1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carouselright2.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
