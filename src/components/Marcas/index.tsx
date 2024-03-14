import Icons from '../Icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Marcas = () => {
    const marcas = [
        Icons.comma,
        Icons.melissa,
        Icons.forever,
        Icons.zara,
        Icons.ann
    ];

    return (

        <section className="mb-[40px] lg:mb-[80px] mt-[40px] lg:mt-[80px]">
            <h3 className="w-full text-center mb-[25px] lg:mb-[24px] font-bold text-[24px] lg:text-[32px] text-[#353535]">
                Marcas Parceiras
            </h3>
            <div className="lg:px-[161px] pl-[31px] flex justify-center">
                <div className="max-w-[1598px] w-full flex flex-row flex-nowrap gap-[14px] lg:gap-[15px]">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1.1}
                        breakpoints={{
                            668: {
                                slidesPerView: 2,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            800: {
                                slidesPerView: 2.5,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1024: {
                                slidesPerView: 2,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1100: {
                                slidesPerView: 2.5,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1280: {
                                slidesPerView: 3,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1600: {
                                slidesPerView: 4,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1800: {
                                slidesPerView: 4.5,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                            },
                            1900: {
                                slidesPerView: 5,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                                allowTouchMove: false,
                            }
                        }}
                    >
                        {marcas.map((marca, index) => (
                            <SwiperSlide>
                                <img key={index} src={marca} className="object-contain min-w-[308px] h-[64px]" alt={`Marca ${index + 1}`} />
                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Marcas;
