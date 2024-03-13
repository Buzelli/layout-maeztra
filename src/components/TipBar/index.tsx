import TipBarItem from './TipBarItem';
import Icons from '../Icons/icons';

const TipBar = () => {
  return (
    <section className="mb-[40px] lg:mb-[40px] mt-[24px]">
      <h3 className="w-full text-center mb-[21px] font-[700] text-[16px] text-[#353535]">
        Por que comprar na Maeztra?
      </h3>
      <div>
        <div className="px-[16px] flex flex-row flex-nowrap gap-[14px] lg:gap-[16px] overflow-x-scroll lg:justify-center scrollbar-hide">
          <TipBarItem
            icon={Icons.earth}
            title="Produtos importados"
            description="Produtos de Alta Qualidade"
            classNames="w-[298px]"
          />
          <TipBarItem
            icon={Icons.house}
            title="Estoque no Brazil"
            description="Produtos mais perto de você!"
            classNames="w-[298px]"
          />
          <TipBarItem
            icon={Icons.devolution}
            title="Trocas Garantidas"
            description="Trocas em até 48 horas, vejas as regras"
            classNames="w-[298px]"
          />
          <TipBarItem
            icon={Icons.discount}
            title="Ganhe 5% off"
            description="Pagando à vista no Cartão"
            classNames="w-[298px]"
          />
          <TipBarItem
            icon={Icons.shipping}
            title="Frete Grátis"
            description="Em compras acima de R$ 499,00"
            classNames="w-[298px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TipBar;
