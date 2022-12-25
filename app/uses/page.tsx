import ExternalLink from '../components/ExternalLink';

export default function UsesPage() {
  return (
    <div>
      <h1>Uses</h1>
      <p>This is a list of all of the different tools and technologies that I use on a daily basis.</p>

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
        <li>Macbook Pro (2021) on macOS Ventura</li>
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

      <h3>Websites</h3>
      <ul>
        <li>
          <ExternalLink href='https://unsplash.com/'>Unsplash</ExternalLink>
        </li>
      </ul>
    </div>
  );
}
