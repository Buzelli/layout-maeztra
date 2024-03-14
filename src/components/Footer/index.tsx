import Icons from '../Icons/icons';
import Accordion from './Accordion';
import Newsletter from './Newsletter';
import SocialIcon from './SocialIcon';

const Footer = () => {
    const accordionItems = [
        {
            title: 'Informações',
            subtitles: [
                { title: 'Quem Somos', link: '#' },
                { title: 'Prazo de Envio', link: '#' },
                { title: 'Trocas e Devoluções', link: '#' },
                { title: 'Promoções e Cupons', link: '#' },
            ],
        },
        {
            title: 'Minha Conta',
            subtitles: [
                { title: 'Minha Conta', link: '#' },
                { title: 'Meus Pedidos', link: '#' },
                { title: 'Cadastre-se', link: '#' },
            ],
        },
        {
            title: 'Onde nos Encontrar',
            subtitles: [
                { title: 'Lojas', link: '#' },
                { title: 'Endereço', link: '#' },
            ],
        },
    ];
    return (
        <footer>
            <section>
                <Newsletter />
            </section>
            <section>
                <div className="container mx-auto px-4 py-6">
                    <Accordion items={accordionItems} />
                </div>
            </section>
            <section className="pt-[24px] pb-[32px] bg-[#353535] flex justify-center items-center lg:py-[20px] lg:px-0">
                <div className="flex flex-col gap-[32px] w-[298px] justify-center items-center lg:flex-row lg:w-full lg:px-[161px] lg:justify-between">
                    <div className="flex flex-row justify-center items-center gap-[24px]">
                        <SocialIcon src={Icons.facebook} alt="Facebook" href="#" />
                        <SocialIcon src={Icons.linkedin} alt="LinkedIn" href="#" />
                        <SocialIcon src={Icons.instagram} alt="Instagram" href="#" />
                        <SocialIcon src={Icons.youtube} alt="YouTube" href="#" />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-[24px]">
                        <SocialIcon src={Icons.master} alt="Mastercard" />
                        <SocialIcon src={Icons.visa} alt="Visa" />
                        <SocialIcon src={Icons.master} alt="Mastercard" />
                        <SocialIcon src={Icons.visa} alt="Visa" />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-[24px]">
                        <SocialIcon src={Icons.vtex} alt="Vtex" text="Powered by" />
                        <SocialIcon src={Icons.maeztra} alt="Maeztra" text="Developed by" />
                    </div>
                </div>
            </section>

        </footer>
    );
};

export default Footer;
