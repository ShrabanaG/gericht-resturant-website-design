import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { menu } from '../../constants/images';
import { wines, cocktails } from '../../constants/data';
// import { data } from '../../constants';

import './specialMenu.css';
import { MenuItemProps } from '../../types';

const SpecialMenu = () => {
  // const {wines, cocktails} = data;
  return (
    <div className='gericht__menu-container flex__center section__padding'>
      <div className='gericht__menu-header'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headertext__cormorant'>
        Today’s Special
        </h1>
      </div>
      <div className='gericht__menu-items_container flex-space-between'>
          <div className='gericht__menuItems_wines-container'>
            <p className="gericht__menuItems-menu_heading">Wine & Beer</p>
            <div className="gericht__menuItems_menu_items">
              {wines.map((wine: MenuItemProps, index: number) => (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))}
            </div>
          </div>
          <div className='gericht__menuItems_image'>
              <img src={menu} alt='wine menu' />
          </div>
          <div className='gericht__menuItems_cocktails-container'>
            <p className="gericht__menuItems-menu_heading">Cocktails</p>
            <div className="gericht__menuItems_menu_items">
              {cocktails.map((cocktail: MenuItemProps, index: number) => (
                <MenuItem 
                    key={cocktail.title + index} 
                    title={cocktail.title} 
                    price={cocktail.price} 
                    tags={cocktail.tags}
               />
              ))}
            </div>
          </div>
          
      </div>
      <div style={{ marginTop: 15 }}>
              <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  )
  
};

export default SpecialMenu;
