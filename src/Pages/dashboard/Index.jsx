import { useRef } from "react";
import { SideBar, Header } from "../../component/index";
import PostCard from "../dashboard/postCard/Card";
import post1 from "../../assets/images/post5.png";

const Index = () => {
  const posts = [
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },

    {
      image: post1,
      title:
        "The Ultimate Guide to Website Portfolio Templates That Book More Clients",
      views: 12,
    },
  ];
  return (
    <div className="bg-white p-10 mt-5 h-[60%]">
      <PostCard articles={posts} />
    </div>
  );
};

export default Index;
