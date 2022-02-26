import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'


const abouts = [
  {title: 'Front-end', description: 'I am a good developper', imgUrl: images.about01 },
  {title: 'Back-end', description: 'I am a good developper', imgUrl:images.about02 },
  {title: 'UI/UX', description: 'I am a good developper', imgUrl:images.about03 },
  {title: 'Animations', description: 'I am a good developper', imgUrl:images.about04 },
]



const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Apps </span>
        <br />
        means
        <span> Good Design </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{maringTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{maringTop: 20}}>{about.description}</p>
          </motion.div>
        ))}


      </div>

    </>
  )
}

export default About