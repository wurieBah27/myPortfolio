import ExperienceCard from "./ExperienceCard";

const MyEducation = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2 className="my-5 text-3xl font-bold capitalize">
              Education & Continuous Learning
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            <ExperienceCard
              year="Sept 2010 - May 2014"
              companyName="Christ The King College"
              subTitle="High School Certificate"
              description="Formal Education in Sierra Leone."
            />
            <ExperienceCard
              year="Jul 2023 - Sept 2023"
              companyName="DocSta institute"
              subTitle="Wensite Development"
              description="Focused on Web Development (HTML, CSS, Javascript"
            />
            <ExperienceCard
              year="Sept 2023 - Present"
              companyName="Udemy and Other Courses"
              subTitle="Self-Taught Full-Stack"
              description="In-depth study of modern JavaScript, React.js ecosystem, Node.js backend development, NoSQL and SQL database management, and cloud deployment strategies."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
