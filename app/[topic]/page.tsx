interface BlogTopicsProps {
  params: {
    topic: string;
  };
}

export default function BlogTopics({ params }: BlogTopicsProps) {
  console.log(params.topic);
  return (
    <div>
      <div>Blog Topics Page: {`${params.topic}`}</div>
      <p>
        I try my best to document things I learn as I learn them. This has a few
        great benefits:
      </p>
      <ul>
        <li>
          By writing down what I&apos;m learning, I&apos;m more likely to
          remember it in the future.
        </li>
        <li>
          When I need to reimplement the same idea/concept in the future, I have
          notes about what is most applicable to me.
        </li>
        <li>
          It provides another resource for others in the community who are
          learning about the same topic.
        </li>
        <li>
          I get to actively practice the concepts I&apos;m learning, rather than
          just passively taking in the information.
        </li>
      </ul>
      <p>
        In order to try to provide some amount of organization to my notes,
        I&apos;ve done my best to organize them by topic.
      </p>
      <h2>Topics</h2>
      <ul>
        <li>CSS</li>
        <li>Next.js 13</li>
      </ul>
    </div>
  );
}
