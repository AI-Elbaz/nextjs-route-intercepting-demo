export default function ItemPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Item {params.id}</h3>
      <p className="text-gray-700">Full page content for item {params.id}</p>
    </div>
  );
}