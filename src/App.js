import React from "react";
//import Posts from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";
import NoPage from "./pages/NoPage";
import "./styles/App.css"

const App = () => {

  //Creates top part of application and routes to pages
  // with list of posts and individual posts
  return (
    <div className="App">
      <div className="TopBar">
        <h1 className="TopText" >Forum App</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<PostList />} />
          <Route path="/" element={<PostList />} />
          <Route path="/Post/:id" element={<PostPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;