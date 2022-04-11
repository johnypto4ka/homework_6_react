import React , { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/Select/Select";
import Modal from "./components/Modal/Modal";
import MyButton from "./components/Button/Button";

import './App.css';

function App() {
  const [posts,setPosts]=useState ([
    {id: 1, title: "JS", message: "Язык программирования"},
    {id: 2, title: "React", message: "Библиотека JS"},
    {id: 3, title: "HTML", message: "Язык разметки страницы"},
    {id: 4, title: "CSS", message: "Таблицы стилей"}
  ])

  const [selectedSort,setSelectedSort]=useState('');
  const [isModalActive, setIsModalActive ]=useState(false);

  const createPost=(newPost)=>{
    setPosts([...posts,newPost]);
    setIsModalActive(false);
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
      <MyButton  onClick={()=>setIsModalActive(true)}>Создать пост</MyButton>
      <Modal visible={isModalActive}
        setVisible={setIsModalActive} >
        <PostForm create={createPost} />
      </Modal>
      <Select defaultValue="Сортировка по "
             options={[
             {value:"title", name:"По названию"},
             {value:"message", name:"По описанию"}
        ]}
        value={selectedSort}
        sortPost={sortPost}
     
      />
      { posts.length !== 0 ?
        <PostList posts={posts} remove={removePost} title="Список постов"/>
        : <div><h1 className="noposts">Посты не найдены</h1></div>
      }
      
      
    </div>
  );
}

export default App;
