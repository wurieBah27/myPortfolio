import type React from "react";
interface MyServicesProps {
  icon: React.ReactNode;
  subTitle: string;
  description: string;
}

const MyServices: React.FC<MyServicesProps> = ({
  icon,
  subTitle,
  description,
}) => {
  return (
    <div className="col-span-12 rounded-2xl bg-white shadow-2xl sm:col-span-6">
      <div className="mb-5 flex gap-4 px-4 py-2">
        <div className="bg-dark-1 flex size-[70px] items-center justify-center rounded p-1 text-4xl text-[#cf1998] shadow-sm">
          {icon}
        </div>
        <div className="">
          <h3 className="text-gradient text-white">{subTitle}</h3>
          <p className="text-white-50 mt-2 mb-0 text-gray-600">
            {description}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
