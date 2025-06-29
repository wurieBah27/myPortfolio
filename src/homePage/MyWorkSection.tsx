import { Button } from "flowbite-react";
import HeaderTitle from "../components/HeaderTitle";
import PortfolioCard from "../components/PortfolioCard";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MyWorkSection = () => {
  return (
    <div className="bg-[rgb(255,233,217)] px-5 py-10">
      <div>
        <div>
          <div>
            <HeaderTitle subTitle="Portfolio" mainTitle="My Work" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Button outline color={"dark"} pill>
                All
              </Button>
              <Button outline color={"dark"} pill>
                Full Stack
              </Button>
              <Button outline color={"dark"} pill>
                Front End
              </Button>
            </div>
          </div>
          <div>
            <div className="nexter_gallery mt-10 min-[500px]:grid">
              <Link
                to={"https://bah-cafe.vercel.app/"}
                target="_blank"
                className="nexter_gallery__item-1 overflow-hidden bg-gray-200 shadow-md"
              >
                <PortfolioCard
                  imgSrc="/bah-cafe.vercel.app_.png"
                  name="Bah Cafe"
                  description="A customer facing webiste where customers can place orders, track their orders and manage their Accounts."
                />
              </Link>

              <Link
                to={"https://bah-cafe.vercel.app/"}
                target="_blank"
                className="nexter_gallery__item-2 overflow-hidden bg-gray-200 shadow-md"
              >
                <PortfolioCard
                  imgSrc="/dashboard.png"
                  name="Admin Dashboard"
                  description="An admin dashboard for a restaurant shop, to track live orders, add new Products etc."
                />
              </Link>
              <Link
                to="/all-projects/3"
                className="nexter_gallery__item-3 overflow-hidden bg-gray-200 shadow-md"
              >
                <PortfolioCard
                  name="Portfolio"
                  imgSrc="/web-developer-isometric.png"
                  description="An admin dashboard for a restaurant shop, to track live orders, add new Products etc."
                />
              </Link>
            </div>
          </div>
          <div>
            <Link to={"/all-projects"}>
              <Button
                className="flex w-full items-center gap-3 text-xl font-bold"
                color="dark"
              >
                <span>View All Projects</span> <HiArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;
