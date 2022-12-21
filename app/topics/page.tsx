import Link from 'next/link';
import { TOPICS } from '../utils/constants';
import { getTopics } from '../utils/filesystem';

export default async function TopicsPage() {
  const topics = await getTopics();

  const Topics = TOPICS.map((topic) => {
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
      <h3>Blog Topics:</h3>
      <ul>{Topics}</ul>
    </div>
  );
}
