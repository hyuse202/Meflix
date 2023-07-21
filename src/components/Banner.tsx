import React from 'react';

import useBanner from '../hooks/useBanner.';
const Banner: React.FC = () => {
   return (
      <>
         {/* <video src={data?.videoUrl}></video> */}
         <video
            className='
            w-full 
            h-[40.25vw] 
            object-cover 
            brightness-[60%] 
            transition 
            duration-500 '
            autoPlay
            muted
            loop
            src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
         ></video>
      </>
   );
};
export default Banner;
