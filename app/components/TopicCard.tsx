import Image from 'next/image';
import Link from 'next/link';

type TopicCardProps = {
  name: string;
  tagline: string;
  icon: string;
  url: string;
};

export default function TopicCard({ name, tagline, icon, url }: TopicCardProps) {
  return (
    <Link href={url} className={'flex border-2 border-slate-300'}>
      <Image alt={`${name} icon`} src={icon} width={100} height={100} />
      <p>{name}</p>
      <p>{tagline}</p>
    </Link>
  );
}
