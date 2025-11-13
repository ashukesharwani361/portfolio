import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Projects from "../pages/projects";
import ProjectDetail from "../pages/ProjectDetail";
import PageNotFound from "../pages/PageNotFound";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}