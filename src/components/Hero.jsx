import React from 'react';
import WHero from '../img/woman_hero.png';
import BGHero from '../img/bg_hero.svg';
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div>
       <section className=' h-[800px] py-20 bg-no-repeat '
          // style={{ backgroundImage: `url(${BackgroundImage})` }}
          style={{
            backgroundImage: `url(${BGHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='container mx-auto flex justify-around h-full'>
            {/* text */}
            <div className='ml-4 flex flex-col justify-center'>
              {/* title */}
              <div className='flex items-center font-semibold '>
                <div className=' w-10 h-[2px] bg-red-500 mr-3 uppercase'> </div>
                New Trend

              </div>

              <h1 className='text-[60px] leading-[1.1] font-light mb-4' >AUTUMN SALE STYLIST <br />
                <span className='font-medium'>WOMEN'S</span>
              </h1>
              <Link to={`/discover`}
                className='font-medium cursor-pointer uppercase self-start  text-md  pt-3 border-b border-gray-800'>
                Discover More
              </Link>
            </div>

            <div className='hidden lg:block'>
              <img src={WHero} alt='' />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero
