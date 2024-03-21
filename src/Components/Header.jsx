
import { useState } from 'react'

function Header() {
  const [navLinks,setNavLinks]=  useState([
        {
            id: 1,
            title:"Home",
            link:"/home",
        },
        {
            id: 2,
            title:"About",
            link:"/about",
        },
        {
            id: 3,
            title:"Skills",
            link:"/skills",
        },
        {
            id: 4,
            title:"Portfolio",
            link:"portfolio",
        },
        {
            id: 5,
            title:"Contact",
            link:"/contact",
        }
    ]);
    
  return (
  <>
  
  <div className="main h-20 border flex justify-between items-center px-16 bg-gray-100 ">
    <div className="logo text-2xl bold">
    <h1>Chiranjib Hota</h1>
    </div>
    <div className="menu space-x-4 ">
      {navLinks.map((menu)=>(
        <a key={menu.id}href={menu.link} className='hover:text-orange-500'>{menu.title}</a>

      ))}  

    </div>
    <div className="btn px-3 py-2 bg-green-300 hover:bg-orange-500 shadow-xlg rounded-md">
        <button>Hire me</button>

    </div>



  </div>
  </>
  )
}

export default Header
