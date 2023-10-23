import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Pages/Layout/MainLayout";
import ReadArticle from "./Pages/ReadArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ReadArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
