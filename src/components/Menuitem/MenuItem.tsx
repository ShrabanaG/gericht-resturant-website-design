import React from 'react';
import { MenuItemProps } from '../../types';

import './menuItem.css';

const MenuItem:React.FC<MenuItemProps> = ({title,price,tags}) => {
  return (
    <div className="gericht__menuitem">
    <div className="gericht__menuitem-head">
      <div className="gericht__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="gericht__menuitem-dash" />
      <div className="gericht__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="gericht__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
  )

}

export default MenuItem;
