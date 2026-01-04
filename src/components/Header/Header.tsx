import './header.scss'
import React from "react";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
const Header: React.FC = () => {

    type LinkType = {
    text: string;
    url: string;
  };
  const links:LinkType[] = [
    { text: "Home", url: "" },
    { text: "About", url: "" },
    { text: "Service", url: "" },
    { text: "Pricing", url: "" },
    { text: "Blog", url: "" },
  ];

  return (
    <header className='header'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
         {links.map((link: LinkType, index:number) => (
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
