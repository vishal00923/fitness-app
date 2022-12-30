import { motion } from 'framer-motion';
import { flexBetween } from '@/global/styles';
import { SelectedPage, BenefitType } from '@/global/types';
import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

import Button from '@/components/Button';
import Benefit from '@/components/Benefit';
import Heading from '@/components/Heading';

import BenefitsPage from '@/assets/benefits_page.png';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefits({ setSelectedPage }: Props) {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>MORE THAN JUST A GYM.</Heading>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className={`md:${flexBetween} mt-5 gap-8`}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map(
            ({ icon, title, description }: BenefitType, index: number) => (
              <Benefit
                key={index}
                icon={icon}
                title={title}
                description={description}
                setSelectedPage={setSelectedPage}
              />
            )
          )}
        </motion.div>

        <div className={`md:${flexBetween} mt-16 gap-20 md:mt-28`}>
          <img className='mx-auto' src={BenefitsPage} alt='Benefits Page' />

          <div>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:-z-10 before:content-waves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Heading>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className='text-primary-500'> FIT</span>
                  </Heading>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                vero ducimus earum explicabo. Tempore voluptate, aliquid
                officiis minima nihil ut sit cum aut rem ab omnis in, a magnam
                soluta eligendi perspiciatis quos voluptatum quidem.
              </p>
              <p className='mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, deleniti sapiente fugiat qui nulla numquam quia in,
                provident architecto neque velit rerum minus, fugit cumque
                soluta itaque eos similique quidem.
              </p>
            </motion.div>

            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:-z-10 before:content-sparkles'>
                <Button setSelectedPage={setSelectedPage}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
