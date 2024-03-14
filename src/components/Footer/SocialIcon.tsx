
interface SocialIconProps {
  src: string;
  alt: string;
  href?: string;
  text?: string;
}

const SocialIcon = ({ src, alt, href, text }: SocialIconProps) => {
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a {...linkProps}>
      <div className="flex flex-col gap-[4px] text-[10px] items-start">
        {text && <span className="font-[400] text-[#fff]">{text}</span>}
        <img src={src} alt={alt} />
      </div>
    </a>
  );
};

export default SocialIcon;
