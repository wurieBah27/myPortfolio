import { Button } from "flowbite-react";
import { HiBriefcase, HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

import { motion } from "framer-motion";

import SocialMediaLinks from "./SocialMediaLinks";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-b-sm bg-[rgb(255,233,217)] pt-24 pb-10">
      <div>
        <div className="flex flex-col gap-5 px-2 sm:flex-row sm:px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="z-20 mt-2 flex flex-2/4 flex-col"
          >
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="flex items-center gap-3"
            >
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="65"
                    height="2"
                    viewBox="0 0 65 2"
                    fill="none"
                  >
                    <path d="M0 1H65" stroke="#080808"></path>
                  </svg>
                </span>
              </div>
              <div className="text-xl font-bold">
                <h3>Welcome, I'm ✌️</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 1.7,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <span className="absolute top-0 left-0 flex size-24">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-2"
                >
                  <path
                    fill="#f7c81f"
                    d="M32.3,-47.5C46.2,-41.3,64.7,-39.7,69.9,-31.1C75.2,-22.5,67.1,-7,64.7,9.3C62.3,25.5,65.5,42.6,59.7,54.7C53.8,66.8,38.8,73.9,24.6,73.3C10.4,72.6,-2.9,64.1,-16.7,59C-30.4,54,-44.6,52.4,-53.3,44.8C-62,37.2,-65.3,23.5,-65.2,10.6C-65,-2.3,-61.6,-14.4,-54.9,-23.4C-48.2,-32.5,-38.4,-38.4,-28.7,-46.5C-19,-54.6,-9.5,-64.9,-0.1,-64.6C9.2,-64.4,18.4,-53.7,32.3,-47.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
              <h2 className="flex flex-wrap gap-x-4 text-7xl font-extrabold text-gray-600 sm:text-9xl">
                <span className="z-[100]">Wurie</span> <span>Bah</span>{" "}
              </h2>
              <p className="my-3 text-xl font-bold text-gray-600 capitalize">
                A web Developer | Based in UAE
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <p className="px-4 text-sm">
                Full-stack wizard weaving magic across front and back. I build
                dynamic, responsive web applications that are as beautiful on
                the surface as they are powerful under the hood. From
                pixel-perfect UIs to optimized APIs and databases, I love
                architecting complete digital products that simply work. Let's
                build something amazing together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.21,
                duration: 2.5,
                ease: "easeInOut",
              }}
            >
              <div>
                <div className="my-4 flex items-center gap-5">
                  <Link
                    to={"https://wa.me/message/7MOAKV5Y5G2LO1"}
                    target="_blank"
                  >
                    <Button color={"dark"} className="flex items-center gap-3">
                      <span className="font-bold">Let's talk</span>
                      <HiMiniChatBubbleLeftEllipsis />
                    </Button>
                  </Link>

                  <Button
                    color={"dark"}
                    outline
                    className="flex items-center gap-3"
                  >
                    <span className="font-bold">My Work</span>
                    <HiBriefcase className="text-gray-900" />
                  </Button>
                </div>
              </div>
              <div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-gray-600 capitalize">
                    <span className="text-2xl font-bold text-gray-950">
                      50+
                    </span>{" "}
                    <span>happy clients World wide</span>
                  </p>
                </div>
                <div className="z-20 flex sm:hidden">
                  <SocialMediaLinks gap={5} />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -50, y: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="relative z-20 hidden flex-1/5 flex-col items-center justify-center gap-5 p-6 sm:flex"
          >
            <div className="flex items-center justify-center">
              <img src="/my_profile.png" alt="" className="lg:w-1/2" />
            </div>
            <div className="flex w-full items-center justify-center rounded-full bg-white">
              <SocialMediaLinks gap={3} />
            </div>
          </motion.div>
        </div>
        <div className="">
          <div className="absolute bottom-0 z-0 w-full opacity-15">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              className="transition delay-550 duration-2000 ease-in-out"
            >
              <style></style>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="5%" stopColor="#fcb900"></stop>
                  <stop offset="95%" stopColor="#8ED1FC"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,500 L 0,93 C 35.30464518210633,79.56975934255726 70.60929036421265,66.13951868511452 111,62 C 151.39070963578735,57.86048131488547 196.86748372525574,63.01168460209912 236,85 C 275.13251627474426,106.98831539790088 307.92077473476434,145.813742906489 350,133 C 392.07922526523566,120.18625709351099 443.4494173356868,55.733343771944824 485,57 C 526.5505826643132,58.266656228055176 558.2815559224885,125.25288200573175 594,137 C 629.7184440775115,148.74711799426825 669.4243589743589,105.2551282051282 714,86 C 758.5756410256411,66.7448717948718 808.0210081800755,71.72660517375544 843,83 C 877.9789918199245,94.27339482624456 898.4916083053389,111.83845109985006 942,112 C 985.5083916946611,112.16154890014994 1052.012558598569,94.91959042684431 1097,91 C 1141.987441401431,87.08040957315569 1165.4581573003854,96.48318719277269 1203,101 C 1240.5418426996146,105.51681280722731 1292.1548121998899,105.14766080206493 1334,103 C 1375.8451878001101,100.85233919793507 1407.922593900055,96.92616959896753 1440,93 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="0.4"
                className="path-0 transition-all delay-550 duration-2000 ease-in-out"
              ></path>
              <style></style>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="5%" stopColor="#fcb900"></stop>
                  <stop offset="95%" stopColor="#8ED1FC"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,500 L 0,218 C 36.875321224544024,230.080900187895 73.75064244908805,242.16180037579002 113,246 C 152.24935755091195,249.83819962420998 193.8727514281918,245.43369868473496 241,246 C 288.1272485718082,246.56630131526504 340.7583518381445,252.10340488527018 381,238 C 421.2416481618555,223.89659511472982 449.09384121922983,190.15268177418434 491,177 C 532.9061587807702,163.84731822581566 588.8662832849361,171.28586801799239 622,179 C 655.1337167150639,186.71413198200761 665.4410256410256,194.70384615384614 699,194 C 732.5589743589744,193.29615384615386 789.3696141509613,183.898747366623 835,184 C 880.6303858490387,184.101252633377 915.0805177551291,193.70116437966178 953,201 C 990.9194822448709,208.29883562033822 1032.308314828522,213.29659511472983 1073,206 C 1113.691685171478,198.70340488527017 1153.6862229307828,179.1124551614189 1200,185 C 1246.3137770692172,190.8875448385811 1298.9467934483478,222.25358423959463 1340,232 C 1381.0532065516522,241.74641576040537 1410.5266032758261,229.8732078802027 1440,218 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="0.53"
                className="path-1 transition-all delay-150 duration-300 ease-in-out"
              ></path>
              <style></style>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="5%" stopColor="#fcb900"></stop>
                  <stop offset="95%" stopColor="#8ED1FC"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,500 L 0,343 C 45.42280741710793,319.514207899182 90.84561483421587,296.02841579836394 133,303 C 175.15438516578413,309.97158420163606 214.04034808024443,347.4005447057261 245,344 C 275.9596519197556,340.5994552942739 298.99299284480634,296.3694053787318 344,303 C 389.00700715519366,309.6305946212682 455.9876805405303,367.1218337793468 499,379 C 542.0123194594697,390.8781662206532 561.0562849930726,357.1432595038812 592,339 C 622.9437150069274,320.8567404961188 665.7871794871794,318.30512820512826 707,324 C 748.2128205128206,329.69487179487174 787.7949970582096,343.6362276756059 824,355 C 860.2050029417904,366.3637723243941 893.0328322799827,375.1499610924481 942,372 C 990.9671677200173,368.8500389075519 1056.0736738218604,353.7639279546015 1097,351 C 1137.9263261781396,348.2360720453985 1154.6724724325761,357.79432708914584 1184,356 C 1213.3275275674239,354.20567291085416 1255.2364364478353,341.0587636888155 1300,337 C 1344.7635635521647,332.9412363111845 1392.3817817760823,337.97061815559226 1440,343 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="1"
                className="path-2 transition-all delay-150 duration-300 ease-in-out"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
