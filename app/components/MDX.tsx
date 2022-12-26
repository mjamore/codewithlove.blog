'use client';
import { MDXRemote } from 'next-mdx-remote';
import ExternalLink from './ExternalLink';
import Tip from './Tip';

const components = {
  ExternalLink: (props: any) => <ExternalLink {...props} />,
  Tip: (props: any) => <Tip {...props} />,
  h3: (props: any) => <h3 className={'mt-28'} {...props} />,
  h5: (props: any) => <h5 className={'mt-6'} {...props} />,
  li: (props: any) => <li className={'ml-12 list-disc'} {...props} />,
};

export default function MDX(source: any) {
  return (
    <>
      <MDXRemote {...source} components={components} />
    </>
  );
}
