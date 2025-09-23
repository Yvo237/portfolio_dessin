// src/components/Home.tsx
const Home = () => {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover opacity-20"
          style={{ backgroundImage: `url(${new URL('../assets/3.jfif', import.meta.url).href})` }}
        />
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="relative text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Atelier de dessin à la main
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            « Dessins à la main, émotions vraies »
          </p>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Découvrir la galerie
          </a>
        </div>
      </section>
    )
  }
  
  export default Home
  