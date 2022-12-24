'use client';
import { MDXRemote } from 'next-mdx-remote';

const components = {
  // h1: (props: any) => <h1 className="text-3xl font-bold" {...props} />
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
