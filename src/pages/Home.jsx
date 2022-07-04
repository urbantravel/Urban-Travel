import React, { useState } from 'react'
import HomeNav from '../Navbars/HomeNav';
import Hero from '../components/Hero'

function Home() {
    const [ darkMode, setDarkmode ] = useState(false); 
  return (
    <React.Fragment>
    <div onClick={() => setDarkmode(darkMode => !darkMode)} className={ (darkMode ? 'dark' : '') + ''}>
        <div className="bg-white dark:bg-black h-screen transition-all duration-500">
            <HomeNav />
            <Hero />
        </div>
    </div>
    </React.Fragment>
  )
}

export default Home;