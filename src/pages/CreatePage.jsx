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
    .then((response) => {
        if (response.status === 200) {
          navigate('/posts');
        }
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }

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
