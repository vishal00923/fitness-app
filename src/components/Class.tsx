import { overlayStyles } from '@/global/styles';

type Props = {
  name: string;
  image: string;
  description?: string;
};

export default function Class({ name, image, description }: Props) {
  return (
    <div className='relative mx-4 inline-block h-[338px] w-[450px]'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img className='rounded-md' src={image} alt={`${image}`} />
    </div>
  );
}
