import { Topic } from '../utils/types';
import TopicCard from './TopicCard';

type TopicListProps = {
  topics: Topic[];
};

export default function TopicList({ topics }: TopicListProps) {
  const Topics = topics.map((topic) => {
    return (
      <li key={topic.directory}>
        <TopicCard name={topic.friendlyName} tagline={topic.tagline} icon={topic.icon} url={topic.url} />
      </li>
    );
  });

  return <ul className={'flex border-2 border-slate-300'}>{Topics}</ul>;
}
