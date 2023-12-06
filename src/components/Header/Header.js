import React from 'react'
import Banner from '../../assets/images/slider-image.png'
import Navigation from '../Navigation/Navigation'

export default function Header() {

  return (
        <div className="relative bg-cover bg-no-repeat bg-center w-full h-48"
        style={{
          backgroundImage: `url(${Banner}), linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))`,
        }}>
            <Navigation />
        </div>
  )
}
