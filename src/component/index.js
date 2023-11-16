import Navbar from "../component/navbar/Index";
import Footer from "./footer/Footer";

// Util
import { proxy, find_item, img_url } from "./util/Index";

import Spinner from "../component/atom/spinner/Index"

// Hooks
import { useFetch } from "./hooks/Index";

// Home screen
import Hero from "./hero/Index";
import NewsCard from "./hero/newsCard/Index";
import BlogCategories from "./hero/blogCategories/Index";
import Posts from "./posts/Index";

// Dasboard
import SideBar from "./sideBar/Index";
import { HandleImagePreview, HandleCategory } from "./creareNewBlog/Index";
import SeachBar from "./searchBar/Index";

// Pages
import Home from "../Pages/Home";
import ReadArticle from "../Pages/ReadArticle";
import Dashboard from "../Pages/dashboard/Index";

export {
  Navbar,
  Footer,
  useFetch,
  proxy,
  find_item,
  img_url,
  Spinner,
  Hero,
  NewsCard,
  BlogCategories,
  HandleCategory,
  HandleImagePreview,
  Posts,
  SideBar,
  SeachBar,
  Home,
  ReadArticle,
  Dashboard,
};
