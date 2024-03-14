import TipBarItem from './TipBarItem';
import Icons from '../Icons/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TipBar = () => {
  return (
    <section className="mb-[40px] lg:mb-[40px] mt-[24px]">
      <h3 className="w-full text-center mb-[21px] font-[700] text-[16px] text-[#353535]">
        Por que comprar na Maeztra?
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
                allowTouchMove:false,
              }
            }}
          >
            <SwiperSlide>
              <TipBarItem
                icon={Icons.earth}
                title="Produtos importados"
                description="Produtos de Alta Qualidade"
                classNames="w-[308px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TipBarItem
                icon={Icons.house}
                title="Estoque no Brazil"
                description="Produtos mais perto de você!"
                classNames="w-[308px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TipBarItem
                icon={Icons.devolution}
                title="Trocas Garantidas"
                description="Trocas em até 48 horas, vejas as regras"
                classNames="w-[308px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TipBarItem
                icon={Icons.discount}
                title="Ganhe 5% off"
                description="Pagando à vista no Cartão"
                classNames="w-[308px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TipBarItem
                icon={Icons.shipping}
                title="Frete Grátis"
                description="Em compras acima de R$ 499,00"
                classNames="w-[308px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TipBar;
