import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { inputStyles } from '@/global/styles';
import { SelectedPage } from '@/global/types';

import Contact from '../assets/contact_us.png';

import Heading from '@/components/Heading';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) e.preventDefault();
  };

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </Heading>
          <p className='my-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            maiores suscipit iusto explicabo iure recusandae, laboriosam
            ducimus? Aliquam laborum adipisci iusto ab eaque quo, quisquam
            alias, quia, assumenda pariatur quibusdam!
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className='mt-10 justify-between gap-20 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              action='https://formsubmit.co/13d6d648ca92818a755f8fbbce95c609'
              target='_blank'
              method='POST'
              onSubmit={handleSubmit}
            >
              <input
                className={inputStyles}
                type='text'
                placeholder='Name'
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 character'}
                </p>
              )}

              <input
                className={inputStyles}
                type='email'
                placeholder='Email'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' && 'Invalid email address'}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={10}
                cols={50}
                placeholder='Message'
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' &&
                    'This field is required'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 2000 character'}
                </p>
              )}

              <button
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                type='submit'
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:-z-10 md:before:content-evolveText'>
              <img className='w-full' src={Contact} alt='Contact Us' />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
