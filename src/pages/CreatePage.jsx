import { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

export const CreatePage = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handlePost = (title, body) => {
    axios({
        method: 'POST',
        url: 'https://dummyjson.com/posts/add',
        data: {
            title: title,
            body: body,
            userId: 1,
            tags: [],
            reactions: Number
        },
    })
    navigate('/posts')
    
  }
//   const handlePost = async(title, body) => {
//     const response = await fetch('https://dummyjson.com/posts/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             title: title,   
//             body: body,
//             userId: 5,
//             tags: [1,2,3],
//             reactions: null
//         })
//         .then(resp => resp.json())
//         .then(console.log(response.data))
//     })
//   };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>
    </>
  );
};
