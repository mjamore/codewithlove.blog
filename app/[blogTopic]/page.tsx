import { BLOG_TOPICS } from '../utils/constants';

interface BlogTopicsProps {
  params: {
    blogTopic: string;
  };
}

export default function BlogTopics({ params }: BlogTopicsProps) {
  const topics = BLOG_TOPICS.map((topic) => {
    return (
      <li key={topic.directory}>
        <h3>{topic.friendlyName}</h3>
      </li>
    );
  });

  return (
    <div>
      <div>Blog Topics Page: {`${params.blogTopic}`}</div>
      <p>I try my best to document things I learn as I learn them. This has a few great benefits:</p>
      <ul>
        <li>By writing down what I&apos;m learning, I&apos;m more likely to remember it in the future.</li>
        <li>When I need to reimplement the same idea/concept in the future, I have notes about what is most applicable to me.</li>
        <li>It provides another resource for others in the community who are learning about the same topic.</li>
        <li>I get to actively practice the concepts I&apos;m learning, rather than just passively taking in the information.</li>
      </ul>
      <p>In order to try to provide some amount of organization to my notes, I&apos;ve done my best to organize them by topic.</p>
      <h2>Topics</h2>
      <ul>{topics}</ul>
    </div>
  );
}
