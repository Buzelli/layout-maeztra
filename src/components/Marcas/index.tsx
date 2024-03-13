import Icons from '../Icons/icons';

const Marcas = () => {
    const marcas = [
        Icons.comma,
        Icons.melissa,
        Icons.forever,
        Icons.zara,
        Icons.ann
    ];

    return (

        <section className="mb-[40px] lg:mb-[80px] mt-[40px]">
            <h3 className="w-full text-center mb-[25px] lg:mb-[24px] font-bold text-[24px] lg:text-[32px] text-[#353535]">
                Marcas Parceiras
            </h3>
            <div className="lg:px-[161px] pl-[31px]">
                <div className="max-w-[1598px] flex flex-row flex-nowrap gap-[14px] lg:gap-[15px] overflow-x-scroll scrollbar-hide">
                    {marcas.map((marca, index) => (
                        <img key={index} src={marca} className="object-contain min-w-[308px] h-[64px]" alt={`Marca ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marcas;
