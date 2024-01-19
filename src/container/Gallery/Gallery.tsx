import { useRef } from 'react';
import { SubHeading } from '../../components';
import { gallery01, gallery02, gallery03, gallery04 } from '../../constants/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './gallery.css';

const images = [gallery01,gallery02,gallery03, gallery04];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction:string) => {
    const { current } = scrollRef;
    if (current !== null && current !== undefined) {
      const scrollValue = direction === 'left' ? current.scrollLeft - 300 : current.scrollLeft + 300;
      current.scrollLeft = scrollValue;
    }


  }
  return (
    <div className='gericht__gallery flex__center'>
      <div className='gericht__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button" style={{marginTop: 16}}>View More</button>
      </div>
      <div className='gericht__gallery-images'>
        <div className='gericht__gallery-images-container' ref={scrollRef}>
          {images.map((image, index) => {
            return (
              <div className="gericht__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            )
          })}
        </div>
        <div className="gericht__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => handleScroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => handleScroll('right')} />
        </div>
      </div>
    </div>
  )

}

export default Gallery;
