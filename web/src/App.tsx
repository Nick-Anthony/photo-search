import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import ErrorStatement from "./pages/ErrorStatement";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/error"
          element={<ErrorStatement errorText={"Error Statement"} />}
        />
        <Route
          path="/no-photos"
          element={<ErrorStatement errorText={"No Photos Found"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
