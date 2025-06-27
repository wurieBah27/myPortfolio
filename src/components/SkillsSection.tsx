import HeaderTitle from "./HeaderTitle";
import MyServices from "./MyServices";
import {
  FaAndroid,
  FaBullhorn,
  FaDesktop,
  FaFirefoxBrowser,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const SkillsSection = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div>
        <div className="mb-5">
          <HeaderTitle subTitle="Services" mainTitle="What I Do" />
          <h3 className="text-center text-xl font-bold text-gray-600">
            My Special Service For your Business Development
          </h3>
        </div>
        <div className="p-2 sm:p-7">
          <div>
            <div className="grid grid-cols-12 gap-5">
              <MyServices
                icon={<FaDesktop />}
                subTitle="Web Development"
                description="Crafting responsive, performant, and intuitive web solutions."
              />
              <MyServices
                icon={<FaAndroid />}
                subTitle="App Design & Develop"
                description="Crafting responsive, performant, and intuitive Mobile Apps."
              />
              <MyServices
                icon={<FaFirefoxBrowser />}
                subTitle="Web Performance Optimization"
                description="Ensuring fast loading times and smooth interactions for your users."
              />
              <MyServices
                icon={<FaMobileAlt />}
                subTitle="Responsive Design"
                description="Crafting beautiful and functional interfaces across all devices."
              />
              <MyServices
                icon={<FaPaintBrush />}
                subTitle="UI/UX Design"
                description="Building intuitive and engaging user experiences with modern frameworks like React.js."
              />
              <MyServices
                icon={<FaBullhorn />}
                subTitle="SEO Marketing"
                description="Implementing best practices in the frontend code to help websites rank better in search engines."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
