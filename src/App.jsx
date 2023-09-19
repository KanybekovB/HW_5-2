import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { PostsPage } from "./pages/PostsPage";
import { CreatePage } from './pages/CreatePage'
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="create" element={<CreatePage />} />
        </Route>
      </Routes>
    </>
  );
}
