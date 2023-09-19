import { useState, useEffect } from "react";
import axios from "axios";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((resp) => setPosts(resp.data.posts));
  }, []);

  return (
    <>
      <section>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
