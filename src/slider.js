import React from 'react';
import image1 from './assets/alex-munsell-Yr4n8O_3UPc-unsplash.jpg';
import image2 from './assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg';
import image3 from './assets/mgg-vitchakorn-Ul4sgxQMmHU-unsplash.jpg';
import image4 from './assets/robin-stickel-tzl1UCXg5Es-unsplash.jpg';

const Slider = () => {

  return (
    <div className='home-container'>
      <h2>Store all your recipes in one place!</h2>
      <div className='slider-container'>
        <div className='slide-container'>
            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
        </div>
        <div className='slider'>

          <div className='slides'>
            <img id="slide-1" src={image1} alt='food'/>
          </div>
          <div className='slides'>
            <img id="slide-2" src={image2} alt='food'/>
          </div>
          <div className='slides'>
            <img id="slide-3" src={image3} alt='food'/>
          </div>
          <div className='slides'>
            <img id="slide-4" src={image4} alt='food'/>
          </div>
        </div>
        </div>
      <h2>Add, edit or delete your recipes!</h2>
    </div>
  )
}

export default Slider;