import { Photo } from "../api-endpoints/listAllPhotos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { Dispatch, SetStateAction } from "react";
import "../styles/ImageGrid.css";

interface ImageGridProps {
  photos: Photo[];
  setShowPhoto: Dispatch<SetStateAction<boolean>>;
  setClickedPhoto: Dispatch<SetStateAction<Photo | undefined>>;
  showPhoto: boolean;
}

function ImageGrid(props: ImageGridProps) {
  const { photos, setShowPhoto, setClickedPhoto, showPhoto } = props;

  return (
    <div className="container">
      <div className="grid">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.url}
                onClick={showPhoto ? undefined : (e) => handleClick(e, photo)}
                style={{ width: "100%", display: "block" }}
                alt={photo.description}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );

  function handleClick(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    photo: Photo
  ) {
    e.stopPropagation();
    console.log(photo);
    setClickedPhoto(photo);
    setShowPhoto(true);
  }
}
export default ImageGrid;
