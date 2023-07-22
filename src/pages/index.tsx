import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';

import netflix_bg from '../assets/netflix_bg.jpg';
import netflix_nav from '../assets/netflix_logo.png';
export default function Home(): React.ReactElement {
  const router: NextRouter = useRouter();
  const onSignIn = () => {
    router.push('/watch');
  };

  return (
    <>
      <main>
        <div className='z-0 object-cover h-full w-full'>
          <Image
            src={netflix_bg}
            alt='background image'
            placeholder='blur'
            fill={true}
            objectFit='cover'
          />
        </div>
        <div className='h-full w-full bg-black lg:bg-opacity-60 fixed'></div>
        <nav className='fixed px-12 py-5'>
          <Image src={netflix_nav} alt='logo' placeholder='blur' height={60} />
        </nav>
        <div className='flex justify-center'>
          <div className='fixed z-100 mt-48 h-80'>
            <h1 className='text-white items-center font-bold text-4xl'>
              Unlimited movies, TV shows, and more
            </h1>
            <div className='text-white text-xl text-center mt-2'>
              Watch anywhere. Cancel anytime.
            </div>
            <div
              onClick={onSignIn}
              className='text-center bg-red-600 rounded-md p-3 text-white text-xl mt-10 font-bold w-40 m-auto hover:bg-red-700 cursor-pointer hover:scale-105'
            >
              Get started{' '}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
