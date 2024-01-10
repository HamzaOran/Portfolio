import Logo from '../assets/logo.jpg';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right"
        src={Logo}
        alt="Logo"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-8xl text-6xl p-6 font-bold text-gray-800 text-center">
            Hamza Oran
          </h1>
          <h2 className="sm:text-6xl text-4xl p-6 font-bold text-gray-800 text-center">
            Front-end Web Developer
          </h2>
          <div className="flex flex-row">
            <div>
              <a
                href="https://hamzasprojects.vercel.app/"
                className="relative inline-flex items-center justify-center m-6 p-4 px-6 py-3 overflow-hidden text-3xl text-white transition duration-300 ease-out border-2 border-gray-800 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 duration-700 -translate-x-full bg-white/50 group-hover:translate-x-0 ease">
                  <svg
                    className="w-10 h-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-gray-800 font-bold transition-all duration-700 transform group-hover:translate-x-full ease">
                  Projects
                </span>
                <span className="relative invisible">Hamza Oran-Front</span>
              </a>
            </div>
            <Link to="/resume">
              <div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center m-6 p-4 px-6 py-3 overflow-hidden text-3xl text-white transition duration-300 ease-out border-2 border-gray-800 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 duration-700 -translate-x-full bg-white/50 group-hover:translate-x-0 ease">
                    <svg
                      className="w-10 h-10 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-gray-800 font-bold transition-all duration-700 transform group-hover:translate-x-full ease">
                    Resume
                  </span>
                  <span className="relative invisible">Hamza Oran-Front</span>
                </a>
              </div>
            </Link>
          </div>

          <div className="flex justify-around pt-6 max-w-[700px] w-full">
            <a href="https://twitter.com/muholusk">
              <FaTwitter className="cursor-pointer hover:scale-125" size={40} />
            </a>

            <a href="https://www.facebook.com/oranc0/">
              <FaFacebookF
                className="cursor-pointer hover:scale-125"
                size={40}
              />
            </a>

            <a href="https://www.instagram.com/oran__hamza/">
              <FaInstagram
                className="cursor-pointer hover:scale-125"
                size={40}
              />
            </a>

            <a href="https://www.linkedin.com/in/hamza-oran-0b5457b4/">
              <FaLinkedin
                className="cursor-pointer hover:scale-125"
                size={40}
              />
            </a>

            <a href="https://github.com/HamzaOran">
              <BsGithub className="cursor-pointer hover:scale-125" size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
