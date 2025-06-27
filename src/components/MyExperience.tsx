import ExperienceCard from "./ExperienceCard";

const MyExperience = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="my-5 text-3xl font-bold capitalize">My Experience</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          <ExperienceCard
            year="Jan 2025 - May 2025"
            companyName="MT Cafe"
            subTitle="Freelance Full-Stack Developer"
            description="Designed and developed a full stack website for customers to order online with Maps directions."
          />
          <ExperienceCard
            year="Nov 2024 - Dec 2024"
            companyName="Green Line Electronics"
            subTitle="Full-Stack Developer"
            description="Designed and developed a full stack App for tracking warranty periods of purchased products and stocks."
          />
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
