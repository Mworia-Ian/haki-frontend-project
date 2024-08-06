import React from 'react';

function Home() {
  const user = { name: 'John Doe', role: 'client' };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-4 text-2xl font-bold">Welcome, {user.name}!</h1>
        {user.role === 'lawyer' ? (
          <p>You can manage your clients and provide legal services.</p>
        ) : (
          <p>You can find and hire legal experts.</p>
        )}
      </div>
    </div>
  );
}

export default Home;