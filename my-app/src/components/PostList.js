import React from "react";
import PostItem from "./PostItem";
 const PostList = ({posts, title, remove, checkedPost, removeCheckedPost}) => { 
    return (
        <div>
            <h1 className="head">{title}</h1>
            {posts.map((post, index) => (
                <PostItem remove={remove} removeCheckedPost={removeCheckedPost} 
                checkedPost={checkedPost} key={post.id} post={post} number={index+1}/>
            ))}
        </div>
        )
 }

export default PostList;