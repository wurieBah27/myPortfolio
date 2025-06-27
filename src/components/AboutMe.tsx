import { Button } from "flowbite-react";
import type React from "react";
import { HiPhoneIncoming } from "react-icons/hi";
import { HiBriefcase, HiFlag, HiMapPin, HiUserCircle } from "react-icons/hi2";

import HeaderTitle from "./HeaderTitle";
import AnimateWhileInView from "./AnimateWhileInView";

interface UserProfileCardProps {
  icon: React.ReactNode;
  miniTitle: string;
  title: string;
}

const AboutMeProfileCard: React.FC<UserProfileCardProps> = ({
  icon,
  miniTitle,
  title,
}) => {
  return (
    <div className="grid grid-cols-12 gap-2 rounded-md px-2 py-4 shadow-sm">
      <p className="col-span-5 flex items-center gap-2 text-nowrap text-gray-500">
        {icon} {/* Render the passed icon prop */}
        <span>{miniTitle} : </span>
      </p>
      <p className="col-span-7 text-sm font-bold">{title}</p>
    </div>
  );
};

const AboutMe = () => {
  return (
    <AnimateWhileInView viewport={0.2} transition={2}>
      <div className="">
        <div>
          <HeaderTitle subTitle="About Me" mainTitle="Know Me More" />
        </div>
        <div className="px-2 sm:px-4 md:px-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="col-span-6 p-1 min-[390px]:p-4 md:grid-cols-7">
                <div>
                  <h3 className="py-3 text-2xl font-bold text-gray-600 capitalize">
                    I'm <span className="text-gradient text-xl">Wurie Bah</span>{" "}
                    , a full stack Web Developer
                  </h3>
                </div>
                <div className="py-3 text-sm tracking-wide text-gray-700 md:text-xl">
                  <p>
                    I'm a full-stack developer with a passion for transforming
                    complex ideas into elegant, functional, and user-friendly
                    digital solutions. My journey in development is fueled by a
                    relentless curiosity and a drive to master every layer of
                    web creation from the intricate logic of backend systems and
                    robust databases to the captivating aesthetics and seamless
                    interactions of the frontend.
                  </p>
                  <p className="mt-4">
                    I thrive on solving problems and bringing concepts to life,
                    meticulously crafting code that's not only efficient and
                    scalable but also a joy to use. Whether I'm architecting
                    APIs, optimizing performance, or finessing UI details, my
                    goal remains constant: to build powerful, maintainable
                    applications that deliver exceptional value and an
                    outstanding user experience. Let's create something
                    impactful together.
                  </p>
                </div>
              </div>
              <div className="col-span-6 p-1 min-[390px]:p-4 md:col-span-6">
                <div>
                  <div className="flex flex-col gap-2">
                    <AboutMeProfileCard
                      icon={<HiUserCircle />}
                      miniTitle="Name"
                      title="Wurie Bah"
                    />
                    <AboutMeProfileCard
                      icon={<HiFlag />}
                      miniTitle="Nationality"
                      title="Sierra Leone"
                    />
                    <AboutMeProfileCard
                      icon={<HiMapPin />}
                      miniTitle="Based"
                      title="United Arab Emirates"
                    />
                    <AboutMeProfileCard
                      icon={<HiPhoneIncoming />}
                      miniTitle="Phone"
                      title="+971 52 873 6329"
                    />
                    <AboutMeProfileCard
                      icon={<HiUserCircle />}
                      miniTitle="Email"
                      title="wurieb34@gmail.com"
                    />
                    <AboutMeProfileCard
                      icon={<HiUserCircle />}
                      miniTitle="Language"
                      title="English, Arabic"
                    />
                    <AboutMeProfileCard
                      icon={<HiBriefcase />}
                      miniTitle="Freelance"
                      title="Available"
                    />
                    <div className="mt-5">
                      <Button size="lg" color="dark">
                        Download CV
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateWhileInView>
  );
};

export default AboutMe;
