import Image from 'next/image';
import Link from 'next/link';
import { ArticleMetaData } from '../utils/types';

export default function ArticleCard({ author, authorImage, date, description, image, readingTime, title, url }: ArticleMetaData) {
  return (
    <Link href={url} className={'relative rounded-articleCard bg-white text-black duration-300 hover:scale-101'}>
      <Image src={image} alt={'Article thumbnail image'} width={640} height={480} className={'rounded-t-articleCard'} />
      <div className={'flex flex-col p-6'}>
        <h4 className={'mb-3'}>{title}</h4>
        <p className={'max-w-prose'}>{description}</p>
        <div className='mt-6 flex'>
          <Image src={authorImage} alt={`Image of ${author} image`} width={75} height={75} className={'rounded-full shadow-lg'} />
          <div className='ml-2 flex flex-col justify-center'>
            <span className={'font-semibold'}>{author}</span>
            <span className={'text-xs'}>{date}</span>
            <span className={'text-xs'}>{readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
