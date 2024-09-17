import React from 'react'
import Hero from './components/Hero';
import NowPlaying from './components/NowPlaying';
import Populars from './components/Populars';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';

export default function Home() {
  return (
    <div>
      <div className='hidden md:block'>
        <Hero/>
      </div>
      <Upcoming/>
      <NowPlaying/>
      <Populars/>
      <TopRated/>
    </div>
  );
}
