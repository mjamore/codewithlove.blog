'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { URLS } from '../../../utils/constants';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>
        Uh oh! There isn&apos;t a blog post at this URL. Head back to the <Link href={URLS.ROUTES.BLOG_TOPIC}>blog topics page</Link> to get back on track.
      </p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
