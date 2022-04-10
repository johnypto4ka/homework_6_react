import React , { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/Select/Select";

import './App.css';

function App() {
  const [posts,setPosts]=useState ([
    {id: 1, title: "JS", message: "Язык программирования"},
    {id: 2, title: "React", message: "Библиотека JS"},
    {id: 3, title: "HTML", message: "Язык разметки страницы"},
    {id: 4, title: "CSS", message: "Таблицы стилей"}
  ])

  const [selectedSort,setSelectedSort]=useState('');

  const createPost=(newPost)=>{
    setPosts([...posts,newPost]);
   }
  
  const removePost = (post) => {
    let newArray = posts.filter((p) => p.id !== post.id);
    setPosts(newArray);
  }

  const sortPost=(sortValue)=>{
    setSelectedSort(sortValue);
    // console.log(sortValue);
    let newPosts=[...posts].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]));
    setPosts(newPosts);
}

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <Select defaultValue="Сортировка по "
             options={[
             {value:"title", name:"По названию"},
             {value:"message", name:"По описанию"}
        ]}
        value={selectedSort}
        sortPost={sortPost}
     
      />
      <PostList posts={posts} remove={removePost} title="Список постов"/>
      
    </div>
  );
}

export default App;
