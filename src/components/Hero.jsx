import React from 'react';
import star from './assets/Star 2.png';
import clsx from './assets/Vector (2).png';
import globe from './assets/cuate.png';

function Hero() {
  return (
    <div className='flex'>
    {/* left */}
        <div className='pr-5'>
            <div className="font-[700] text-[45px] tracking-wider text-[#040107] ml-32 pt-10 dark:text-white">
                <h1>It's a big world<br /> out there, </h1>
                <div className="flex items-center">
                    <h1>Go Explore</h1>
                    <img className="pt-2" src={star} alt="" />
                </div>
            </div>
            <div className='flex pt-7'>
                {/*  */}
                <div className="flex ml-32 pr-9">
                    <div>
                        <img src={clsx} alt="" />
                    </div>
                    <div>
                        <img src={clsx} alt="" />
                    </div>
                </div>
                {/*  */}
                <div >
                    <h1 className="font-['Montserrat'] italic text-gray-400 font-[500] text-[16px]">Man cannot discover new oceans unless he has the<br /> courage to loose sight of the shore</h1>
                    <h1 className="font-['Montserrat'] font-[700] text-[20px] dark:text-white">Andre Gide</h1>
                </div>
            </div>
            <div className='w-auto h-auto bg-[#060309] dark:bg-white rounded-lg ml-32 mt-6 px-2 py-3'>
                <div className='flex space-x-5 justify-center items-center pt-3'>
                {/*  */}
                    <div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 tracking-wide font-[Inter] text-white dark:text-black font-[700] text-[16px]">Return</label>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" class="ml-2 tracking-wide font-[Inter] text-white dark:text-black font-[700] text-[16px]">One way</label>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded-full border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 tracking-wide font-[Inter] text-white dark:text-black font-[700] text-[16px]">Multi-city</label>
                        </div>
                    </div>
                </div>
                <div className='text-white flex space-x-2'>
                    <div>
                        <label className="font-[Montserrat] font-[700] text-[12px]" htmlFor="">From</label>
                        <input className='rounded-lg bg-gray-50 tex-black border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500' 
                        required 
                        type="text"
                        placeholder='Select Starting point'
                        />
                    </div>
                    {/*  */}
                    <div>
                        <label className="font-[Montserrat] font-[700] text-[12px]" htmlFor="">To</label>
                        <input className='rounded-lg bg-gray-50 tex-black border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500' 
                        required 
                        type="text"
                        placeholder='Country, city or Airport'
                        />
                    </div>
                    {/*  */}
                    <div>
                        <label className="font-[Montserrat] font-[700] text-[12px]" htmlFor="">Depart</label>
                        <input className='rounded-lg bg-gray-50 tex-black border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500' 
                        required 
                        type="text"
                        placeholder='dd/mm/yy'
                        />
                    </div>
                    {/*  */}
                    <div>
                        <label className="font-[Montserrat] font-[700] text-[12px]" htmlFor="">Return</label>
                        <input className='rounded-lg bg-gray-50 tex-black border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-500' 
                        required 
                        type="text"
                        placeholder='dd/mm/yy'
                        />
                    </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div>
                        <label for="cabin" class="block mb-2 text-white font-[Montserrat] font-[700] text-[12px]">Cabin class & travellers</label>
                        <select id="cabin" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a cabin</option>
                        <option value="US">First Class</option>
                        <option value="CA">Business Class</option>
                        <option value="FR">Economy Class</option>
                        </select>
                    </div>
                    {/*  */}
                    <div className='text-white mt-5'>
                        <button className="bg-[#00A4FD] w-[134px] h-[44px] rounded-[15px] border-[0.5px] border-[#000000] font-[Inter] font-[600] text-[16px] tracking-wide">Search Flights</button>
                    </div>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='mt-10'>
            <img className='dark:text-black dark:bg-black' src={globe} alt="" />
        </div>
    </div>
  )
}

export default Hero
