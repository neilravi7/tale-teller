import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostDetails from "./components/Posts/PostDetails";
import Navigation from "./components/Navigation";

const HomePage = React.lazy(() => import("./components/HomePage"));
const Login = React.lazy(() => import("./components/Users/Login"));
const PostList = React.lazy(() => import("./components/Posts/PostList"));

const ProjectRoutes = () => {
  return (
    <React.Suspense>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default ProjectRoutes;