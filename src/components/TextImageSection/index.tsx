

interface TextImageSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageUrlMob: string,
  alt: string;
}

const TextImageSection = ({
  title,
  description,
  imageUrl,
  imageUrlMob,
  alt,
} : TextImageSectionProps) => {
  return (
    <section className="pt-[23px] pb-[40px] px-[31px] flex justify-center lg:py-[80px]">
      <div className="w-[298px] flex flex-col items-center lg:flex-row lg:w-[1598px] lg:max-w-[1598px] lg:gap-[64px]">
        <div className="min-w-[298px] max-w-[420px]">
          <h3 className="text-[24px] font-[700] text-[#000] mb-[16px]">{title}</h3>
          <p className="text-[14px] font-[400] text-[#000] mb-[24px] lg:m-0">{description}</p>
        </div>
        <img src={imageUrl} alt={alt} className="min-w-[298px] mb-[39px] lg:m-0 hidden lg:block" />
        <img src={imageUrlMob} alt={alt} className="mb-[39px] lg:m-0 lg:hidden" />
      </div>
    </section>
  );
};

export default TextImageSection;
