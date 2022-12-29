import { SelectedPage } from '@/global/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const transformPage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <div>
      <AnchorLink
        onClick={() => setSelectedPage(transformPage)}
        className={`${
          selectedPage === transformPage ? 'text-primary-500' : ''
        } transition duration-500 hover:text-primary-300`}
        href={`#${transformPage}`}
      >
        {page}
      </AnchorLink>
    </div>
  );
}
