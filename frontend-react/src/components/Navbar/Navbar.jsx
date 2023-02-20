import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoide} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <a href="#Accueil">Accueil</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#A-propos">Qui suis-je</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#Projets">Projets</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#Experiences">Expériences</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#Temoignages">Témoignages</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#Contactez-moi">Contactez moi !</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li className="">
                <a href="#Accueil" onClick={() => setToggle(false)}>
                  Accueil
                </a>
              </li>
              <li className="">
                <a href="#A-propos">Qui suis-je</a>
              </li>
              <li className="">
                <a href="#Projets">Projets</a>
              </li>
              <li className="">
                <a href="#Experiences">Expériences</a>
              </li>
              <li className="">
                <a href="#Temoignages">Témoignages</a>
              </li>
              <li className="">
                <a href="#Contactez-moi">Contactez moi !</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
