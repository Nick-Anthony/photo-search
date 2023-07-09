import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import listAllPhotos, { Photo } from "./api-endpoints/listAllPhotos";
import ImageGrid from "./components/ImageGrid";
import apiFetch from "./api-endpoints/apiFetch";
import HighlightPhoto from "./components/HighlightPhoto";

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
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [form, setForm] = useState<Form>({
    query: "",
  });
  const [errors, setErrors] = useState<ValidationError[]>();
  const [submitting, setSubmitting] = useState(false);

  const [showPhoto, setShowPhoto] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState<Photo>();

  useEffect(() => {
    listAllPhotos().then((p) => setPhotos(p));
  }, []);

  return (
    <>
      {showPhoto ? (
        <HighlightPhoto
          photo={clickedPhoto}
          callback={() => setShowPhoto(false)}
        />
      ) : (
        <></>
      )}
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
  }

  function showPhotos() {
    if (submitting) {
      return <p>loading</p>;
    }
    if (errors) {
      return <p>error</p>;
    }
    if (!photos.length) {
      return <p>no images</p>;
    }
    return (
      <ImageGrid
        photos={photos}
        setShowPhoto={setShowPhoto}
        setClickedPhoto={setClickedPhoto}
        showPhoto={showPhoto}
      />
    );
  }
}
export default App;
