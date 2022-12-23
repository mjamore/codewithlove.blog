import Image from 'next/image';
import Link from 'next/link';
import Pill from './Pill';

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  topic: string;
  url: string;
};

export default function ArticleCard({ title, description, image, topic, url }: ArticleCardProps) {
  return (
    <Link href={url} className={'rounded-md bg-white text-black'}>
      <Image src={image} alt={'Article thumbnail image'} width={100} height={100} className={'rounded-t-md object-cover'} layout="responsive" />
      <div className={'flex flex-col p-3'}>
        <div className={'m-3 flex'}>
          <Pill text={topic} color={'green'} />
        </div>
        <h4 className={'my-3 text-2xl font-bold'}>{title}</h4>
        <p className={'max-w-prose'}>{description}</p>
      </div>
    </Link>
  );
}
