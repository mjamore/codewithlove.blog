import Link from 'next/link';
import { TOPICS } from '../../utils/constants';

type BlogTopicProps = {
  params: {
    topic: string;
  };
};

export default function BlogTopic({ params }: BlogTopicProps) {
  const topics = TOPICS.map((topic) => {
    return (
      <Link href={topic.url} key={topic.directory}>
        <li>
          <h3>{topic.friendlyName}</h3>
        </li>
      </Link>
    );
  });

  return (
    <div>
      <p>URL: codewithlove.blog/topics/{`${params.topic}`}</p>
      <p>This page should:</p>
      <ul>
        <li>For the given topic, loop over each article and render a link to the article</li>
      </ul>
    </div>
  );
}
