
import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    // navbar fixed white background with dark text
    const headerClass = 'sticky top-0 left-0 w-full z-50 bg-white text-slate-800 shadow dark:bg-slate-800'

    const linkClass = ({ isActive }) =>
        `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 dark:hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${isActive ? 'bg-indigo-50 text-indigo-700 dark:bg-white dark:text-black' : 'text-slate-800 hover:text-slate-900 hover:bg-slate-50 dark:text-white dark:hover:text-black dark:hover:scale-105 transition-all duration-300 dark:hover:bg-gray-500'}`

    // theme state: 'light' | 'dark'
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || undefined
        } catch (e) {
            return undefined
        }
    })

    useEffect(() => {
        // initialize theme from system preference if not set
        if (!theme) {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            const t = prefersDark ? 'dark' : 'light'
            setTheme(t)
            try { localStorage.setItem('theme', t) } catch (e) {}
            return
        }

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        try { localStorage.setItem('theme', theme) } catch (e) {}
    }, [theme])

    const scrollToFooterEmail = () => {
        const el = document.getElementById('footer-email')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
            return
        }
        // if footer element isn't present, navigate home then try after a short delay
        navigate('/')
        setTimeout(() => {
            const el2 = document.getElementById('footer-email')
            if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300)
    }

    return (
        <header className={headerClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3">
                            <span className="text-slate-800 text-lg font-extrabold dark:text-white">Ashutosh Kesharwani</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" className={linkClass} end>Home</NavLink>
                        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
                        <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
                        <button onClick={scrollToFooterEmail} className={linkClass({ isActive: false })}>Contact</button>
                        <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme" className={linkClass({ isActive: false })}>
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M18.36 18.36l-.7-.7M6.34 6.34l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.64 13a9 9 0 11-10.6-10.6 7 7 0 1010.6 10.6z" />
                                </svg>
                            )}
                        </button>
                    </nav>

                    {/* mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 hover:text-slate-900 hover:bg-slate-50`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu items */}
            {open && (
            <div className={`md:hidden px-4 pb-4 transition-transform duration-200 origin-top transform ${open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-2" role="menu" aria-hidden={!open}>
                    <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)} role="menuitem">Home</NavLink>
                    <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)} role="menuitem">Projects</NavLink>
                    <NavLink to="/certificates" className={linkClass} onClick={() => setOpen(false)} role="menuitem">Certificates</NavLink>
                    <button onClick={() => { setOpen(false); scrollToFooterEmail() }} className={linkClass({ isActive: false })} role="menuitem">Contact</button>
                    <button onClick={() => { setOpen(false); setTheme(prev => prev === 'dark' ? 'light' : 'dark') }} className={linkClass({ isActive: false })} aria-label="Toggle theme mobile" role="menuitem">
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M18.36 18.36l-.7-.7M6.34 6.34l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.64 13a9 9 0 11-10.6-10.6 7 7 0 1010.6 10.6z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}