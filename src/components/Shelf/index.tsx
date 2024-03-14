import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Icons from "../Icons/icons";

const Shelf = () => {
    const swiper = useSwiper();

    const products = [
        {
            id: 1,
            image: Icons.produtoImg01,
            colorImage: Icons.produtoColors01,
            price: "R$ 500,00",
            title: 'Faux Suede Mini Skirt',
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
        },
        {
            id: 2,
            image: Icons.produtoImg02,
            colorImage: Icons.produtoColors02,
            price: "R$ 320,00",
            title: 'Ruched Rose Print Mini Skirt',
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
        },
        {
            id: 3,
            image: Icons.produtoImg01,
            colorImage: Icons.produtoColors01,
            price: "R$ 500,00",
            title: 'Faux Suede Mini Skirt',
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
        },
        {
            id: 4,
            image: Icons.produtoImg02,
            colorImage: Icons.produtoColors02,
            price: "R$ 320,00",
            title: 'Ruched Rose Print Mini Skirt',
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
        },
        {
            id: 5,
            image: Icons.produtoImg01,
            colorImage: Icons.produtoColors01,
            price: "R$ 500,00",
            title: 'Faux Suede Mini Skirt',
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
        },
        {
            id: 6,
            image: Icons.produtoImg02,
            colorImage: Icons.produtoColors02,
            price: "R$ 320,00",
            title: 'Ruched Rose Print Mini Skirt',
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
        }
    ];

    return (
        <section>
            <h3 className="w-full text-[24px] mb-[16px] mt-[40px] lg:mt-[80px] lg:mb-[24px] font-[700] lg:text-[32px] text-center text-[#353535]">
                As Mais Pedidas
            </h3>
            <div className="container max-w-[1600px] mx-auto pl-[16px] 2xl:px-0 lg:px-[16px]">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            centeredSlidesBounds: true,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            centeredSlidesBounds: true,
                        },
                        1280: {
                            slidesPerView: 4,
                            centeredSlides: true,
                            centeredSlidesBounds: true,
                        },
                        1600: {
                            slidesPerView: 5
                        }
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="w-[308px] min-w-[308px] h-[601px] flex flex-col">
                                <div className="overflow-hidden">
                                    <img src={product.image} alt={product.title} className="w-full h-auto" />
                                </div>
                                <div className="bg-[#fff] pt-[8px] px-[27px] pb-[16px] flex flex-col">
                                    <img src={product.colorImage} alt="Cor do Produto" className="mb-[8px] w-[132px]" />
                                    <p className="h-[24px] font-[700] text-[#353535] text-[20px] leading-[30px] mb-[8px]">{product.price}</p>
                                    <h3 className="font-[400] text-[#000] text-[16px] leading-[24px] mb-[8px]">{product.title}</h3>
                                    <p className="w-[248px] font-[400] text-[12px] mb-[8px] text-[#353535]">{product.description}</p>
                                    <button className="w-full h-[35px] rounded-[4px] bg-[#FAA500] text-[#FFF] flex justify-center items-center text-[16px] font-[400]">
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 w-full z-10">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            className="left-0 absolute  swiper-button-prev after:content-[none]"
                        >
                            <img src={Icons.arrowLeftMob} alt="Previous" />
                        </button>
                        <button
                            onClick={() => swiper?.slideNext()}
                            className="right-0 absolute swiper-button-next after:content-[none]"
                        >
                            <img src={Icons.arrowRightMob} alt="Next" />
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Shelf;
