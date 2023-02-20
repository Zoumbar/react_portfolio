import React from "react";
import { BsTwitter, BsGithub, BsLinkedin, BsLink } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/open_the_dev"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://github.com/Zoumbar" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/esteban-ouvr%C3%A9-02ab83184/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
