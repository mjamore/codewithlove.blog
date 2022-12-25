import Link from "next/link";
import Image from "next/image";

export default function ArticleListItem({ article }: any) {
  return (
    <Link className={'border rounded-lg'} href={article.url}>
      <Image src={article.image} alt={article.title} width={133} height={100} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span>{article.date}</span>
      <span>{article.readingTime}</span>
      <span>{article.author}</span>
      <span>{article.authorImage}</span>
    </Link>
  );
}