import Image from 'next/image';
import Link from 'next/link';
import Pill from './Pill';

type ArticleCardProps = {
  author: string;
  authorImage: string;
  date: string;
  description: string;
  image: string;
  title: string;
  topic: string;
  url: string;
};

export default function ArticleCard({ author, authorImage, date, description, image, title, topic, url }: ArticleCardProps) {
  return (
    <Link href={url} className={'rounded-md bg-white text-black'}>
      <Image src={image} alt={'Article thumbnail image'} width={400} height={300} className={'rounded-t-md object-cover'} />
      <div className={'flex flex-col p-6'}>
        <div className={'m-3 flex'}>
          <Pill text={topic} color={'green'} />
        </div>
        <h4 className={'my-3 text-2xl font-bold'}>{title}</h4>
        <p className={'max-w-prose'}>{description}</p>
        <div className="mt-6 flex">
          <Image src={authorImage} alt={`Image of ${author} image`} width={75} height={75} className={'rounded-full'} />
          <div className="ml-2 flex flex-col justify-center">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
