import React , { useState, useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/pages/Posts";
import PostIdPage from "./components/pages/PostIdPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/pages/Layout";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostIdPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
