import React , { useState, useMemo, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/Select/Select";
import Modal from "./components/Modal/Modal";
import SearchInput from "./components/Input/SearchInput";
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
  const [selectedTitle, setSelectedTitle]=useState([]);
  const [searchQuery, setSearchQuery]=useState('');

  const createPost=(newPost)=>{
    setPosts([...posts,newPost]);
    setIsModalActive(false);
   }
  
  const sortedPost=useMemo(()=>{
    console.log('cработал рендер хука Мемо');
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;
      
    },[selectedSort,posts])
  
  const sortAndSearchedPosts = useMemo(()=>{    
    let newArray = sortedPost.filter(post=>post.title.toLowerCase().includes(searchQuery));
    return newArray;
  },[searchQuery, sortedPost]);  

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

  const checkedPost = (post) => {
    setSelectedTitle([...selectedTitle, post])
  }

  const removeCheckedPost = (post) => {
    let newArray = selectedTitle.filter((p) => p.id !== post.id);
    setSelectedTitle(newArray);
  }

  return (
    <div className="App">
      <MyButton  onClick={()=>setIsModalActive(true)}>Создать пост</MyButton>
      <Modal visible={isModalActive}
        setVisible={setIsModalActive} >
        <PostForm create={createPost} />
      </Modal>
      <div className="instruments">
      <Select defaultValue="Сортировка по "
             options={[
             {value:"title", name:"По названию"},
             {value:"message", name:"По описанию"}
        ]}
        value={selectedSort}
        sortPost={sortPost}
      />
      <SearchInput onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} placeholder="Поиск.."></SearchInput>
      </div>
      <div className="selectedItems">
        <div className="selectedPostInfo">Выбран посто о:</div>
        {selectedTitle ? (selectedTitle.map((post)=>(
        <div className="selectedPost" key={post.id}>{post.title}</div>
      ))): ''} </div>

      { sortAndSearchedPosts.length !== 0 ?
        <PostList posts={sortAndSearchedPosts}  checkedPost={checkedPost} removeCheckedPost={removeCheckedPost} remove={removePost} title="Список постов"/>
        : <div><h1 className="noposts">Посты не найдены</h1></div>
      }
      
      
    </div>
  );
}

export default App;
