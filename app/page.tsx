// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Next.js Routing Examples
        </h1>
        
        <nav className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/test-parallel"
            className="block px-6 py-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-sm transition-all"
          >
            <div className="text-xl font-semibold text-gray-900 mb-3">Parallel Routes</div>
            <div className="text-base text-gray-600">
              Render multiple pages in the same layout using @folder naming convention. Main content and sidebar update independently.
            </div>
          </Link>

          <Link 
            href="/test-intercept"
            className="block px-6 py-6 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-sm transition-all"
          >
            <div className="text-xl font-semibold text-gray-900 mb-3">Intercepting Routes</div>
            <div className="text-base text-gray-600">
              Show different content based on navigation context using (.) convention. Displays intercepted version when navigating, full page on refresh.
            </div>
          </Link>

          <Link 
            href="/test-modal"
            className="block px-6 py-6 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition-all"
          >
            <div className="text-xl font-semibold text-gray-900 mb-3">Modal Dialog</div>
            <div className="text-base text-gray-600">
              Combine parallel and intercepting routes to create URL-driven modals. Shows overlay on navigation, full page on direct access.
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}