import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

export default function Footer() {
  return (
    <footer className='w-full bg-content-bg2 py-12 px-8'>
      <div className='mx-auto flex max-w-page justify-around'>
        <div className='flex flex-col space-y-4'>
          <InternalLink href='/'>Home</InternalLink>
          <InternalLink href='/articles'>Articles</InternalLink>
          <InternalLink href='/about'>About</InternalLink>
          <InternalLink href='/uses'>Uses</InternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://twitter.com/amore_codes'>Twitter</ExternalLink>
          <ExternalLink href='https://github.com/mjamore'>GitHub</ExternalLink>
          <ExternalLink href='https://codepen.io/mjamore'>Codepen</ExternalLink>
          <ExternalLink href='https://read.cv/mjamore'>Resume</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
