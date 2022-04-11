import React ,{useState} from 'react';
import MyInput from '../Input/MyInput';
import MyButton from '../Button/Button';
import './PostForm.css';

const PostForm = ({create}) => {
  const [title,setTitle]=useState('');
  const [message,setMessage]=useState('');
  
   const onChangeTitle=(e)=>{
    console.log(e.target.value);
    setTitle(e.target.value);

  }
  const onChangeMessage=(e)=>{
    console.log(e.target.value);
    setMessage(e.target.value);  }
    
  let onAddNewPost = (e) => { 
    const { target } = e
    e.preventDefault()

    if(!target.checkValidity()) {
        target.classList.add('enable-validation')
    } else {
        target.classList.remove('enable-validation')
    }
    const newPost={
      id: Date.now(), 
      title, 
      message 
    }    
   create(newPost);
   setTitle('');
   setMessage('');   
  }; 

    return (
      <form id="form" onSubmit={onAddNewPost} noValidate>
        
        <MyInput onChange={onChangeTitle} type="text" placeholder="Название  поста" 
        value={title} minLength="2" maxLength="15" required  />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangeMessage} type="text" placeholder=" Описание  поста" 
        value={message} minLength="2" maxLength="50" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyButton>Добавить пост</MyButton>       
      </form>
    );
};

export default PostForm;