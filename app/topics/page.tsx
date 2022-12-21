import TopicList from '../components/TopicList';
import { getTopics } from '../utils/filesystem';

// render codewithlove.blog/topics
export default async function TopicsPage() {
  // get a list of all topics inside of /data/blog
  const topics = await getTopics();

  return (
    <div>
      <h3>Blog Topics:</h3>
      <TopicList topics={topics} />
    </div>
  );
}
