// app/page.tsx (Server component)
import { Suspense } from 'react';
import PageClient from './PageClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <PageClient />
    </Suspense>
  );
}