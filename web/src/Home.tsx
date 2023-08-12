import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HighlightPhoto from "./components/HighlightPhoto";
import ImageGrid from "./components/ImageGrid";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/photos" element={<ImageGrid />}>
            <Route path="/photos/:id" element={<HighlightPhoto />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
