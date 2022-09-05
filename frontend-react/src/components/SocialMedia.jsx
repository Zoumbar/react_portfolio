import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/open_the_dev" target="_blank" rel="noreferrer">
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
