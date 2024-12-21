import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20 border-t-2 pt-10 border-neutral-700" id="footer">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((socialLink, index) => (
          <a key={index} href={socialLink.href} target="_blank" rel="noopener">
            {socialLink.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter cursor-pointer text-neutral-500 ">
        &copy;Copyright. All Right Reserved by Restaura Group.
      </p>
    </footer>
  );
};

export default Footer;
