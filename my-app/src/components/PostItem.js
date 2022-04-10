import React from "react";
import { LikeCounter, DislikeCounter} from './Component/Component';
import '../App.css';

const PostItem = (props) => {
    
    return (
    <div className="post">
      <strong>{props.number}  </strong>
      <strong>{props.post.title}</strong>
      <div className="post_content">
        <div>{props.post.message}</div>
        <div className="post-btns">
          <button onClick={()=> props.remove(props.post)} className="remove_btn">Удалить</button>
        </div>
      </div>
      <div className="rating">
        <LikeCounter/>
        <DislikeCounter/>
      </div>
    </div>
    );
};
export default PostItem;