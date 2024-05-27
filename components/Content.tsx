
const Content: React.FC = () => {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>Quick summary of your data.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Statistics</h2>
            <p>Some important statistics.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <p>What's been happening recently.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
  