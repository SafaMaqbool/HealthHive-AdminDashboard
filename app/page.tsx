import React from 'react';
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow p-4 bg-gray-100">
        <Content />
      </div>
    </div>
  );
}
