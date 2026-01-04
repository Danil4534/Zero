import './header.scss'
import React, { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Header: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  type LinkType = {
    text: string;
    url: string;
  };
  const links: LinkType[] = [
    { text: "Home", url: "" },
    { text: "About", url: "" },
    { text: "Service", url: "" },
    { text: "Pricing", url: "" },
    { text: "Blog", url: "" },
  ];
  useEffect(() => {
    gsap.timeline()
    gsap.fromTo(".logo", { y: 50, opacity: 0, }, { y: 0, stagger: 0.5, opacity: 1 })
    gsap.fromTo("nav ul li", { y: 50, opacity: 0 }, { y: 0, stagger: 0.5, opacity: 1 })
    gsap.fromTo(".headerBtn", { x: 100, opacity: 0 }, { x: 0, opacity: 1, delay: 1 })
  }, [])

  return (
    <header className='header' id='header'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          {links.map((link: LinkType, index: number) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <Button className="headerBtn" type="button">Contact Us</Button>
      </nav>
    </header>
  );
};
export default Header;
