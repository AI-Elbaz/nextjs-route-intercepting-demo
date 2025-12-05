'use client';

import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

export default function ModalDialog({ params }: PageProps<"/test-modal/dialog/[id]">) {
  const {id} =  use(params);

  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-lg p-6 max-w-lg w-11/12 shadow-2xl"
      >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">🎯 Modal Dialog {id}</h2>
        <button 
        onClick={handleClose}
        className="text-2xl hover:text-gray-700 text-gray-900 leading-none"
        >
        ×
        </button>
      </div>
      <p className="mb-4 text-gray-800">This is a modal dialog for item {id}</p>
      <p className="text-xs text-gray-600 mb-4">
        Path: app/test-modal/@modal/(.)dialog/[id]/page.tsx
      </p>
      <button 
        onClick={handleClose}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Close Modal
      </button>
      </div>
    </div>
  );
}