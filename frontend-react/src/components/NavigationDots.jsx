/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Accueil', 'Qui%20suis-je%20?', 'Projets', 'Expériences','Témoignages', 'Contactez%20moi%20!'].map((item, index) => (
            <a href={`#${item}`}
                key={item + index}
                className = "app__navigation-dot"
                style = { active === item ? {backgroundColor : '#313BAC'}: { }}
                />  
        ))}
    </div>
  )
}

export default NavigationDots