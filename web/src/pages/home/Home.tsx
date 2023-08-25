import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiFetch from "../../api-endpoints/apiFetch";
import listAllPhotos, { Photo } from "../../api-endpoints/listAllPhotos";
import HighlightPhoto from "../../components/HighlightPhoto";
import ImageGrid from "../../components/ImageGrid";
import "../../styles/Home.css";

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showPhoto, setShowPhoto] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState<Photo>();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("query") || "";
  const collectionId = searchParams.get("collectionId");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotosByParams = async () => {
      const urlParams = new URLSearchParams();
      urlParams.append("query", query);
      urlParams.append("collectionId", collectionId!);
      const response = await apiFetch(`/listPhotos?${urlParams.toString()}`);
      if (response.status === 404) {
        navigate("/404");
      } else if (response.status === 400) {
        navigate("/error");
      } else {
        const data = await response.json().finally(() => setLoading(false));
        if (!data.length) {
          navigate("/no-photos");
        }
        setPhotos(data);
      }
    };
    setLoading(true);
    if (collectionId) {
      fetchPhotosByParams();
    } else {
      listAllPhotos()
        .then((p) => setPhotos(p))
        .finally(() => setLoading(false));
    }
  }, [query, collectionId, navigate]);

  return <>{showPhotos()}</>;

  function showPhotos() {
    if (loading) {
      return (
        <div className="loading">
          <div
            className="loader"
            style={{ color: "black", width: "80px" }}
          ></div>
        </div>
      );
    } else if (showPhoto) {
      return (
        <>
          <HighlightPhoto
            photo={clickedPhoto}
            onClick={() => setShowPhoto(false)}
          />
          <ImageGrid
            photos={photos}
            setShowPhoto={setShowPhoto}
            setClickedPhoto={setClickedPhoto}
          />
        </>
      );
    } else {
      return (
        <ImageGrid
          photos={photos}
          setShowPhoto={setShowPhoto}
          setClickedPhoto={setClickedPhoto}
        />
      );
    }
  }
}
