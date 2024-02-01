import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Postcode from "react-daum-postcode";

function App() {
  const [isPostOpen, setIsPostOpen] = useState(false); 

  const handleModal = () => {
    setIsPostOpen(true);
  }

  const handleAddress = (data) => {
    document.getElementById('input').value = data.address;
    document.getElementById('post_code').value = data.zonecode; // 우편번호
    setIsPostOpen(false);
  }

  return (
    <>
      <div className="text_area">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit deserunt quibusdam dolore fuga, expedita doloribus vel tenetur culpa repellendus optio earum laborum, laudantium autem quos commodi ea officiis? Aliquid.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit deserunt quibusdam dolore fuga, expedita doloribus vel tenetur culpa repellendus optio earum laborum, laudantium autem quos commodi ea officiis? Aliquid.
      </div>
      <div className="swiper_container">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          slidesPerView={1}
          loop={true}
          >
            <SwiperSlide><div className="one_card">Slide 1</div></SwiperSlide>
            <SwiperSlide><div className="one_card">Slide 2</div></SwiperSlide>
            <SwiperSlide><div className="one_card">Slide 3</div></SwiperSlide>
            <SwiperSlide><div className="one_card">Slide 4</div></SwiperSlide>
        </Swiper>
      </div>
      <input id="post_code" type="text" disabled/>   
      <input id="input" type="text" disabled/>
      <button type="button" onClick={handleModal}>검색</button>
      {isPostOpen && (
      <div className="card">
        <Postcode onComplete={handleAddress}/>
      </div>
      )}
    </>
  )
}

export default App
