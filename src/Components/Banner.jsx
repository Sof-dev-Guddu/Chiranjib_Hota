import React from 'react'
import BannerImage from '../assets/Bimage.png' 
import BannerBack from "../assets/banner_wallpaper-c69a5953.svg"
function Banner() {
  return (
   <>
   <div style={
      {  backgroundImage:`url(${BannerBack})`}
    }className="main flex border items-center">
    <div  className="sub1 text-white w-full flex justify-center">
           <div className="sub-sub1 w-2/3">
           <h3 className='text-3xl font-semibold'>Hi, I am</h3>
           <h1 className='mt-3 text-5xl font-bold'>Chiranjib Hota</h1>
           <h2 className='mt-3 text-3xl font-bold'>I am a Frontend Devloper</h2>
           <p className='mt-3 mb-3'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ullam odio voluptates at enim ad atque unde delectus et autem!
           </p>
           <div className="icons mb-5 space-x-5 text-black text-3xl">
           <i class="fa-brands fa-facebook hover:bg-orange-500 "></i>
           <i class="fa-brands fa-instagram hover:bg-orange-500 "></i>
           <i class="fa-brands fa-github hover:bg-orange-500 "></i>
           <i class="fa-brands fa-linkedin hover:bg-orange-500 "></i>
           
           </div>
           <a className="px-3 py-2 bg-orange-500 rounded-lg shadow-lg"href="">Contact me</a>
           </div>
    </div>
    <div className="sub2  w-full flex justify-center">
         <img src={BannerImage} alt="" className='h-auto max-w-sm rounded-lg' />
    </div>
   </div>
   </>
  )
}

export default Banner