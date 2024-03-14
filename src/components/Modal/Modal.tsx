import { useState } from "react";
import Icons from "../Icons/icons";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (!isModalOpen) return <></>;

  return (
    <div
      className="fixed top-0 left-0 bg-[#000]/[0.7] w-[100vw] h-[100vh] z-40 flex justify-center lg:items-center"
      onScroll={(e) => e.preventDefault()}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="flex" onClick={(e) => e.stopPropagation()}>
        <img
          src={Icons.coverModal}
          className="hidden lg:inline-block w-auto h-[533px]"
        />
        <div className="bg-[#fff] w-[298px] h-[307px] px-[20px] pb-[24px] flex flex-col items-center mt-[106px] lg:w-[424px] lg:h-[532px] lg:mt-[0] lg:px-[52px] relative">
          <button
            className="absolute top-[-30px] right-0 text-[#fff] uppercase font-400] text-[12px] font-lato"
            onClick={() => setIsModalOpen(false)}
          >
            Fechar
          </button>
          <img src={Icons.mail} className="mt-[40px] mb-[12px] lg:mt-[121px]" />
          <span className="text-center uppercase font-[400] text-[12px] text-[#464b54] mb-[13px]">
            Bem Vindo à MAEZTRA
          </span>
          <span className=" px-[20px] font-[400] text-[#787D83] text-[16px] text-center w-[260px] mb-[26px] lg:text-[20px] lg:px-0 ">
            Receba em Primeira mão <b className="font-[700]">desconto e ofertas exclusivas</b>
          </span>
          <input
            type="text"
            className="rounded-[10px] py-[10px] pr-[6px] pl-[9px] text-[#787d83] text-[12px] font-[400] border-[1px] border-[#c4c4c4] w-full mb-[12px]"
            placeholder="Digite seu e-mail"
          />
          <button className="w-full items-center uppercase justify-center rounded-[10px] py-[10px] flex gap-[8px] text-[#fff] text-[12px] font-[700] min-w-[40px] bg-[#faa500]">
            Enviar
            <img src={Icons.airplane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
