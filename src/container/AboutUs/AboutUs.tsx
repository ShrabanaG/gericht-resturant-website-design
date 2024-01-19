import React from 'react';
import { G } from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='gericht__aboutUs-container app__bg flex__center section__padding'>
      <div className='gericht__aboutUs-overlay flex__center'>
        <img src={G} alt='g_overlay' />
      </div>
      
    </div>
  )
}

export default AboutUs;
