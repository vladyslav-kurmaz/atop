import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

// const swiper = new Swiper('.mainPage__grow-container-slider-list', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.mainPage__grow-container-slider-switchers-prev',
//     prevEl: '.mainPage__grow-container-slider-switchers-next',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });

const SwiperSlider = ({ children, props }: { children: React.ReactElement[], [key: string]: any;  }) => {
  console.log(props);
  
  return (
    <Swiper
    {...props}
    // spaceBetween={50}
    // slidesPerView={3}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      {children.map((item, i) => <SwiperSlide key={i}>{item}</SwiperSlide>)}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperSlider;
