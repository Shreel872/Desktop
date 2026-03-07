import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProjectsPage from "./pages/ProjectsPage";
import ShowcasePage from "./pages/ShowcasePage";

export default function App() {
  return (
    <div className="h-dvh bg-gray-950 text-gray-100 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ShowcasePage />} />
        </Routes>
      </main>
    </div>
  );
}
