import { Routes, Route } from "react-router-dom";
import { Post } from "../pages/Post";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Route>
    </Routes>
  );
}
