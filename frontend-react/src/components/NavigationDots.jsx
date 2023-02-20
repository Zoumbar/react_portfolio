/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Accueil', 'A-propos', 'Projets', 'Experiences','Temoignages', 'Contactez-moi'].map((item, index) => (
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