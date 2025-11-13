import { data } from "../data/projectsData";
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "../components/scrollTo";

export default function Projects() {
    const navigate = useNavigate();
    ScrollToTop();

    return (
        <div className="pt-12 pb-16 w-full dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Projects</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">A selection of recent work — click a card to view details.</p>
                <div className="mt-4 w-20 h-1 bg-indigo-400 rounded"></div>
            </div>

            <div className="mt-6 w-full flex flex-wrap justify-center">
            {data.map((d) => (
                <div
                    key={d.id ?? d.name}
                    onClick={() => navigate(`/projects/${d.name.toLowerCase().replace(/\s+/g, '')}`)}
                    className={`mx-auto mb-16 w-[50vw] md:w-[40vw] lg:w-[30vw] bg-white/90 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
                >
                    <img src={Array.isArray(d.image) ? d.image[0] : d.image} alt={d.name} className="w-full h-64 md:h-72 lg:h-80 object-cover" />
                    <div className="p-4 sm:p-6">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                        {/* small screens: two-line truncated description; sm+ show full description */}
                        <p className="block sm:hidden font-normal text-gray-700 dark:text-gray-400 pt-2 line-clamp-2">{d.description}</p>
                        <p className="hidden sm:block font-normal text-gray-700 dark:text-gray-400 pt-3">{d.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}