import Link from 'next/link';

export default function TestModalPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Test Modal with Parallel + Intercepting Routes</h1>
      <p className="mb-2">Click these links to open modals:</p>
      <ul className="space-y-2 mb-5">
        <li>
          <Link href="/test-modal/dialog/1" className="text-blue-600 hover:underline">
            Open Dialog 1
          </Link>
        </li>
        <li>
          <Link href="/test-modal/dialog/2" className="text-blue-600 hover:underline">
            Open Dialog 2
          </Link>
        </li>
        <li>
          <Link href="/test-modal/dialog/3" className="text-blue-600 hover:underline">
            Open Dialog 3
          </Link>
        </li>
        <li>
          <Link href="/test-modal/dialog" className="text-blue-600 hover:underline">
            Open Dialog static page
          </Link>
        </li>
      </ul>
      <div className="mt-5 text-sm text-gray-600 space-y-1">
        <p className="font-semibold">Expected behavior:</p>
        <p>- Click link: Opens modal overlay</p>
        <p>- Direct URL/Refresh: Shows full page</p>
        <p>- Close modal: Returns to this page</p>
      </div>
    </div>
  );
}