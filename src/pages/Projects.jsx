import { data } from "../data/projectsData";
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "../components/scrollTo";

export default function Projects() {
    const navigate = useNavigate();
    ScrollToTop();

    return (
        <div className="pt-12 pb-16 w-full dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-white">Projects</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">A selection of recent work — click a card to view details.</p>
                <div className="mt-4 w-20 h-1 bg-indigo-400 rounded"></div>
            </div>

            <div className="mt-6 w-full px-4 grid gap-10 justify-items-center sm:grid-cols-2 xl:grid-cols-3">
            {data.map((d) => (
                <div
                    key={d.id ?? d.name}
                    onClick={() => navigate(`/projects/${d.name.toLowerCase().replace(/\s+/g, '')}`)}
                    className="w-full max-w-md mx-auto mb-6 bg-white/90 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:shadow-green-400 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
                >
                    <img src={Array.isArray(d.image) ? d.image[0] : d.image} alt={d.name} className="w-full h-56 object-cover" />
                    <div className="p-4 sm:p-6">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 pt-3 line-clamp-3 sm:line-clamp-4">{d.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}