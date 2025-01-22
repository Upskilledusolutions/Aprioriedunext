import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import styles from "../../src/styles/Home/heroslider.module.css";
import Image from "next/image";

export default function EventsSlider() {

  const scrollToSection = () => {
    const section = document.getElementById("activities");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const data = [{url:'/hero/7.jpg',one:"Empowering Minds",two:"Ensuring equitable access to education for all."},{url:'/hero/8.jpg',one:"Unlock Your Potential",two:"Believe in yourself."},{url:'/hero/9.jpg',one:"Where Curiosity Meets Excellence",two:"Experience learning as a journey of fascinating discoveries"}]

  return (
    <div className={styles.margintop}>
    <div className="swiper-controller">
    <Swiper
      className={styles.swiper}
      speed={1500}
      autoplay={{ delay: 7000 }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      slidesPerView={5}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      }}
      pagination={{ clickable: true, el:'.swiper-pagination', type:'bullets', }}
      breakpoints={{
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 1,
    },
  }}
    >       
            {data.map(data=><SwiperSlide className={styles.sliderbigcont}>
                
                <div className={styles.pos}>
                  <div className={styles.one}>{data.one}</div>
                  <div className={styles.two}>{data.two}</div>
                  <div className={styles.three} onClick={() => scrollToSection()}>View all courses</div>
                </div>
                <Image src={data.url} className={styles.img} width={2000} height={2000} alt='image' />
            </SwiperSlide>)}
            
    </Swiper>
    <div className='button-Arrangement'>
          <div className="button-swiper">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
    </div>
    </div>
    </div>
  )
}