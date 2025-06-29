import { FaGithub, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SocialMediaLinksProps {
  gap: number;
}

const SocialMediaLinks = ({ gap }: SocialMediaLinksProps) => {
  return (
    <div>
      <div className={`flex w-full items-center gap-${gap} py-3 text-xl`}>
        <Link
          to={"https://wa.me/message/7MOAKV5Y5G2LO1"}
          target="_blank"
          className="rounded border border-gray-300 p-2"
        >
          <FaWhatsapp />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/wuriebah27?igsh=MTU5YWJhN3EydnU2dg%3D%3D&utm_source=qr"
          className="rounded border border-gray-300 p-2"
        >
          <FaInstagram />
        </Link>

        <Link
          to={"https://www.tiktok.com/@wurie_bah_001?_t=ZS-8vx0fGXyE1i&_r=1"}
          target="_blank"
          className="rounded border border-gray-300 p-2"
        >
          <FaTiktok />
        </Link>

        <Link
          to={"https://github.com/wurieBah27"}
          target="_blank"
          className="rounded border border-gray-300 p-2"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
