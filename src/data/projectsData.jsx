import yelpcamp from "../assets/yelpcamp.png";
import yelpcamp2 from "../assets/yelpcamp2.png";
import yelpcamp3 from "../assets/yelpcamp3.png";
import codebook from "../assets/codebook.png";
import codebook2 from "../assets/codebook2.png";
import codebook3 from "../assets/codebook3.png";
import cinemate from "../assets/cinemate.png";
import cinemate2 from "../assets/cinemate2.png";
import writenode from "../assets/writenode.png";
import shopmate from "../assets/shopmate.png";
import taskmate from "../assets/taskmate.png";

export const data = [
    {
        id: 1,
        name: "Yelpcamp",
        description:
            "YelpCamp is a full‑stack campground platform with user authentication, CRUD capabilities, and campground reviews. Built with modern JavaScript for an interactive, data-driven experience.",
        image: [yelpcamp, yelpcamp2, yelpcamp3],
        demoUrl: "https://yelpcamp2-u659.onrender.com/",
        repoUrl: "https://github.com/ashukesharwani361/yelpcamp2",
        toolsUsed: [
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "EJS",
            "CSS",
            "HTML",
            "Mapbox API",
            "Cloudinary API",
            "Passport.js",
            "bcrypt",
            "RESTful Routing",
            "AJAX",
        ],
    },
    {
        id: 2,
        name: "Codebook",
        description:
            "CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.",
            image: [codebook, codebook2, codebook3],
            demoUrl: "https://codebook-ra.netlify.app",
            repoUrl: "https://github.com/ashukesharwani361/codebook",
        toolsUsed: ["JavaScript", "React", "Vite", "Node.js", "Tailwind CSS", "Socket.io", "JWT Authentication", "RESTful API", "Firebase"],
    },
    {
        id: 3,
        name: "Cinemate",
        description:
            "Cinemate is a movie discovery web application that allows users to explore and find information about movies, including details, ratings, and trailers.",
        image: [cinemate, cinemate2],
        demoUrl: "https://cinemate-reactapplication.netlify.app/",
        repoUrl: "https://github.com/ashukesharwani361/Cinemate",
        toolsUsed: ["JavaScript", "React", "Tailwind CSS", "TMDB API", "React Router"],
    },
    {
        id: 4,
        name: "WriteNode",
        description:
            "WriteNode is a minimalist writing app designed to help you focus on your writing without distractions. It offers a clean interface and essential features for writers.",
        image: [writenode],
        demoUrl: "https://writenode-ra.netlify.app/",
        repoUrl: "https://github.com/ashukesharwani361/writenode",
        toolsUsed: ["JavaScript", "React", "Vite", "Tailwind CSS", "Local Storage", "Firebase Authentication", "Firestore"],
    },
    {
        id: 5,
        name: "Shopmate",
        description:"A dynamic e-store for headsets with a functioning cart made using redux.",
        image: [shopmate],
        demoUrl: "https://shopmate-reduxre.netlify.app/",
        repoUrl: "https://github.com/ashukesharwani361/shopmate-redux",
        toolsUsed: ["JavaScript", "React", "Vite", "Tailwind CSS", "Local Storage", "Redux"]
    },
    {
        id: 6,
        name: "Taskmate",
        description: "A simple to-do list which allows users to add, edit and also delete tasks while storing it all in local storage.",
        image: [taskmate],
        demoUrl: "https://taskmate-version1.netlify.app/",
        repoUrl: "",
        toolsUsed: ["JavaScript", "React", "Vite", "CSS", "Local Storage"]
    }
];