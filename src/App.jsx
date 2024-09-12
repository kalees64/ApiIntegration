import { Link, Route, Routes } from "react-router-dom";
import Issues from "./components/Issues";
import OneIssue from "./components/OneIssue";
import Home from "./components/Home";
function App() {
  const API_URI =
    "https://api.plane.so/api/v1/workspaces/vk64/projects/b76ab975-36ad-404f-80ab-8bebe1cff02d";
  const apiKey = "#";

  return (
    <div className="w-full container mx-auto">
      <header className="w-full flex gap-8 py-4 items-center">
        <Link to="/" className="text-2xl font-bold ">
          VK64
        </Link>
        <Link
          to="/bookshowapp"
          className="hover:text-blue-600 active:text-red-500"
        >
          BookShopApp
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/bookshowapp"
          element={<Issues API_URI={API_URI} apiKey={apiKey} />}
        />
        <Route
          path="/bookshowapp/:id"
          element={<OneIssue API_URI={API_URI} apiKey={apiKey} />}
        />
      </Routes>
    </div>
  );
}

export default App;
