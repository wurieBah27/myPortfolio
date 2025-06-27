import { Progress } from "flowbite-react";
import type React from "react";

interface MySkillsProgressBarProps {
  percentage: number;
  labelText: string;
}

const MySkillsProgressBars: React.FC<MySkillsProgressBarProps> = ({
  percentage,
  labelText,
}) => {
  return (
    <div>
      <div>
        <p className="mb-2 font-bold text-gray-600 capitalize">{labelText}</p>
      </div>
      <div className="text-gray-900">
        <Progress
          progress={percentage}
          progressLabelPosition="inside"
          size="lg"
          labelProgress
        />
      </div>
    </div>
  );
};

const MySkills = () => {
  return (
    <div>
      <div>
        <h2 className="my-5 text-3xl font-bold capitalize">My skills</h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <MySkillsProgressBars percentage={85} labelText="web design" />
        <MySkillsProgressBars percentage={75} labelText="HTML & CSS" />
        <MySkillsProgressBars percentage={55} labelText="Javascript" />
        <MySkillsProgressBars percentage={65} labelText="React JS" />
        <MySkillsProgressBars percentage={45} labelText="Typescript" />
        <MySkillsProgressBars percentage={78} labelText="Tailwind CSS" />
        <MySkillsProgressBars percentage={65} labelText="Firebase Database" />
        <MySkillsProgressBars percentage={55} labelText="Flowbite" />
      </div>
    </div>
  );
};

export default MySkills;
