// src/components/About.tsx
const About = () => {
    return (
      <section id="about" className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={new URL('../assets/yvo.jpeg', import.meta.url).href}
              alt="Artiste dessinateur"
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">À propos</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Je suis un <strong>dessinateur à la main</strong> basé à Yaounde. J’explore les textures, la lumière et le geste pour créer des images sensibles et vivantes.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-2">Techniques préférées</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                <li>Crayon (HB, 2B, 4B)</li>
                <li>Encre (plume, pinceau)</li>
                <li>Aquarelle</li>
                <li>Lav washes et hachures</li>
              </ul>
            </div>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Ma démarche: chercher l’authenticité du trait et laisser l’imperfection raconter l’émotion.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
