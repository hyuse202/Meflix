import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsSearch, BsBell } from 'react-icons/bs';
import logo from '../assets/netflix_logo.png';
import NavBarItems from './NavBarItems';
import classNames from 'classnames';
export default function Navbar(): React.ReactElement {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className='w-full fixed z-40 bg-black'>
        <div
          className={classNames(
            'w-full h-14 fixed z-40 px-12 flex flex-row items-center transition duration-500 py-5',
            isTop ? '' : 'bg-black'
          )}
        >
          <Image src={logo} alt='logo' placeholder='blur' height={60} />
          <div className='gap-7 flex flex-row ml-8 '>
            <NavBarItems label='Home' />
            <NavBarItems label='Series' />
            <NavBarItems label='Films' />
            <NavBarItems label='My List' />
            <NavBarItems label='Popular' />
          </div>
          <div className='flex flex-row ml-auto gap-7 items-center'>
            <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
              <BsSearch />
            </div>
            <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
              <BsBell />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
