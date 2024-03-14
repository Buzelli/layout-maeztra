import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Icons from "../Icons/icons";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Banner = {
  imageDesk: string;
  imageMob: string;
  alt: string;
  title: string;
  description: string;
};

const BannerPrincipal = () => {
  const swiper = useSwiper();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const banners: Banner[] = [
    {
      imageDesk: Icons.mainBanner,
      imageMob: Icons.mainBannerMob,
      alt: "Banner 1",
      title: "Promoções de Outono",
      description: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      imageDesk: Icons.mainBanner,
      imageMob: Icons.mainBannerMob,
      alt: "Banner 2",
      title: "Promoções de Outono",
      description: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      imageDesk: Icons.mainBanner,
      imageMob: Icons.mainBannerMob,
      alt: "Banner 3",
      title: "Promoções de Outono",
      description: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      imageDesk: Icons.mainBanner,
      imageMob: Icons.mainBannerMob,
      alt: "Banner 3",
      title: "Promoções de Outono",
      description: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      imageDesk: Icons.mainBanner,
      imageMob: Icons.mainBannerMob,
      alt: "Banner 3",
      title: "Promoções de Outono",
      description: "Confira os melhores looks para combinar com você nesse Outono",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span id="slide'+index+'" class="' + className + ' w-[16px] h-[16px] rounded-full mx-[4px] border-[2px] border-[#FAA500] bg-transparent opacity-100"></span>';
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className={`relative w-full overflow-hidden ${isMobile ? 'h-[360px]' : 'h-[600px]'}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={pagination}
      >
        {banners.map((banner, index) => (
          <SwiperSlide>
            <div
              key={index}

            >
              <img
                src={isMobile ? banner.imageMob : banner.imageDesk}
                alt={banner.alt}
                className={`w-full ${isMobile ? 'h-[360px]' : 'h-[600px]'}`}
              />
              <div className="pl-[63px] absolute z-10 top-[50%] lg:top-[151px] lg:left-[323px] translate-y-[-50%] lg:transform-none lg:p-0">
                <h1 className="max-w-[223px] text-[#fff] font-[700] text-[30px] mb-[24px] lg:max-w-[471px] lg:text-[40px] lg:mb-[40px]">
                  {banner.title}
                </h1>
                <p className="max-w-[239px] text-[#fff] font-[400] text-[14px] mb-[16px] lg:max-w-[467px] lg:text-[20px] lg:mb-[32px]">
                  {banner.description}
                </p>
                <a
                  href="#"
                  className="text-[#fff] font-[700] text-[14px] lg:text-[18px] rounded-[4px] bg-[#FAA500] w-[76px] h-[28px] lg:w-[128px] lg:h-[48px] flex justify-center items-center"
                >
                  Conferir
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex absolute top-1/2 transform -translate-y-1/2 w-full z-10">
          <button
            onClick={() => swiper?.slideNext()}
            className="left-0 absolute ml-[28px] lg:ml-[161px] swiper-button-prev after:content-[none]"
          >
            <img src={isMobile ? Icons.arrowLeftMob : Icons.arrowLeft} alt="Previous" />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            className="right-0 absolute mr-[28px] lg:mr-[161px] swiper-button-next after:content-[none]"
          >
            <img src={isMobile ? Icons.arrowRightMob : Icons.arrowRight} alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerPrincipal;
