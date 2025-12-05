import Link from 'next/link';

export default function TestInterceptPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Test Intercepting Routes</h1>
      <p className="mb-2">Click the link below:</p>
      <div className="space-y-2">
        <div>
          <Link href="/test-intercept/photo/1" className="text-blue-600 hover:underline">
            View Photo 1
          </Link>
        </div>
        <div>
          <Link href="/test-intercept/photo/2" className="text-blue-600 hover:underline">
            View Photo 2
          </Link>
        </div>
      </div>
      <div className="mt-5 text-sm text-gray-600 space-y-1">
        <p>When clicked from here: shows intercepted version (blue box)</p>
        <p>When accessed directly: shows full page</p>
      </div>
    </div>
  );
}