import React from "react"
import { nanoid } from "nanoid"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../css/CarouselSwiper.css"

export default function Carousel(props) {
    const pagination = {
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    }

    return (
        <div className="relative flex contain w-full bg-gradient-to-br from-[#000778] from-[20%] via-slate-500 via-30% to-[#FF9201] to-40% md:to-40%">
            <div className="mx-auto sm:px-10 relative px-5 w-full flex flex-row justify-center overflow-hidden md:h-auto">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{delay: 2000, disableOnInteraction: false}}
                    pagination={pagination}
                    navigation={true}
                    keyboard={{enabled: true}}
                    modules={[Autoplay, Keyboard, Pagination, Navigation]}
                >
                    {
                        props.slides && 
                        props.slides.map(slide => (
                            <SwiperSlide
                                key={nanoid()}
                            >
                            <img 
                                id=""
                                src={slide}
                                className="aspect-video sm:aspect-auto h-max mx-auto w-full inline-block object-center sm:object-fill rounded-xl md:rounded-3xl"
                            />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="absolute bottom-0 w-full h-7 bg-gradient-to-b from-[#FF9201] to-home"></div>
        </div>
    )
}

