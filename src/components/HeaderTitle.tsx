import React from "react";

interface HeaderTitleCardProps {
  subTitle: string;
  mainTitle: string;
}

const HeaderTitle: React.FC<HeaderTitleCardProps> = ({
  subTitle,
  mainTitle,
}) => {
  return (
    <div>
      <div className="relative mb-5 flex text-center">
        <h2 className="text-light mb-0 w-full text-4xl font-bold uppercase opacity-4 sm:text-6xl md:text-8xl">
          {subTitle}
        </h2>
        <p className="absolute bottom-1/2 mb-0 w-full translate-y-1/2 align-middle text-sm font-bold sm:text-2xl">
          <span className="text-gradient medium-text">{mainTitle}</span>
          <span className="mx-auto block w-[80px] border-3 border-b border-gray-500"></span>
        </p>
      </div>
    </div>
  );
};

export default HeaderTitle;
