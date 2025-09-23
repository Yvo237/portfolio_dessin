// src/components/Process.tsx
const video = new URL('../assets/video.mp4', import.meta.url).href
const steps = [
  {
    title: 'Croquis',
    text: 'Esquisses rapides pour poser les formes et l’intention.',
  },
  {
    title: 'Lignes',
    text: 'Affinage des contours à l’encre ou au crayon fin.',
  },
  {
    title: 'Valeurs et couleurs',
    text: 'Travail des ombres au crayon ou ajout d’aquarelle.',
  },
  {
    title: 'Finition',
    text: 'Détails, textures et corrections finales.',
  },
]

const Process = () => {
  return (
    <section id="process" className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Processus de création</h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="text-sm text-blue-600 font-semibold">Étape {i + 1}</div>
                <h3 className="text-xl font-bold mt-1">{s.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <video className="col-span-2 w-full rounded-lg shadow" controls poster={new URL('../assets/finitions.jfif', import.meta.url).href}>
              <source src={video} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
            <img className="aspect-[4/3] object-cover rounded-lg" src={new URL('../assets/croquis.jfif', import.meta.url).href} alt="Croquis" />
            <img className="aspect-[4/3] object-cover rounded-lg" src={new URL('../assets/finitions.jfif', import.meta.url).href} alt="Finitions" />
          </div>
        </div>

        <p className="mt-10 text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          J’utilise principalement le crayon (HB, 2B), l’encre et l’aquarelle sur papier grain fin. Chaque pièce est pensée pour transmettre une émotion authentique et un geste vivant.
        </p>
      </div>
    </section>
  )
}

export default Process


