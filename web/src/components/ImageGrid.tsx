import { Photo } from "../api-endpoints/listPhotos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

interface ImageGridProps {
  photos: Photo[];
}

function ImageGrid(props: ImageGridProps) {
  const { photos } = props;
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            style={{ width: "100%", display: "block" }}
            alt={photo.description}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
export default ImageGrid;
