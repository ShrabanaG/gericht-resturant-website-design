import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { gericht } from '../../constants/images';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className='gericht__navbar'>
      <div className='gericht__navbar-logo'>
        <img src={gericht} alt="Logo" />
      </div>
      <ul className='gericht__navbar-links-container'>
        <li className='gericht__navbar-each-link p__opensans'><a href='#home'>Home</a></li>
        <li className='gericht__navbar-each-link p__opensans'><a href='#about'>About</a></li>
        <li className='gericht__navbar-each-link p__opensans'><a href='#menu'>Menu</a></li>
        <li className='gericht__navbar-each-link p__opensans'><a href='#awards'>Awards</a></li>
        <li className='gericht__navbar-each-link p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='gericht__navbar-login-container'>
        <a className='p__opensans' href='#login'>Log In/ Registration</a>
        <div />
        <a className='p__opensans' href='/'>Book a table</a>
      </div>
      <div className='gericht__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu &&( 
            <div className='gericht__navbar-smallscreen-overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
              <ul className='gericht__navbar-smallscreen-links-container'>
                <li className=' p__opensans'><a href='#home'>Home</a></li>
                <li className=' p__opensans'><a href='#menu'>Menu</a></li>
                <li className=' p__opensans'><a href='#about'>About</a></li>
                <li className=' p__opensans'><a href='#awards'>Awards</a></li>
                <li className=' p__opensans'><a href='#contact'>Contact</a></li>
              </ul>
            </div>
          )}
        
      </div>
    </nav>  

  )
  
};

export default Navbar;
