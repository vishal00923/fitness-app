import Logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='mx-auto w-5/6 justify-between gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt='Logo' />
          <p className='my-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            perferendis eius ducimus cum enim quidem sed nam, distinctio
            temporibus perspiciatis accusamus harum ex, autem animi. Alias?
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet.</p>
          <p className='my-5'>Lorem dolor ipsum sit amet.</p>
          <p>Lorem sit amet ipsum dolor.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet.</p>
          <p>(334)345-9876</p>
        </div>
      </div>
    </footer>
  );
}
