import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handlePost = async (title, body) => {
    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Установите правильный заголовок Content-Type
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
          tags: [],
          reactions: 0, // Установите значение числового поля
        }),
      });

      if (response.status === 200) {
        navigate('/posts');
      } else {
        console.error('Ошибка:', response.status);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
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
        <button onClick={() => handlePost(title, body)}>Post</button>
      </div>
    </>
  );
};
