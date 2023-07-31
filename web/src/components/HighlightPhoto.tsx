import { Photo } from "../api-endpoints/listAllPhotos";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import "../styles/HighlightPhoto.css";
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

interface PhotoProps {
  photos: Photo[];
  setShowPhoto: Dispatch<SetStateAction<boolean>>;
}

function HighlightPhoto() {
  const { photos, setShowPhoto }: PhotoProps = useOutletContext();

  const navigate = useNavigate();

  const { id } = useParams();

  const showPictureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHidePicture = (e: MouseEvent) => {
      if (
        showPictureRef.current &&
        !showPictureRef.current.contains(e.target as Node)
      ) {
        setShowPhoto(false);
        navigate("/photos");
      }
    };

    document.addEventListener("click", handleHidePicture, true);
  }, [setShowPhoto, navigate]);

  if (!id) {
    return <p>Error</p>;
  }

  const photo = photos.find((p) => p.id === parseInt(id));

  return (
    <div className="Container">
      <div className="HighlightPhoto" ref={showPictureRef}>
        <img className="Photo" src={photo?.url} alt={photo?.description}></img>
        <div className="Photographer">
          <img
            className="Profile"
            src={
              photo?.photographer.profileImageUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            }
            alt={photo?.photographer.name}
          ></img>
          <div className="PhotographerLinks">
            <p className="Name">{photo?.photographer.name}</p>
            {photo?.photographer.instagramUsername && (
              <a
                className="Instagram"
                href={`https://www.instagram.com/${photo?.photographer.instagramUsername}/`}
                rel="noreferrer"
                target="_blank"
              >
                @{photo?.photographer.instagramUsername}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightPhoto;
