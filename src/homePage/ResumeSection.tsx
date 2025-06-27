import { useState } from "react";

import { Button } from "flowbite-react";
import HeaderTitle from "../components/HeaderTitle";
import MySkills from "../components/MySkills";
import MyExperience from "../components/MyExperience";
import MyEducation from "../components/MyEducation";

const ResumeSection = () => {
  const [showOptions, setShowOptions] = useState("skills");

  const handleToggleOptions = (param: string) => setShowOptions(param);
  return (
    <div>
      <div>
        <div>
          <HeaderTitle subTitle="Summary" mainTitle="Resume" />
        </div>

        <div className="px-2 py-10 sm:px-4 md:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            <Button
              color="dark"
              size="lg"
              className="text-xs font-bold min-[450px]:text-2xl"
              onClick={() => handleToggleOptions("skills")}
            >
              Skills
            </Button>
            <Button
              color="dark"
              size="lg"
              className="text-xs font-bold min-[450px]:text-2xl"
              onClick={() => handleToggleOptions("experience")}
            >
              Experience
            </Button>
            <Button
              color="dark"
              size="lg"
              className="text-xs font-bold min-[450px]:text-2xl"
              onClick={() => handleToggleOptions("education")}
            >
              Education
            </Button>
          </div>
          <div className="mt-10">
            {showOptions === "skills" && <MySkills />}
            {showOptions === "experience" && <MyExperience />}
            {showOptions === "education" && <MyEducation />}{" "}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button color={"dark"} size="lg">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
