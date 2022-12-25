import { ReactNode } from 'react';
import cn from 'classnames';

// example from https://blog.makerx.com.au/extracting-reusable-tailwind-react-components/
export default function Badge(props: { variantColor: 'pink' | 'green' | 'red'; children?: ReactNode }) {
  return (
    <div
      className={cn(
        props.variantColor === 'red' && 'bg-red-600 text-white',
        props.variantColor === 'pink' && 'bg-pink-400 text-white',
        props.variantColor === 'green' && 'bg-green-800 text-white',
        'shadow-sm shadow-black',
      )}
    >
      {props.children}
    </div>
  );
}
