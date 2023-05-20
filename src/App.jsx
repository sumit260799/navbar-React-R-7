import React, { useRef, useState } from "react";
import { social, links } from "./data";

import logo from "./logo.svg";
import { FaHamburger } from "react-icons/fa";
function App() {
  const [showlinks, setShowLinks] = useState(false);
  const valueRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showlinks);
  };

  const heightVal = {
    height: showlinks
      ? `${valueRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav className="shadow-md bg-white mx-auto">
      <div className="nav-center ">
        <div className="aka container flex p-[1rem] items-center">
          <div className="logo">
            <img src={logo} className="logo h-[40px]" alt="logo" />
          </div>
          <button
            className="hamburger text-[1.5rem] text-[#49a6e9] hover:rotate-90 hover:text-[#075186]  transition duration-500 bg-transparent"
            onClick={toggleLinks}
          >
            <FaHamburger />
          </button>
        </div>
        <div
          className="link-container overflow-hidden transition-all"
          style={heightVal}
        >
          <ul className="links" ref={valueRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a
                    className="text-[1rem] text-zinc-600 px-[1rem] md:px[0.2rem]  py-[0.5rem] capitalize tracking-wide block font-normal hover:pl-[1.5rem] hover:md:pl-[0.95rem] transition-all hover:text-[#49a6e9] hover:bg-blue-100"
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons">
          <ul className="social-icons  hidden">
            {social.map((socials) => {
              const { id, url, icon } = socials;
              return (
                <li key={id}>
                  <a className="text-[#49a6e9]" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
