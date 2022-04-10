import React , { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";

import './App.css';

function App() {
  const [posts,setPosts]=useState ([
    {id: 1, title: "JS", message: "Язык программирования"},
    {id: 2, title: "React", message: "Библиотека JS"},
    {id: 3, title: "HTML", message: "Язык разметки страницы"},
    {id: 4, title: "CSS", message: "Таблицы стилей"}
  ])

  const createPost=(newPost)=>{
    setPosts([...posts,newPost]);
   }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов"/>
      
    </div>
  );
}

export default App;
