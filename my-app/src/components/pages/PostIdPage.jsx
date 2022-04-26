import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import '../../App.css';

const PostIdPage=()=> {
    const [post, setPost]=useState({});
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Вы открыли страницу поста {params.id}</h1>
            <div>{params.title}</div>
            <div>{params.body}</div>
        </div>
    );
}

export default PostIdPage;