import './App.css';
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Parallax,FreeMode,Autoplay,Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import witcher from "./screen-1.png";
import witcherBack from "./image/screen-1/layer-back.jpg";
import witcherMiddle from "./image/screen-1/layer-middle.png";
import witcherFront from "./image/screen-1/layer-front.png";

import geraBack from "./image/screen-2/layer-back.jpg";
import geraFront from "./image/screen-2/layer-front.png";
import gera from "./image/screen-2/layer-gera.png";
import yen from "./image/screen-2/layer-yen.png";

import ciriBack from "./image/screen-3/layer-back.jpg";
import ciriMiddle from "./image/screen-3/layer-middle.png";
import ciriFront from "./image/screen-3/layer-front.png";
import ciri from "./image/screen-3/layer-ciri.png";

function App() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Parallax,FreeMode,Autoplay,Mousewheel]}
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            mousewheel={true}
            speed={1800}
            Pagination={{ clickable: true }}
            Scrollbar={{ draggable: true }}
            slidesPerView={1}
            parallax={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ background: 'black', willChange:"transform" }}
        >
            <SwiperSlide style={{ height: '100vh', overflow: 'hidden',transformStyle:"preserve-3d" }}>
                <img src={witcherBack} className="witcherBackOne" data-swiper-parallax="40%" alt="text"/>
                <img src={witcherMiddle} className="witcherMiddleOne" data-swiper-parallax="25%" alt="text"/>
                <img src={witcherFront} className="witcherFrontOne" data-swiper-parallax="14%" alt="text"/>
            </SwiperSlide>
            <SwiperSlide style={{ height: '100vh', overflow: 'hidden',transformStyle:"preserve-3d" }}>
                <img src={geraBack} className="witcherBackOne" data-swiper-parallax="40%" alt="text"/>
                <img src={gera} className="witcherMiddleOne" data-swiper-parallax="25%" alt="text"/>
                <img src={yen} className="witcherMiddleOne" data-swiper-parallax="28%" alt="text"/>
                <img src={geraFront} className="witcherFrontOne" data-swiper-parallax="14%" alt="text"/>
            </SwiperSlide>
            <SwiperSlide style={{ height: '100vh', overflow: 'hidden',transformStyle:"preserve-3d" }}>
                <img src={ciriBack} className="witcherBackOne" data-swiper-parallax="40%" alt="text"/>
                <img src={ciriMiddle} className="witcherMiddleOne" data-swiper-parallax="25%" alt="text"/>
                <img src={ciri} className="witcherMiddleOne" data-swiper-parallax="28%" alt="text"/>
                <img src={ciriFront} className="witcherFrontOne" data-swiper-parallax="14%" alt="text"/>
            </SwiperSlide>
        </Swiper>
    );
}

export default App;
