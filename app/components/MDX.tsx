'use client';
import { MDXRemote } from 'next-mdx-remote';
import ExternalLink from './ExternalLink';

const components = {
  ExternalLink: (props: any) => <ExternalLink {...props} />,
  h3: (props: any) => <h3 className={'mt-20'} {...props} />,
  h5: (props: any) => <h5 className={'mt-6'} {...props} />,
  p: (props: any) => <p className={'my-6'} {...props} />,
  li: (props: any) => <li className={'ml-12 list-disc'} {...props} />
};

export default function MDX(source: any) {
  return (
    <div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </div>
  );
}
