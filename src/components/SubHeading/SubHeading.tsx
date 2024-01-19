import React from 'react';
import { spoon } from '../../constants/images';
import { SubHeadingProps } from '../../types';

import "./subheading.css";

const SubHeading:React.FC<SubHeadingProps> = ({title}) => {
  return (
    <div className='gericht__subheading-container'>
      <p className='gericht__subheading-title p__cormorant'>{title}</p>
      <img src={spoon} alt='subheading_img' className='spoon__img'/>
    </div>
  )
}

export default SubHeading;
