import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { SelectedPage, ClassType } from '@/global/types';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import Image3 from '@/assets/image3.png';
import Image4 from '@/assets/image4.png';
import Image5 from '@/assets/image5.png';
import Image6 from '@/assets/image6.png';
import Heading from '@/components/Heading';

import Class from '@/components/Class';

const ourClasses: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    image: Image1,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ratione sunt non ullam rerum aliquam magnam sapiente labore facere eos!',
  },
  {
    name: 'Yoga Training Classes',
    image: Image2,
  },
  {
    name: 'Ab Core Classes',
    image: Image3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nesciunt ut totam sed nihil aliquam quasi facere, quaerat consequuntur amet.',
  },
  {
    name: 'Adventure Classes',
    image: Image4,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui in eaque cum exercitationem harum itaque rem rerum, dolorem error sapiente.',
  },
  {
    name: 'Fitness Classes',
    image: Image5,
  },
  {
    name: 'Muscle Building Classes',
    image: Image6,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque mollitia alias animi consequuntur quas repudiandae fugit cupiditate cum laudantium ex!',
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurClasses({ setSelectedPage }: Props) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const classesRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    setIsScrolled(true);

    if (classesRef.current) {
      const { scrollLeft, clientWidth } = classesRef.current;
      const scrollDirection =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      classesRef.current.scrollTo({
        left: scrollDirection,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:w-3/5'>
            <Heading>OUR CLASSES</Heading>
          </div>
        </motion.div>

        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='py-5 md:w-3/5'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              reprehenderit at labore aliquam. Sit consectetur numquam animi?
              Nesciunt alias excepturi aspernatur pariatur vel quidem neque
              blanditiis nemo voluptatum!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className='relative mt-10'>
        <ArrowLeftCircleIcon
          onClick={() => handleScroll('left')}
          className={`${
            !isScrolled && 'hidden'
          } absolute left-4 top-0 bottom-0 z-50 my-auto h-12 w-12 cursor-pointer`}
          color='#dfcccc'
        />
        <div
          ref={classesRef}
          className='h-[338px] w-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-hide'
        >
          {ourClasses.map(
            ({ name, image, description }: ClassType, index: number) => (
              <Class
                key={index}
                name={name}
                image={image}
                description={description}
              />
            )
          )}
        </div>
        <ArrowRightCircleIcon
          onClick={() => handleScroll('right')}
          className={`absolute right-4 top-0 bottom-0 z-50 my-auto h-12 w-12 cursor-pointer`}
          color='#dfcccc'
        />
      </div>
    </section>
  );
}
