import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import { images } from '../../constants';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Qui
        <span> Suis-je ? </span>
      </h2>
      <div className="app_profile_pres">
        <div className="profile_image">
        <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration: 1, ease:'easeInOut'}}
          src={images.aboutGif}
          alt='profile_circle'
          className="overlay_circle"
        />
        </div>
        <div className="profile_desc">
          <h3>Coucou c'est moi</h3>
          <p>Je fais une petite description rapidos</p>
        </div>
      </div>
      <h2 className="head-text">
        Mes centres
        <span> d'interets </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ maringTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ maringTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "A-propos");
