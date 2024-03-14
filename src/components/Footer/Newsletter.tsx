const Newsletter = () => {
    return (
        <section className="py-[24px] flex justify-center bg-[#FAFAFA] lg:pt-[40px] lg:pb-[40px] border-[#EFEFEF] border-y-[2px] border-solid">
            <div className="w-[298px] flex flex-col lg:gap-[15px] lg:flex-row lg:justify-center lg:items-center">
                <h3 className="font-[700] text-[24px] text-[#000] mb-[8px] lg:m-0 text-center lg:min-w-[307px]">
                    Recebe Nossa Newsletter
                </h3>
                <div className="flex flex-row gap-[15px] justify-center items-center lg:relative">
                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        className="px-[24px] bg-[#fff] rounded-[4px] border-[1px] border-[#353535] border-solid w-[204px] lg:pr-[131px] lg:w-[630px] lg:h-[40px]"
                    />
                    <button className="text-[14px] text-[#fff] flex items-center h-[26px] px-[20px] font-[700] lg:right-0 lg:absolute lg:h-[40px] lg:pl-[44px] lg:pr-[43px] border-[1px] border-[#FAA500] bg-[#FAA500] border-solid rounded-[4px]">
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;