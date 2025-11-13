import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const navigate = useNavigate()

    return (
        <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
            <div className="max-w-3xl mx-auto p-6 sm:p-10">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8 sm:p-12 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50 dark:bg-indigo-900 mx-auto">
                            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">404</span>
                        </div>

                        <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                            The page you're looking for doesn't exist or has been moved. You can go back to the home page or browse
                            the projects.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                                            <button
                                                onClick={() => navigate('/')}
                                                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                
                                            >
                                Go home
                            </button>

                                            <button
                                                onClick={() => navigate(-1)}
                                                className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                
                                            >
                                Go back
                            </button>
                        </div>
                    </div>

                    <div className="hidden sm:block bg-slate-50 dark:bg-slate-900 p-6">
                        {/* subtle decorative illustration or pattern */}
                        <svg className="w-full h-24 opacity-60" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,30 1200,80 L1200,120 L0,120 Z" fill="#eef2ff" className="dark:fill-slate-800" />
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    )
}