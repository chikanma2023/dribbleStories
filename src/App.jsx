import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import { Home, ReadArticle } from "./component/index";

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
