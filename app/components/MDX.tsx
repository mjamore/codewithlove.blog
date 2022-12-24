'use client';
import { MDXRemote } from 'next-mdx-remote';
import ExternalLink from './ExternalLink';

const components = {
  ExternalLink: (props: any) => <ExternalLink {...props} />
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
