import { ReactNode } from 'react';
import { SelectedPage } from '@/global/types';

import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Button({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}
