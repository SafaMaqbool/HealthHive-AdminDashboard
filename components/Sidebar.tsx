import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
          </li>
          <li>
            <Link href="/drivers" className="block p-2 hover:bg-gray-700 rounded">Drivers</Link>
          </li>
          <li>
            <Link href="/ambulances" className="block p-2 hover:bg-gray-700 rounded">Ambulances</Link>
          </li>
          <li>
            <Link href="/bookings" className="block p-2 hover:bg-gray-700 rounded">Bookings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
