import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../pages/error";
import { Home } from "../pages/home";
import { Layout } from "../layout";
export function Routeur() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
