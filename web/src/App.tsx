import React, { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import listPhotos, { Photo } from "./api-endpoints/listPhotos";
import ImageGrid from "./components/ImageGrid";

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    listPhotos().then((p) => setPhotos(p));
  }, []);

  return (
    <>
      <TopBar />
      <ImageGrid photos={photos} />
    </>
  );
}

export default App;
