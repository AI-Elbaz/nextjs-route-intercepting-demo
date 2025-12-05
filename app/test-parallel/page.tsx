import Link from 'next/link';

export default function TestParallelPage() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Test Parallel Routes</h3>
      <p className="mb-4">Main content is here</p>
      <Link href="/test-parallel/item/1" className="text-blue-600 hover:underline">
        Go to Item 1
      </Link>
    </div>
  );
}