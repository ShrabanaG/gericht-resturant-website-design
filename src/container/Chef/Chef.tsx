import React from 'react';
import { SubHeading } from '../../components';
import { chef, quote, sign } from '../../constants/images';

import './chef.css';

const Chef = () => {
  return (
    <div className='app__bg flex-space-between section__padding'>
      <div className="app__wrapper-img">
          <img src={chef} alt="chef_image" />
      </div>
    <div className="app__wrapper-info">
      <SubHeading title="Chef's word" />
      <h1 className="headertext__cormorant">What we believe in</h1>

      <div className="gericht__chef-content">
        <div className="gericht__chef-content_quote">
          <img src={quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="gericht__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={sign} alt="sign_image" />
      </div>
    </div>
      
    </div>
  )

};

export default Chef;
