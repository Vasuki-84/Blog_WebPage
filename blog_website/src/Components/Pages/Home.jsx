// function Home() {
//   return (
//     <div>
//       <h1>Welcome to Travel Blog</h1>
//       <p>Discover amazing places around the world!</p>
//     </div>
//   );
// }

// export default Home;

// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">My Travel Blog</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Exploring Bali</h2>
            <p className="text-gray-700">A journey through the beautiful island of Bali...</p>
          </article>

          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Adventures in Iceland</h2>
            <p className="text-gray-700">Discover the breathtaking glaciers, volcanoes, and waterfalls of Iceland...</p>
          </article>

          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Road Trip Across USA</h2>
            <p className="text-gray-700">An unforgettable road trip covering iconic American landmarks...</p>
          </article>

          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Exploring Kyoto</h2>
            <p className="text-gray-700">Experience the traditional temples, gardens, and culture of Kyoto, Japan...</p>
          </article>

          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Safari in Kenya</h2>
            <p className="text-gray-700">A thrilling safari adventure to see the Big Five and stunning landscapes...</p>
          </article>

          <article className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Beaches of Thailand</h2>
            <p className="text-gray-700">Relax on the pristine beaches and explore vibrant local culture in Thailand...</p>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2025 My Travel Blog</p>
      </footer>
    </div>
  );
}

export default Home;


