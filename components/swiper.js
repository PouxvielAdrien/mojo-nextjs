import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import Image from "next/image";

export default function MySwiperComponent() {

    return (
        <section className="bg-light pt-5 pb-5">
           <div className="container">
                <h2 className="text-center pb-5">Trusted by over 2.5 million users</h2>
                <div className="container justify-content-center align-items-center">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={5}
                        modules={[Autoplay]}
                        autoplay={{delay: 1000}}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Image src="/images/swiper/spurs.png"
                                   height={63}
                                   width={130}
                                   alt="nba best team spurs logo "
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/images/swiper/texashospital.png"
                                   height={97}
                                   width={140}
                                   alt="texas hospital logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/harvard.png"
                                   height={120}
                                   width={124}
                                   alt="harvard logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/rocketRoute.svg"
                                   height={47}
                                   width={190}
                                   alt="rocket Route logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/michigan.png"
                                   height={130}
                                   width={130}
                                   alt="michigan logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/das-keyboard-black.png"
                                   height={28}
                                   width={200}
                                   alt="das-keyboard logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/abc.svg"
                                   height={77}
                                   width={120}
                                   alt="abc logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/dcs.png"
                                   height={136}
                                   width={140}
                                   alt="dcs logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/lacma.png"
                                   height={49}
                                   width={130}
                                   alt="lacma logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/scotts.png"
                                   height={86}
                                   width={170}
                                   alt="scotts logo"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/swiper/sofistadium.png"
                                   height={24}
                                   width={150}
                                   alt="sofi stadium logo"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
           </div>
        </section>

    );

}