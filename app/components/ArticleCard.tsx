import Image from 'next/image';
import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  topic: string;
  url: string;
};

export default function ArticleCard({ title, description, image, topic, url }: ArticleCardProps) {
  return (
    <Link href={url} className={'bg-cyan-300 text-black rounded-md'}>
      <Image src={image} alt={'Article thumbnail image'} width={100} height={100} className={'object-cover rounded-t-md'} layout="responsive" />
      <div className={'flex flex-col p-3'}>
        <div className={'flex m-3'}>
          <span className={'bg-green-600 py-2 px-4 rounded-full'}>{topic}</span>
        </div>
        <h4 className={'text-2xl font-bold my-3'}>{title}</h4>
        <p className={'max-w-prose'}>{description}</p>
      </div>
    </Link>
  );
}
