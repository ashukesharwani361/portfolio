import ScrollToTop from "../components/scrollTo";
import reactImg from "../assets/react-developer.png";
import webDev from "../assets/web-developer(js).png";
import jsCertificate from "../assets/js.pdf";
import reactCertificate from "../assets/react.pdf";


export default function Certificates() {
    ScrollToTop();
    const certificates = [
        {
            id: 0,
            title: "Udemy's Web Developer Bootcamp",
            instructor: "Colt Steele",
            img: webDev,
            file: jsCertificate
        },
        {
            id: 1,
            title: "React JS Masterclass",
            instructor: "Shubham Sharda",
            img: reactImg,
            file: reactCertificate
        }
    ];
    return (
        <div className="dark:bg-slate-900 p-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl pl-3 pt-7 text-purple-800 font-extrabold dark:text-white">Certificates</h1>
                <p className="mt-2 pl-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                    I have completed several courses and certifications in the field of web development, including:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 px-3 sm:grid-cols-2">
                    {certificates.map((c) => {
                        return (
                            <a
                                key={c.id}
                                href={c.file}
                                download
                                className="group block mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white text-center shadow-purple-600 shadow-lg transition-transform duration-150 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl dark:bg-slate-800"
                                aria-label={`Download ${c.title} certificate`}
                            >
                                <img
                                    className="w-full object-cover"
                                    src={c.img}
                                    alt={`${c.title} certificate preview`}
                                />
                                <div className="space-y-2 p-4 text-left sm:text-center">
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Title: {c.title}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Instructor: {c.instructor}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

{/* <div className="h-screen flex justify-evenly p-3 dark:bg-slate-900 dark:text-white">
    {
        certificates.map((c, index) => {
            return (
                <div key={index} className="text-center m-5 max-w-sm h-fit shadow-purple-600 shadow-lg dark:bg-slate-800 hover:scale-105 transition-all duration-150 hover:shadow-2xl hover:shadow-purple-600">
                    <img className="max-w-sm" src={c.img} alt="screenshot of react certificate" />
                    <p className="pl-1 py-2 text-sm">Title: {c.title}</p>
                    <p className="pl-1 py-2 text-sm">Instructor: {c.instructor}</p>
                    <button onClick={(c) => { if (c.index == c.id) }} className="my-2 px-2 py-2 w-fit text-center border border-rose-600 rounded-lg">Download Certificate</button>
                </div>
            )
        })
    }
</div> */}