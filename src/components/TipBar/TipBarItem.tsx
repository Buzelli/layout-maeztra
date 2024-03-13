
type TipBarItemProps = {
  icon: string;
  title: string;
  description: string;
  classNames?: string;
};

const TipBarItem = ({
  icon,
  title,
  description,
  classNames,
}: TipBarItemProps) => {
  return (
    <div
      className={`flex items-start justify-start gap-[21px] rounded-[4px] bg-[#EFEFEF] pb-[14px] pl-[26px] pt-[11px] lg:gap-[22px] lg:pl-[27px] min-w-[298px] ${classNames}`}
    >
      <img src={icon} alt={title} className="mt-[5px]" />
      <div>
        <p className="text-[14px] font-[700] text-[#353535]">{title}</p>
        <p className="text-[12px] font-[400] text-[#4A4441] lg:text-[#000000]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TipBarItem;
