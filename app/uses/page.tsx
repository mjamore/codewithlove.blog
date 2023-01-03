import ExternalLink from '../../components/ExternalLink';

export default function UsesPage() {
  return (
    <div className={'prose-content'}>
      <h1>Uses</h1>
      <p>
        A simple list of all of the different tools and technologies that I use on a daily basis, as seen on <ExternalLink href='https://uses.tech'>uses.tech</ExternalLink>.
      </p>

      <h3>Coding</h3>
      <ul>
        <li>
          Editor: <ExternalLink href='https://code.visualstudio.com/download'>VSCode</ExternalLink>
        </li>
        <li>Theme: Dark+</li>
        <li>Extensions: </li>
        <li>
          Terminal: Bash (<ExternalLink href='https://github.com/mjamore/laptop-setup'>dotfiles</ExternalLink>)
        </li>
      </ul>

      <h3>Hardware</h3>
      <ul>
        <li>MacBook Pro (2021) on macOS Ventura</li>
        <li>iPhone 11</li>
      </ul>

      <h3>NPM Libraries</h3>
      <ul>
        <li>
          <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink>
        </li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>
          Browser: <ExternalLink href='https://www.google.com/chrome/'>Chrome</ExternalLink>
        </li>
        <li>
          Chat: <ExternalLink href='https://slack.com/'>Slack</ExternalLink>
        </li>
        <li>
          Vector Graphics: <ExternalLink href='https://vectornator.io/'>Vectornator</ExternalLink>
        </li>
        <li>
          Notes: <ExternalLink href='https://keep.google.com/'>Google Keep</ExternalLink>
        </li>
      </ul>

      <h3>AI</h3>
      <h5>Image Generation</h5>
      <ul>
        <li>
          <ExternalLink href='https://lexica.art/aperture'>Lexica</ExternalLink>
        </li>
      </ul>

      <h5>APIs</h5>
      <ul>
        <li>
          <ExternalLink href='https://beta.openai.com/docs/introduction'>OpenAI</ExternalLink>
        </li>
      </ul>

      <h3>Websites</h3>
      <ul>
        <li>
          Free images: <ExternalLink href='https://unsplash.com/'>Unsplash</ExternalLink>
        </li>
        <li>
          Easily find terminal commands: <ExternalLink href='https://www.commands.dev/'>commands.dev</ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://transform.tools/css-to-tailwind/'>Convert CSS to Tailwind classes</ExternalLink>
        </li>
        <li>
          Create Code Snippets for Twitter <ExternalLink href='https://carbon.now.sh/'>Carbon</ExternalLink>
        </li>
        <li>
          Find Available <ExternalLink href='https://oneword.domains/'>One Word Domains</ExternalLink>
        </li>
      </ul>
    </div>
  );
}
