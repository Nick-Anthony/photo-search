import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import ErrorStatement from "./pages/ErrorStatement";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";

export interface Form {
  query?: string;
  collection?: { id: number; name: string };
}

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

/* import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import listAllPhotos, { Photo } from "./api-endpoints/listAllPhotos";
import ImageGrid from "./components/ImageGrid";
import apiFetch from "./api-endpoints/apiFetch";
import HighlightPhoto from "./components/HighlightPhoto";
import { Outlet, useNavigate } from "react-router-dom";

export interface Form {
  query?: string;
  collection?: { id: number; name: string };
}

export interface ValidationError {
  error: {
    location: string;
    msg: string;
    path: string;
    type: string;
  };
}

function App() {
  const navigate = useNavigate();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [form, setForm] = useState<Form>({
    query: "",
  });
  const [errors, setErrors] = useState<ValidationError[]>();
  const [submitting, setSubmitting] = useState(false);

  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    listAllPhotos().then((p) => setPhotos(p));
    //navigate("/photos");
  }, [navigate]);

  return (
    <>
      <TopBar
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        showPhoto={showPhoto}
      />
      {showPhotos()}
    </>
  );

  async function handleSubmit(e: FormEvent) {
    setSubmitting(true);
    setErrors(undefined);
    e.preventDefault();
    const params = {
      query: form?.query,
      collectionId: form?.collection?.id.toString(),
    };
    const urlParams = new URLSearchParams(params as Record<string, string>);
    console.log(`/listPhotos?${urlParams.toString()}`);
    const response = await apiFetch(`/listPhotos?${urlParams.toString()}`);
    const data = await response.json();
    if (response.status === 400) {
      console.log(data.errors);
      setErrors(data.errors);
    } else {
      setPhotos(data);
    }
    setSubmitting(false);
    navigate("/photos");
  }

  function showPhotos() {
    if (submitting) {
      return (
        <div className="loading">
          <div
            className="loader"
            style={{ color: "black", width: "80px" }}
          ></div>
        </div>
      );
    }
    if (errors) {
      return (
        <div className="error">
          <p className="error-text">Error Statement</p>
        </div>
      );
    }
    if (!photos.length) {
      return <p>no images</p>;
    }
    return <Outlet context={{ photos, setShowPhoto, showPhoto }} />;
  }
}
export default App;
 */
