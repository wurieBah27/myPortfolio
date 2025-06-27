import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-[#151414] pt-5">
      <div className="container-xl p-4 sm:p-10">
        <div className="flex flex-col gap-5 text-white sm:flex-row">
          <div className="contact-box flex-1 gap-2 pt-1 text-white">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="">
              <a href="" className="contact-box__info--title">
                +123 456 4567
              </a>
            </div>
          </div>

          <div className="col-lg-4 contact-box flex-1 gap-3 pt-1">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-opened"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 19l6 -6" />
                <path d="M15 13l6 6" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title">
                example002@gmail.com
              </a>
              <p className="contact-box__info--subtitle mt-1">Online support</p>
            </div>
          </div>
          <div className="contact-box flex-1 gap-3 pt-1">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#a905b6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                <path d="M9 4v13" />
                <path d="M15 7v13" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title">
                Bo city, SLE
              </a>
              <p className="contact-box__info--subtitle mt-1">
                Messima section
                <span className="m-0"> from 9am - 00:00am </span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-sm mt-10 flex flex-col items-center justify-between gap-5 bg-gray-800 p-2 text-center sm:px-6 sm:py-4">
          <div className="text-sm font-bold text-white sm:text-xl">
            Connect with us on social media
          </div>
          <div className="col-lg-8 col-md-7 col-6 text-white">
            <SocialMediaLinks gap={5} />
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Wurie Bah
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Full-stack wizard weaving magic across front and back. I build
              dynamic, responsive web applications that are as beautiful on the
              surface as they are powerful under the hood.
            </p>
          </div>
        </div>
        <div className="row border-t border-gray-600 text-center text-white">
          <div className="copyright col-12 pt-4 pb-4">
            <span className="copyright__icon"> &copy; copyright</span>
            <span className="copyright__date">{` ${new Date().getFullYear()}`}</span>{" "}
            personal portfolio | Created by <a href="#"> Wurie Bah</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
