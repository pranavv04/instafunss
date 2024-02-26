import React from 'react'
import ReactPlayer from 'react-player';
import catto from '../assets/cattos.mp4'
function Video() {
  return (

    <div className='bg-black text-white flex flex-col justify-center  text-center'>
      <h1 className='text-xl mt-4  ' >DUMBASS</h1>
      <div className='w-full flex mt-12 rounded-xl h-full  '>
        
        <ReactPlayer
          className='video'
          url={catto}
          playing={true}
          loop={true}
          controls={false}
        />

      </div>





    </div>

  );
}

export default Video;
