import React from "react";

interface ExperienceCardProps {
  year: string;
  subTitle: string;
  companyName: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  year,
  subTitle,
  companyName,
  description,
}) => {
  return (
    <div>
      <div className="mb-4 rounded bg-gray-200 p-4 shadow">
        <p className="fw-400 text-sm">{year}</p>
        <h3 className="my-2 text-xl font-bold">{subTitle}</h3>
        <p className="text-gradient-2 mb-2 inline-block py-2 capitalize">
          {companyName}{" "}
        </p>
        <p className="mb-0 block text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
