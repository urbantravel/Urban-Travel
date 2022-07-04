import React from 'react';
import { Link } from 'react-router-dom';
//import Offcanvas from '../components/Offcanvas';

function HomeNav() {
  return (
    <React.Fragment>
    {/* main div */}
        <div className='h-[80px] flex justify-between items-center'>
          {/* left offcanvas */}
          {/* <div className='text-3xl pl-[29.25px] dark:text-white'>
            <ion-icon name="menu-outline"></ion-icon>
            <Offcanvas />
          </div> */}
          {/* logo */}
          <div className='pl-32'>
            <h1 className='font-[800] text-[32px]  dark:text-white'>UrbanTravel<span className='text-3xl text-[#BB6501] grow'>.</span></h1>
          </div>
          {/* navs */}
          <div className="">
            <ul className="flex space-x-7">
              <Link to='/'>
                <li className='font-[700] text-[16px] text-[#00A4FD] dark:text-white'>Home</li>
              </Link>
              <Link to="/about">
                <li className='font-[700] text-[16px] dark:text-white'>About</li>
              </Link>
              <Link to="/package">
                <li className='font-[700] text-[16px] dark:text-white'>Package</li>
              </Link>
              <Link to="/contact">
                <li className='font-[700] text-[16px] dark:text-white'>Contact Us</li>
              </Link>
            </ul>
          </div>
          {/* login */}
          <div className='space-x-4 pr-[48px]'>
            {/* <button className="border border-gray-300 px-4 py-2 rounded-lg font-[700] text-[16px] tracking-[0.01em] text-[#040107] h-[44px} dark:text-white"><ion-icon name="moon-sharp"></ion-icon></button> */}
            <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 border-gray-900 transition-all duration-500">
    <svg id="theme-toggle-dark-icon" class="hidden w-50 h-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-50 h-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    <ion-icon name="moon-sharp"></ion-icon>
</button>
            <Link to="/login">
              <button className="border border-gray-300 px-4 py-2 rounded-lg font-[700] text-[16px] tracking-[0.01em] text-[#040107] h-[44px] dark:text-white">Login</button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2 rounded-lg bg-[#00A4FD] text-white font-[700] tracking-[0.01em] w-[99px] h-[44px] dark:text-white">Register</button>
            </Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default HomeNav;
