import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../data/projectsData'
import { useEffect, useState, useRef } from 'react'
import PageNotFound from './PageNotFound'
import ScrollToTop from '../components/scrollTo'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = data.find(p => p.name.toLowerCase().replace(/\s+/g, '') === slug)

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)
  ScrollToTop();

  // normalize images to array
  const images = project ? (Array.isArray(project.image) ? project.image : [project.image]) : []

  useEffect(() => {
    // respect user's reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    if (images.length <= 1) return

    if (paused) return

    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 3500)

    return () => clearInterval(intervalRef.current)
  }, [images.length, paused])

  useEffect(() => {
    // reset index when project changes
    setIndex(0)
  }, [slug])

  if (!project) {
    return (
      // <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      //   <div className="text-center text-white">
      //     <h1 className="text-3xl font-bold mb-4">Project not found</h1>
      //     <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-white text-indigo-600 rounded">Back to projects</button>
      //   </div>
      // </div>
      <PageNotFound />
    )
  }

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setIndex(i => (i + 1) % images.length)

  return (
    <main className="min-h-screen p-4 sm:p-8 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto bg-white/90 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-56 sm:h-72 md:h-96 bg-gray-200">
          {images.length > 0 && (
            <img
              loading="lazy"
              decoding="async"
              src={images[index]}
              alt={`${project.name} - ${index + 1}`}
              className="w-full h-full object-cover"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            />
          )}

          {images.length > 1 && (
            <>
              <button aria-label="Previous image" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow">
                ‹
              </button>
              <button aria-label="Next image" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-2 rounded-full shadow">
                ›
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to image ${i+1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{project.name}</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{project.description}</p>

          {project.toolsUsed && project.toolsUsed.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Tools & tech</h3>
              <div className="mt-2 marquee">
                <div className="marquee-inner">
                  {/** duplicate the array so the marquee appears continuous */}
                  {project.toolsUsed.concat(project.toolsUsed).map((tool, idx) => (
                    <span key={`${tool}-${idx}`} className="marquee-item dark:text-slate-300">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">View Demo</a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-300 text-gray-900 dark:text-gray-300 rounded dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">View Source</a>
            )}
            <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded bg-white dark:bg-slate-600 text-gray-900 dark:text-gray-300 dark:hover:bg-slate-500">Back</button>
          </div>
        </div>
      </div>
    </main>
  )
}
