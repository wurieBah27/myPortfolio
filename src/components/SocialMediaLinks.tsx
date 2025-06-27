import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface SocialMediaLinksProps {
  gap: number;
}

const SocialMediaLinks = ({ gap }: SocialMediaLinksProps) => {
  return (
    <div>
      <div className={`flex w-full items-center gap-${gap} py-3 text-xl`}>
        <span className="rounded border border-gray-300 p-2">
          <FaWhatsapp />
        </span>
        <span className="rounded border border-gray-300 p-2">
          <FaInstagram />
        </span>
        <span className="rounded border border-gray-300 p-2">
          <FaFacebook />
        </span>
        <span className="rounded border border-gray-300 p-2">
          <FaGithub />
        </span>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
