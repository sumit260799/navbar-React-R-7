import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/contact",
    text: "contact",
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com",
    icon: <AiFillInstagram />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <BsLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
