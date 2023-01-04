import { useEffect, useState } from 'react';
import { SelectedPage } from '@/global/types';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Home from '@/routes/Home';
import Benefits from '@/routes/Benefits';
import ContactUs from './routes/ContactUs';
import OurClasses from '@/routes/OurClasses';

export default function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(() => {
    const handleScrollbar = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScrollbar);

    return () => window.removeEventListener('scroll', handleScrollbar);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
