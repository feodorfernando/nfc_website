export default function Home() {
  return (
    <main className="text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">NF CRAFTS INDIA</h1>

        <nav className="space-x-8 text-sm">
          <a>Home</a>
          <a>Shop</a>
          <a>Collections</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[70vh] bg-gradient-to-r from-amber-100 via-stone-100 to-orange-100 flex items-center px-20">
        <div>
          <h2 className="text-4xl mb-4 font-light">
            Natural Handcrafted Décor
            <br />
            for Modern Living
          </h2>

          <button className="bg-black text-white px-6 py-3 mt-4">Shop Now</button>
        </div>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-4 gap-6 px-20 py-16">
        {['Baskets', 'Table Decor', 'Lighting', 'Home Accents'].map((item) => (
          <div key={item} className="text-center">
            <div className="h-48 bg-gray-200 mb-3"></div>
            <p>{item}</p>
          </div>
        ))}
      </section>

      {/* Best Sellers */}
      <section className="px-20">
        <h3 className="text-xl mb-6">Best Sellers</h3>

        <div className="grid grid-cols-4 gap-6">
          {[
            ['Natural Fiber Basket', '₹1200'],
            ['Pendant Lamp', '₹2800'],
            ['Decor Table Set', '₹1500'],
            ['Grass Placemats', '₹900'],
          ].map((p) => (
            <div key={p[0]}>
              <div className="h-56 bg-gray-200"></div>
              <p className="mt-3">{p[0]}</p>
              <span className="text-sm">{p[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="flex gap-12 px-20 py-20 items-center">
        <div className="w-1/2 h-64 bg-gray-200"></div>

        <div className="w-1/2">
          <h3 className="text-xl mb-4">Crafted with Tradition & Care</h3>
          <p className="text-sm leading-relaxed">
            We create eco-friendly décor handcrafted by skilled artisans, bringing natural beauty into modern homes.
          </p>

          <button className="mt-4 border px-5 py-2">Learn More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t text-sm">© 2026 NF Crafts India</footer>
    </main>
  );
}
