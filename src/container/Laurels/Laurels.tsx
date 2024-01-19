import React from 'react';
import { awards } from '../../constants/data';
import { laurels } from '../../constants/images';
import { SubHeading } from '../../components';

import './laurels.css';
import { AwardCardProps } from '../../types';

const AwardCard:React.FC<AwardCardProps> = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="gericht__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="gericht__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg flex-space-between section__padding" id="awards">
      <div className="app__wrapper-info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="gericht__laurels_awards">
          {awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className="app__wrapper-img">
        <img src={laurels} alt="laurels_img" />
      </div>
    </div>
  )

};


export default Laurels;
