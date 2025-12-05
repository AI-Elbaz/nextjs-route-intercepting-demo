export default function InterceptedPhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="m-5 p-5 border-4 border-blue-500 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-blue-900">🎯 INTERCEPTED Photo {params.id}</h2>
      <p className="mb-2 text-blue-800">This is the intercepted version (shown when navigating from the list)</p>
      <p className="text-xs text-gray-700">
        Path: app/test-intercept/(.)photo/[id]/page.tsx
      </p>
    </div>
  );
}