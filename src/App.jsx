import { Link, Route, Routes } from "react-router-dom";
import Issues from "./components/Issues";
import OneIssue from "./components/OneIssue";
function App() {
  const API_URI =
    "https://api.plane.so/api/v1/workspaces/vk64/projects/b76ab975-36ad-404f-80ab-8bebe1cff02d";
  return (
    <>
      <header>
        <h1>VK64</h1>
        <Link to="/bookshowapp">BookShopApp</Link>
      </header>
      <Routes>
        <Route path="/bookshowapp" element={<Issues API_URI={API_URI} />} />
        <Route
          path="/bookshowapp/:id"
          element={<OneIssue API_URI={API_URI} />}
        />
      </Routes>
    </>
  );
}

export default App;
