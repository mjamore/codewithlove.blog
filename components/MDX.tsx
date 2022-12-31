'use client';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import ExternalLink from './ExternalLink';
import Tip from './Tip';
import CodeWithLove from './CodeWithLove';

const components = {
  CodeWithLove: (props: any) => <CodeWithLove {...props} />,
  ExternalLink: (props: any) => <ExternalLink {...props} />,
  Image: (props: any) => <Image {...props} alt={props.alt} />,
  Tip: (props: any) => <Tip {...props} />,
  h2: (props: any) => <h2 className={'mb-0'} {...props} />,
  h3: (props: any) => <h3 className={'mt-28'} {...props} />,
};

export default function MDX(source: any) {
  return (
    <>
      <MDXRemote {...source} components={components} />
    </>
  );
}
