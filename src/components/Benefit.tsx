import { motion } from 'framer-motion';
import { SelectedPage } from '@/global/types';

import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefit({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      className='mt-6 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {icon}
        </div>
      </div>

      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
