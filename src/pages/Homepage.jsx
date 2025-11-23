import { useNavigate } from 'react-router-dom';
import { data } from '../data/projectsData';
import ScrollToTop from '../components/scrollTo';

export default function Homepage() {
    const navigate = useNavigate();

    // get specific projects by id instead of mapping
    const yelpProject = data.find(p => p.id === 1)
    const codebookProject = data.find(p => p.id === 2)

    ScrollToTop();

    return (
        <>
            <div
                className="min-h-screen min-w-full flex items-center justify-center p-4 dark:bg-slate-900"
            >

                <div className="max-w-full mx-auto bg-white/30 dark:bg-gray-800 border border-white/30 dark:border-white/10 rounded-2xl shadow-2xl hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300 p-20 backdrop-blur-xl">
                    <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                        Hello,
                    </div>
                    <div className="text-2xl text-gray-700 dark:text-gray-300">
                        I'm <span className="text-indigo-600 font-bold dark:text-indigo-400">Ashutosh Kesharwani</span>
                        <br />
                        — a fullstack developer crafting fast, accessible, and delightful web experiences.
                    </div>
                </div>

            </div>

            <section
                className="min-h-screen min-w-full flex items-center flex-wrap justify-evenly p-4 dark:bg-slate-900"
                
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 group">
                    <h2 id="projects" tabIndex="0" className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-white">Projects</h2>
                    <div className="mt-2 w-16 h-1 bg-indigo-400 dark:bg-white rounded transition-all duration-300 group-hover:w-28 group-focus-within:w-28"></div>
                </div>

                {yelpProject && (
                    <div onClick={() => navigate(`/projects/${yelpProject.name.toLowerCase().replace(/\s+/g, '')}`)} className={`mb-16 w-[70vw] md:w-[40vw] lg:w-[30vw]  bg-white/90 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                        <img src={yelpProject.image[0]} alt={yelpProject.name} className="w-full h-64 md:h-72 lg:h-80 object-cover dark:border-white" />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {yelpProject.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-white pt-3 line-clamp-2 md:line-clamp-4">
                                {yelpProject.description}
                            </p>
                        </div>
                    </div>
                )}

                {codebookProject && (
                    <div onClick={() => navigate(`/projects/${codebookProject.name.toLowerCase().replace(/\s+/g, '')}`)} className={`mb-16 w-[70vw] md:w-[40vw] lg:w-[30vw]  bg-white/90 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                        <img src={codebookProject.image[0]} alt={codebookProject.name} className="w-full h-64 md:h-72 lg:h-80 object-cover" />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {codebookProject.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-white pt-3 line-clamp-2 md:line-clamp-4">
                                {codebookProject.description}
                            </p>
                        </div>
                    </div>
                )}

                {/* View more button: navigates to the Projects listing */}
                <div className="w-full flex justify-center mt-6">
                    <button onClick={() => navigate('/projects')} className="px-6 py-3 bg-white/90 text-indigo-700 rounded-md shadow hover:bg-white transition-all duration-200">
                        View more projects
                    </button>
                </div>

            </section>

        </>
    )
}