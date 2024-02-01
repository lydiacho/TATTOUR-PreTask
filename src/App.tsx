import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Postcode from "react-daum-postcode";

function App() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false); 

  // 바텀시트 켜기
  const handleSheet = () => {
    setSheetOpen(true);
  }

  useEffect(() => {
    if (isSheetOpen) {
      document.querySelector('.bottom_sheet').classList.remove('anim_down');
      document.querySelector('.bottom_sheet').classList.add('anim_up');
    }
  }, [isSheetOpen]);

  // 바텀시트 끄기
  const handleSheetOff = () => {
    document.querySelector('.bottom_sheet').classList.remove('anim_up');
    document.querySelector('.bottom_sheet').classList.add('anim_down');
    setTimeout(()=> {
      setSheetOpen(false);
    },[500])

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
      <button onClick={handleSheet}>바텀시트</button>
      {isSheetOpen && (
        <div>
          <div id="bottom_sheet_bg" onClick={handleSheetOff}></div>
          <div className="bottom_sheet">
            <button className="close_btn" onClick={handleSheetOff}>X</button>
          </div>
        </div>
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
