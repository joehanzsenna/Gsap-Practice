import React from 'react'
import { gsap } from "gsap";

export default function Home() {

  gsap.to(".head", {x:400});
  gsap.from(".star", {x:0});
  gsap.to(".star", {x:750, stagger: 1, fill: 'yellow',  duration:3});

  return (
    <div className='w-full h-screen bg-green-600 flex flex-col text-white text-4xl'>
      <h1 className='head'>Home</h1>

      {/* Tweens and Timeline  */}

      {/* TweenLite
      TweenMax
      TimelineLite       All being replaced by Gsap object 
      TimelineMax */}

      {/* the gsap object is your access point to everything the engine does :-- Create animations, configure settings, Register plugins eases and effects, Global control over all animations   */}

      {/* The gsap object has 3 main methods for creating Tweens and optionally adding them to timelines 
      gsap.to()
      gsap.from()
      gsap.fromTo() */}

      <div className='star'>star</div>
      <div className='star'>star 2</div>
    </div>
  )
}
