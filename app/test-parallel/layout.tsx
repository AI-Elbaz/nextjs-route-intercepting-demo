export default function TestParallelLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 p-5">
      <div className="flex-1 border-2 border-blue-500 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Main Content</h2>
        {children}
      </div>
      <div className="w-80 border-2 border-green-500 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Sidebar (Parallel Route)</h2>
        {sidebar}
      </div>
    </div>
  );
}