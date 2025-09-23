// src/components/Projects.tsx
import { useMemo, useState } from 'react'

// Media from src/assets (current names)
const imgRegard = new URL('../assets/regard.jpeg', import.meta.url).href
const imgPortraitCrayon = new URL('../assets/portrait au crayon.jfif', import.meta.url).href
const imgGestes = new URL('../assets/geste rapides.jpeg', import.meta.url).href
const imgCroquisUrbain = new URL('../assets/croquis urbain.jfif', import.meta.url).href
const imgEtudeMain = new URL('../assets/etude de main.jpeg', import.meta.url).href
const imgIllustration = new URL('../assets/illustration onirique.jfif', import.meta.url).href
const imgReverie = new URL('../assets/reverie.jpeg', import.meta.url).href


type Artwork = {
    id: number
    title: string
    year: string
    technique: string
    category: 'portrait' | 'croquis' | 'illustration' | 'autre'
    image: string
    description: string
}

const allArtworks: Artwork[] = [
    {
        id: 1,
        title: 'Regard',
        year: '2023',
        technique: 'Crayon HB',
        category: 'portrait',
        image: imgRegard,
        description: 'Étude de regard au crayon, capture d’une émotion fugace.'
    },
    {
        id: 2,
        title: 'Gestes rapides',
        year: '2024',
        technique: 'Encre',
        category: 'croquis',
        image: imgGestes,
        description: 'Croquis à l’encre pour saisir le mouvement.'
    },
    {
        id: 3,
        title: 'Rêverie',
        year: '2022',
        technique: 'Aquarelle',
        category: 'illustration',
        image: imgReverie,
        description: 'Aquarelle légère aux tons doux.'
    },
    {
        id: 4,
        title: 'Portrait au crayon',
        year: '2024',
        technique: 'Crayon 2B',
        category: 'portrait',
        image: imgPortraitCrayon,
        description: 'Portrait esquissé en lumière naturelle.'
    },
    {
        id: 5,
        title: 'Croquis urbain',
        year: '2025',
        technique: 'Encre',
        category: 'croquis',
        image: imgCroquisUrbain,
        description: 'Scène de rue capturée sur le vif.'
    },
    {
        id: 6,
        title: 'Illustration onirique',
        year: '2025',
        technique: 'Aquarelle',
        category: 'illustration',
        image: imgIllustration,
        description: 'Couleurs douces pour une ambiance rêveuse.'
    },
    {
        id: 7,
        title: 'Étude de main',
        year: '2025',
        technique: 'Crayon HB',
        category: 'croquis',
        image: imgEtudeMain,
        description: 'Étude rapide de main et de volumes.'
    },
]

const categories = [
    { key: 'toutes', label: 'Tous' },
    { key: 'portrait', label: 'Portraits' },
    { key: 'croquis', label: 'Croquis' },
    { key: 'illustration', label: 'Illustrations' },
]

const Projects = () => {
    const [active, setActive] = useState<string>('toutes')
    const [selected, setSelected] = useState<Artwork | null>(null)

    const filtered = useMemo(() => {
        if (active === 'toutes') return allArtworks
        return allArtworks.filter(a => a.category === active)
    }, [active])

    return (
        <section id="portfolio" className="bg-gray-100 dark:bg-gray-900 py-20 px-4 text-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Galerie</h2>

                <div className="flex justify-center gap-3 flex-wrap mb-10">
                    {categories.map(c => (
                        <button
                            key={c.key}
                            onClick={() => setActive(c.key)}
                            className={`px-4 py-2 rounded-full border transition ${active === c.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600 hover:border-blue-500'}`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((art) => (
                        <button key={art.id} onClick={() => setSelected(art)} className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">
                            <img src={art.image} alt={art.title} className="w-full h-56 object-cover opacity-95 group-hover:opacity-100 transition" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                                <span className="text-white font-semibold drop-shadow">{art.title}</span>
                                <span className="text-white/80 text-sm drop-shadow">{art.technique}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <button aria-label="Fermer" onClick={() => setSelected(null)} className="absolute inset-0 bg-black/70" />
                        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden">
                            <img src={selected.image} alt={selected.title} className="w-full max-h-[65vh] object-contain bg-black" />
                            <div className="p-6 text-gray-800 dark:text-gray-100">
                                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selected.technique} • {selected.year}</p>
                                <p className="leading-relaxed">{selected.description}</p>
                                <div className="mt-6 flex justify-end">
                                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
  