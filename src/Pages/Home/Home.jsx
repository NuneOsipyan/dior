import React from 'react'
import './Home.css'
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
const Home = () => {
  return (
    <div className='home_all'>
      <img src={img3} className='home_img_1' />
      <img src={img1} className='home_img' />
      <img src={img2} className='home_img' />
      <br />
      <img src={img4} className='home_img' />
    </div>
  )
}

export default Home