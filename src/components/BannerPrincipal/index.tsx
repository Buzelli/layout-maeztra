import { useState, useEffect } from "react";
import Icons from "../Icons/icons";

type Banner = {
  imageDesk: string;
  imageMob: string;
  alt: string;
  title: string; 
  description: string;
};

const BannerPrincipal = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative w-full overflow-hidden ${isMobile ? 'h-[360px]' : 'h-[600px]'}`}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
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
      ))}
      
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
        <button
          onClick={prevSlide}
          className="left-0 absolute ml-[28px] lg:ml-[161px]"
        >
          <img src={isMobile ? Icons.arrowLeftMob : Icons.arrowLeft} alt="Previous" />
        </button>
        <button
          onClick={nextSlide}
          className="right-0 absolute mr-[28px] lg:mr-[161px]"
        >
          <img src={isMobile ? Icons.arrowRightMob : Icons.arrowRight} alt="Next"/>
        </button>
      </div>

      <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[16px] h-[16px] rounded-full mx-[4px] border-[1px] border-[#FAA500] ${
              index === currentSlide ? "bg-[#FAA500]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerPrincipal;
