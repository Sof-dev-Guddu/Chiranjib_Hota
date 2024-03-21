import React from 'react'
import image from '../assets/ABout.png'

function About() {
  return (
    <div className='main mt-4 bg-gray-100'>
        <h1 className=' text-center text-5xl underline font-bold'>About Me</h1>
       <div className='main flex '>
            <div className='sub1'>
                 <img src={image} alt="" />
            </div>
          
         <div className='sub2 p-20 mb-3'>
              <h2 className='text-4xl font-bold mb-4'>Frontend Devloper & Wordpress Devloper</h2>
              <p className='mb-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae eligendi saepe ipsum ab deserunt at, sit error mollitia eaque.</p>
             <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit ipsum molestias repellat, modi corporis provident alias in autem! Atque facilis consequuntur deserunt amet eos nesciunt expedita voluptatem sint, optio repellendus maxime. Error, aperiam neque?</p>
             <button className='bg-orange-500 rounded-lg shadow px-3 py-2'>ReadMore</button>
         </div>
        </div>
    </div>
  )
}

export default About