import Link from 'next/link';
import { TOPICS } from '../utils/constants';

export default function Topics() {
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
      <p>URL: codewithlove.blog/topics</p>
      <h3>Blog Topics:</h3>
      <ul>{topics}</ul>
    </div>
  );
}
