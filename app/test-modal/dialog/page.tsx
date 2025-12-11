import Link from 'next/link';

export default async function FullDialogPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-2">📄 Full Page Dialog NOT Dynamic</h1>
      <p className="mb-2">This is the full page version (shown when accessing URL directly)</p>
      <p className="text-xs text-gray-500 mb-4">
        Path: app/test-modal/dialog/page.tsx
      </p>
      <Link href="/test-modal" className="text-blue-600 hover:underline">
        ← Back to list
      </Link>
    </div>
  );
}