import React from 'react';
import { SubHeading } from '../../components';
import { welcome } from '../../constants/images';

import './header.css';

const Header = () => {
  return (
    <div className='gericht__header-container section__padding flex-space-between'>
      <div className='gericht__header-title_container app__wrapper-info'>
        <SubHeading title="Chase the new Flavour" />
        <h1 className='gericht__header-heading'>
          The key to Fine dining
        </h1>
        <p className='p__opensans' style={{margin: "2rem 0"}}>
          Sit tellus lobortis sed senectus vivamus molestie. 
          Condimentum volutpat morbi facilisis quam scelerisque sapien. 
          Et, penatibus aliquam amet tellus 
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper-img'>
          <img src={welcome} alt="header_img" />
      </div>

    </div>
  )
}

export default Header;
