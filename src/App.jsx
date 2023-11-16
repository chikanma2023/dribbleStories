import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import { useFetch, Home, ReadArticle, Dashboard } from "./component/index";
import CreatePost from "./Pages/createPost/Index";
import DashboardLayout from "./Pages/Layout/DashboardLayout";
import { getPostsAction } from "./reducers/BlogPostReducers";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const allPosts = useFetch("/");

  // Get all posts from the database
  const getAllPosts = () => {
    dispatch(getPostsAction(allPosts));
  };

  getAllPosts();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ReadArticle />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newblog" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
