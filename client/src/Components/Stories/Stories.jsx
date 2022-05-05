
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode } from "swiper";

function Stories() {
  return (
    <Swiper data-aos="fade-left"
      slidesPerView={5}
      spaceBetween={15}
      slidesPerGroup={1}
      freeMode={true}
      draggable="true"
      navigation={true}
      modules={[FreeMode]}
      className="Stories"
    >


      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-2 stories__components my-4'>
          <div style={{ width: "120px", height: "180px" }} className="stories__picture position-relative">
            <div className="avatar"><img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="avatar" className="img-fluid position-absolute border border-2 border-light " /></div>
            <img style={{}} className="img-fluid rounded h-100" src="https://cdn.pixabay.com/photo/2013/10/05/18/31/rail-road-191137_960_720.jpg" alt="stories" />
            <h6 className=' position-absolute bottom-0 p-1 text-light'>Add to your story</h6>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default Stories