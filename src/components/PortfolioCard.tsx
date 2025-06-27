import { Button } from "flowbite-react";
import type React from "react";

interface PortfolioCardProps {
  imgSrc: string;
  description: string;
  name: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imgSrc,
  description,
  name,
}) => {
  return (
    <div className="portfolio-box relative h-full w-full overflow-hidden rounded-xl">
      <div className="portfolio-info absolute top-1/2 bottom-1/2 left-0 z-50 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
        <Button className="cursor-pointer">View</Button>
        <div>
          <p className="text-sm text-gray-100">{description}</p>
        </div>
      </div>
      <div className="">
        <div className="">
          <img
            src={imgSrc}
            alt=""
            className="max-[]: block h-full w-full object-center duration-1000 hover:scale-[1.01]"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
