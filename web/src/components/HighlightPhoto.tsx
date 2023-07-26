import { Photo } from "../api-endpoints/listAllPhotos";
import React, { useEffect, useRef } from "react";
import "../styles/HighlightPhoto.css";

interface PhotoProps {
  photo?: Photo;
  callback: Function;
}

function HighlightPhoto(props: PhotoProps) {
  const { photo, callback } = props;

  const showPictureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHidePicture = (e: MouseEvent) => {
      if (
        showPictureRef.current &&
        !showPictureRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleHidePicture, true);
  }, [callback]);

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
