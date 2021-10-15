import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 h-48">
      <div className="text-white flex self-center place-content-around pl-5">Copyright &copy; { year } Derik Hill</div>
      <div className="flex flex-row justify-center place-items-center">
        <a target="_blank" className="text-4xl text-white m-2" href="https://github.com/derikhill"><FaGithub /></a>
        <a target="_blank" className="text-4xl text-white m-2" href="https://www.linkedin.com/in/derikhill/"><FaLinkedin /></a>
        <a target="_blank" className="text-4xl text-white m-2" href="https://www.instagram.com/derikhill/"><FaInstagram /></a>
      </div>
      {/* <div className="text-white flex self-center pl-5">Second column</div> */}
    </footer>
  )
}

export default Footer;
