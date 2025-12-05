export default function FullPhotoPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-2">📄 FULL PAGE Photo {params.id}</h1>
      <p className="mb-2">This is the full page version (shown when accessing URL directly or refreshing)</p>
      <p className="text-xs text-gray-500">
        Path: app/test-intercept/photo/[id]/page.tsx
      </p>
    </div>
  );
}