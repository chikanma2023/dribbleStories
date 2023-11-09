import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import { Home, ReadArticle, Dashboard } from "./component/index";
import CreatePost from "./Pages/createPost/Index";
import DashboardLayout from "./Pages/Layout/DashboardLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ReadArticle />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
