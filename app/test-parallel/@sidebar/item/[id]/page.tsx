export default function SidebarItemPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">Sidebar for Item {params.id}</h4>
      <p className="text-sm text-gray-600">This changes when you navigate</p>
    </div>
  );
}