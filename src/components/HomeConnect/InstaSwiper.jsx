import React, { useEffect } from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./InstaSwiper.css";

const InstaSwiper = () => {
  useEffect(() => {
    // Load Instagram's embed.js to ensure proper rendering
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-[35rem] h-[37.5rem] ">
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "rgba(246, 162, 197, 0.8)",
          "--swiper-navigation-color": "rgba(246, 162, 197, 0.8)",
        }}
      >
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>
          <div className=" h-[30rem] pt-2 items-center justify-center flex ">
            {/* Embed Instagram Post */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DBp1PT5PvfC/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                height: "100%", // Set a fixed height
              }}
            >
              <a
                href="https://www.instagram.com/p/DBp1PT5PvfC/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this post on Instagram
              </a>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[30rem] pt-2  items-center justify-center flex ">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DDfRIxlvoJa/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                height: "100%", // Set a fixed height
              }}
            >
              <a
                href="https://www.instagram.com/p/DDfRIxlvoJa/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this post on Instagram
              </a>
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InstaSwiper;
