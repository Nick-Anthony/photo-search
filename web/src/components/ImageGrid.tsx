import { Photo } from "../api-endpoints/listAllPhotos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { Dispatch, SetStateAction } from "react";
import "../styles/ImageGrid.css";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

interface ImageGridProps {
  photos: Photo[];
  setShowPhoto: Dispatch<SetStateAction<boolean>>;
  setClickedPhoto: Dispatch<SetStateAction<Photo | undefined>>;
}

function ImageGrid(props: ImageGridProps) {
  const { photos, setShowPhoto, setClickedPhoto } = props;

  return (
    <div className="container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.url}
              onClick={(e) => handleClick(e, photo)}
              style={{ width: "100%", display: "block" }}
              alt={photo.description}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>

  );

  function handleClick(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    photo: Photo
  ) {
    e.stopPropagation();
    setClickedPhoto(photo);
    setShowPhoto(true);
    navigate(`/photos/${photo.id}`);
    console.log("hello");
  }
}
export default ImageGrid;
