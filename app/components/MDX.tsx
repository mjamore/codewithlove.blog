'use client';

import { MDXRemote } from 'next-mdx-remote';

const components = {};

export default function MDX(source: any) {
  return (
    <div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </div>
  );
}
