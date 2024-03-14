import  { useState } from 'react';
import Icons from '../Icons/icons';

interface subtitle {
    title: string;
    link?: string;
}

interface AccordionItem {
    title: string;
    subtitles: subtitle[];
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion = ({ items } : AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="lg:hidden w-[298px] flex flex-col gap-[16px]">
                {items.map((item, index) => (
                    <div key={index} className='flex flex-col gap-[12px]'>
                        <div>
                            <button className="w-[298px] flex flex-row items-baseline justify-between text-[16px] font-[700] text-[#353535]" onClick={() => toggleItem(index)}>
                            {item.title} <img src={openIndex === index ? Icons.less : Icons.more} />
                            </button>


                        </div>
                        {openIndex === index && (
                            <ul className="flex flex-col gap-[12px]">
                                {item.subtitles.map((subtitle, idx) => (
                                    <li key={idx} className="text-[12px]">
                                        {subtitle.link ? (
                                            <a href={subtitle.link}>{subtitle.title}</a>
                                        ) : (
                                            subtitle.title
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className="hidden lg:w-[952px] lg:flex lg:flex-row lg:justify-between">
                {items.map((item, index) => (
                    <div key={index} className='flex flex-col gap-[24px]'>
                        <div>

                            <p className="text-[16px] font-[700] text-[#353535]">
                                {item.title}
                            </p>

                        </div>
                        <ul className="flex flex-col gap-[24px]">
                            {item.subtitles.map((subtitle, idx) => (
                                <li key={idx} className="text-[12px]">
                                    {subtitle.link ? (
                                        <a href={subtitle.link}>{subtitle.title}</a>
                                    ) : (
                                        subtitle.title
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
