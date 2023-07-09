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
        <p>{photo?.photographer.name}</p>
        <p>{photo?.photographer.twitterUsername}</p>
      </div>
    </div>
  );
}

export default HighlightPhoto;
