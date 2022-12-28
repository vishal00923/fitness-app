import Logo from '@/assets/logo.png';
import Link from '@/components/Link';
import Button from '@/components/Button';

import { useState } from 'react';
import { flexBetween } from '@/global/styles';
import { SelectedPage } from '@/global/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <nav>
      <div
        className={`${
          !isTopOfPage && 'bg-primary-100 drop-shadow'
        } ${flexBetween} fixed z-10  w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='Logo' />

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Benefits'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Our Classes'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Contact Us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <Button setSelectedPage={setSelectedPage}>
                    Become a Member
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() =>
                  setIsMenuToggled((isMenuToggled) => !isMenuToggled)
                }
                className='rounded-full bg-secondary-500 p-2'
              >
                <Bars3Icon className='h-6 w-6' color='white' />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className='fixed right-0 bottom-0 z-20 h-full w-[300px]
         bg-primary-100 drop-shadow-xl'
        >
          <div className='flex justify-end p-12'>
            <button
              onClick={() =>
                setIsMenuToggled((isMenuToggled) => !isMenuToggled)
              }
            >
              <XMarkIcon className='h-6 w-6' color='gray' />
            </button>
          </div>

          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
