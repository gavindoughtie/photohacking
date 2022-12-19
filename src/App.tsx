import "./styles.css";
import Photo from "./Photo";
import { getUnsplashImages } from "./images";
import { useEffect, useState } from "react";

async function fetchImages(setImages: any) {
  const data = await getUnsplashImages("landscape");
  setImages(data);
}

type ImageData = {
  src: string;
};

export default function App() {
  const [images, setImages] = useState<ImageData[]>();
  useEffect(() => {
    if (!images?.length) {
      fetchImages(setImages);
    }
  });
  let photos;
  if (images) {
    photos = images.map((imgData) => (
      <Photo src={imgData.src} size={300} alt="Demo" />
    ));
  } else {
    photos = <div>LOADING</div>;
  }
  return (
    <div className="App">
      <div className="gallery">{photos}</div>
    </div>
  );
}
