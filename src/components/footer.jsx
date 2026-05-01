import React from 'react'
import resume from '../assets/resume.pdf';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-800 text-gray-700 dark:text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Feel free to reach out for opportunities or collaboration
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="w-full md:w-auto">
            <div className="text-base sm:text-lg md:text-xl font-semibold dark:text-white text-center md:text-left">Ashutosh Kesharwani</div>
            <div className="text-xs sm:text-sm md:text-sm text-gray-700 dark:text-gray-200 text-center md:text-left">Fullstack developer — building fast and accessible web experiences</div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-end">
            <a id="footer-email" href="mailto:ashukesharwani361@gmail.com" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200" aria-label="Send email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 10-8 0c0 1.657 1.343 3 3 3h2a3 3 0 003-3z"></path></svg>
              <span>ashukesharwani361@gmail.com</span>
            </a>

            <nav className="flex w-full md:w-auto items-center gap-4 justify-center md:justify-start mt-3 md:mt-0" aria-label="social links">
              <a href="https://github.com/ashukesharwani361" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.96 10.96 0 012.87-.39c.98.01 1.97.13 2.87.39 2.19-1.5 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
              </a>
              <a href="https://twitter.com/ASHU361_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.07 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ashutosh-kesharwani-759b0b164/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 5 3.8 6.14 2.27 6.14 1.03 6.14 0 5.08 0 3.64 0 2.2 1.03 1.13 2.27 1.13 3.8 1.13 4.98 2.28 4.98 3.5zM.24 8.24h4.06V24H.24V8.24zM8.64 8.24h3.9v2.14h.06c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.21V24h-4.06v-7.1c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24H8.64V8.24z" /></svg>
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1" aria-label="Resume">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h6l4 4v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 3v4a1 1 0 0 0 1 1h4" /></svg>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200/40 dark:border-slate-700/40 pt-6 text-sm text-gray-500 dark:text-gray-300 text-center">
          © {new Date().getFullYear()} Ashutosh Kesharwani — Built with React and Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
