import Forbes from '@/assets/forbes.png';
import Fortune from '@/assets/fortune.png';
import Redbull from '@/assets/redbull.png';
import HomepageText from '@/assets/homepage_text.png';
import HomepageGraphic from '@/assets/homepage_graphic.png';

import Button from '@/components/Button';

import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { flexBetween } from '@/global/styles';
import { SelectedPage } from '@/global/types';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolveText'>
                <img src={HomepageText} alt='Homepage Text' />
              </div>
            </div>

            <p className='mt-8 text-sm'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            className='mt-8 flex items-center gap-8'
            initial='hidden'
            whileInView='visible'
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button setSelectedPage={setSelectedPage}>Join Now</Button>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomepageGraphic} alt='Homepage Graphic' />
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className={`${flexBetween} w-3/5 gap-8`}>
              <img src={Redbull} alt='Redbull' />
              <img src={Forbes} alt='Forbes' />
              <img src={Fortune} alt='Fortune' />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
