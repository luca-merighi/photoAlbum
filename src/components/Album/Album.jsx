import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import SwiperCore, { Autoplay, Pagination, Navigation, Keyboard } from 'swiper'
import Main from '../Main/Main'

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

import './Album.scss'

const headerProps = {
    title: 'Album',
    icon: 'image'
}

SwiperCore.use([ Autoplay, Pagination, Navigation, Keyboard])

export default function Album() {
    return (
        <Main {...headerProps}>
            <div className="albumContainer animation-left">
                <header className="albumHeader">
                    <h3>
                        Álbum de Fotos com <span>Swiper </span><span>JS</span>
                    </h3>
                </header>
                <div className="albumContent">
                    <Swiper 
                        spaceBetween={100}
                        slidesPerView={1}
                        centeredSlides={true}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        navigation={true}
                        pagination={{ "clickable": true }}
                        keyboard={{ "enabled": true }}
                        loop={true} >
                        <SwiperSlide>
                            <img src="https://picsum.photos/1000/550" className="swiperImage" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/1000/551" className="swiperImage" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/1000/552" className="swiperImage" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Main>
    )
}