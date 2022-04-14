import React, {useEffect} from "react";
import { LikeCounter, DislikeCounter} from './Component/Component';
import '../App.css';

const PostItem = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    
  };

  useEffect(() => {
    if(checked){
    props.checkedPost(props.post)
  } else {
    props.removeCheckedPost(props.post)
    }

  }, [checked])

    return (
    <div className="post">
      <input onChange={handleChange} type="checkbox" checked={checked}></input>
      <strong className="post_title">{props.number}</strong>
      <strong className="post_title">{props.post.title}</strong>
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