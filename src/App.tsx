import "./styles.css";
import Photo from "./Photo";
import { getUnsplashImages } from "./images";
import { useEffect, useState, ChangeEvent } from "react";

async function fetchImages(setImages: any) {
  const data = await getUnsplashImages("landscape");
  setImages(data);
}

type ImageData = {
  src: string;
};

export default function App() {
  const [images, setImages] = useState<ImageData[]>();
  const [rowSize, setRowSize] = useState(300);
  useEffect(() => {
    if (!images?.length) {
      fetchImages(setImages);
    }
  });
  let photos;
  if (images) {
    photos = images.map((imgData, i) => (
      <Photo seq={i} key={i} src={imgData.src} alt="Demo" size={rowSize} />
    ));
  } else {
    photos = <div>LOADING</div>;
  }
  const handleRowSizeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseFloat(e.target.value);
    console.log({ newSize, e });
    setRowSize(newSize);
  };
  return (
    <div className="App">
      <input
        type="range"
        min={100}
        max={500}
        step={1}
        value={rowSize}
        onChange={handleRowSizeChanged}
      />
      <div className="gallery">{photos}</div>
    </div>
  );
}
