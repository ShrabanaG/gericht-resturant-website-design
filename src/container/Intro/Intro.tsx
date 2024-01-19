import { useState, useRef } from 'react';
import { meal } from '../../constants';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import './intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }

  return (
    <div className='gericht__intro'>
      <video ref={videoRef}  controls={false} muted loop>
        <source src={meal} type='video/mp4' />
      </video>
      <div className='gericht__intro-video-overlay flex__center'>
        <div className='video__overlay-circle flex__center' onClick={handleVideoClick}>
        {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro;
