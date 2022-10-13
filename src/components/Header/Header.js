import React from 'react'
import img from './gameTime.png'
import '../../App.css'

function Header() {
  return (
    <>
      <div className='div-img-banner'>
        <img className='img-banner' src={img} alt="GameTime" />
      </div>

    </>
  )
}

export default Header;