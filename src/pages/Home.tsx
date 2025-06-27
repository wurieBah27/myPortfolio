import AboutMe from "../components/AboutMe";
import AnimateWhileInView from "../components/AnimateWhileInView";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ContactMeSection from "../homePage/ContactMeSection";
import MyWorkSection from "../homePage/MyWorkSection";
import ResumeSection from "../homePage/ResumeSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="py-[4.5rem]">
        <AboutMe />
      </div>
      <AnimateWhileInView transition={1.5} viewport={0.3}>
        <SkillsSection />
      </AnimateWhileInView>
      <section className="py-[4.5rem]">
        <AnimateWhileInView transition={1.5} viewport={0.3}>
          <ResumeSection />
        </AnimateWhileInView>
      </section>
      <section>
        <AnimateWhileInView transition={1.5} viewport={0.3}>
          <MyWorkSection />
        </AnimateWhileInView>{" "}
      </section>
      <section className="px-5 py-[4.5rem] dark:bg-gray-800">
        <ContactMeSection />
      </section>
    </div>
  );
};

export default Home;
